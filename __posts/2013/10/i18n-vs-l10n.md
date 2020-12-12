---
title: 'i18n vs L10n'
date: '2013-10-09'
excerpt: ''
category:
  - 'code'
tags:
  - 'wordpress'
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

Some quick definitions:

- i18n stands for "internationalization"
- L10n stands for "localization"
- Both are **numeronyms**, or "number based words".
- The numbers come from the _number of characters in between the "i" and the "n"_. You can read all about their storied history [here](https://en.wikipedia.org/wiki/Internationalization_and_localization) and [here](http://wordpress.org/news/2004/04/l10n-i18n/).

### How i18n (internationalization) works in WordPress

By wrapping some text in a nifty PHP function, we allow that text to be translated into another language.

```
<?php esc_html_e( 'This text will be translated', 'text-domain' ); ?>
```

Or

```
$foo = esc_html__( 'This text will also be translated', 'text-domain' );
```

Or

```
echo '<h1 class="title">' . esc_html__( 'An awesome post title will be translated as well', 'text-domain' ) . '</h1>';
```

All three of those examples will be translated. All three of them do the exact same thing. Check out the [WordPress Codex](http://codex.wordpress.org/I18n_for_WordPress_Developers), read [this post](http://ottopress.com/2012/internationalization-youre-probably-doing-it-wrong/) from Otto, and check out the video from Lisa Sabin-Wilson (below) to learn how to properly "Internationalize" your theme or plugin.

http://www.youtube.com/watch?v=A2T60rvh0dc

_[Lisa's slides](http://www.slideshare.net/LSWilson/internationalization-preparing-your-wordpress-theme-for-the-rest-of-the-world) via Slideshare_

### How L10n (localization) can help

If you've ever looked at the source code of any WordPress run web site, then you've seen:

```
/* <![CDATA[ ]]> */
```

and thought? "What is this wacky code?" It's localization in action! Here is a real world example (from my Radio Theme) using localization to pass variables onto jQuery:

```
/* <![CDATA[ */
var radioL10n = {"nivo_effect":"random","nivo_speed":"3000","fb_app_id":"123940271011545"};
/* ]]> */
```

Here is `/wp-content/themes/radio/lib/js/radio.js`

```
// Load Default Nivo Settings
jQuery(document).ready(function($) {
 'use strict';
 $("#slider").nivoSlider({
   effect: radioL10n.nivo_effect,
   pauseTime: radioL10n.nivo_speed
 });
});

// Access to Facebook's API
 window.fbAsyncInit = function() {
 FB.init({
   appId : radioL10n.fb_app_id
 });
});
```

Notice the _radioL10n.nivo_effect_ in the above code? That is the jQuery script looking for our localized _"nivo_effect:random"_ variable. Now, I can grab settings from the theme options page and pass them to jQuery through localization.

Here's a working snippet from my Radio Theme's options page, where I use `wp_localize_script();`

```
/**
 * Load theme scripts.
 *
 * @author Greg Rickaby
 * @since 1.0.0
 */
function scripts() {

  /** Enqueue theme custom script */
  wp_enqueue_script( 'radio', CHILD_URL . '/lib/js/radio.js', array( 'jquery' ), '1.0', true );

  /** Pass value from PHP to JS */
  $params = array(
    'nivo_effect' => genesis_get_option( 'nivo_effect', $settings_field ),
    'nivo_speed' => genesis_get_option( 'nivo_speed', $settings_field ),
    'fb_app_id' => genesis_get_option( 'station_facebook_app_id', $settings_field )
  );
  wp_localize_script( 'radio', 'radioL10n', $params );
}
```

Find out more about using localization in your theme by reading the [WordPress Codex](http://codex.wordpress.org/Function_Reference/wp_localize_script).