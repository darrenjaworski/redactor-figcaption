if (!RedactorPlugins) var RedactorPlugins = {};

(function($) {
  RedactorPlugins.figcaption = function() {
    return {

      init: function() {

        this.modal.addCallback('imageEdit', $.proxy(this.figcaption.imageEdit, this));

      },
      imageEdit: function() {

        var captionInput = $(document.createElement('input'))
          .attr('type', 'text')
          .attr('name', 'caption');

        var image = $('#redactor-image-box')
          .children('img');

        var caption = image.attr('data-caption');

        // check if caption exists
        if (caption) {
          captionInput.val(caption)
        } else {
          captionInput.attr("placeholder", "Caption placeholder.")
        }

        // append the caption input and a label
        $('#redactor-modal-body > section').append([
          $(document.createElement('label'))
          .attr('for', 'redactor-caption')
          .text('Caption'),
          captionInput
        ]);

        // on save click
        $('#redactor-modal').click(function(e) {
          if ($(e.target).hasClass('redactor-modal-action-btn')) {
            wrap();
          }
        });

        function wrap() {

          var caption = captionInput.val(),
            markup = image.siblings("figcaption").length;

          if (caption) {
            // if caption

            if (markup) {
              // if caption and markup

              image.attr('data-caption', captionInput.val());
              image.siblings("figcaption").html(captionInput.val());

            } else {
              // if caption and no markup

              image.attr('data-caption', captionInput.val());
              image.wrap("<figure></figure>")
              image.after("<figcaption>" + captionInput.val() + "</figcaption>")

            }

          } else {
            // else, no caption

            if (markup) {
              // no caption and markup

              image.unwrap();
              image.siblings("figcaption").remove();

            }

          }

        };

      }

    };
  };
})(jQuery);
