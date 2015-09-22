# Redactor figcaption plugin.

Specify a caption for images while using [Redactor](http://imperavi.com/redactor/). This plugin will wrap your image in a figure tag and embed a figcaption tag as a sibling to the image.

```html

<figure>
  <img src="path/to/image.jpg" alt="This is alternate text.">
  <figcaption>This is a caption.</figcaption>
<figure>

```

Load the plugin javascript onto your page and add the plugin to your Redactor configuration.

```html

<script type="text/javascript">
$(function()
{
    $('#redactor').redactor({
        plugins: ['figcaption']
    });
});
</script>

```

I leave the css up to you.
