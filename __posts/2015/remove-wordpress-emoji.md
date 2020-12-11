---
title: 'Remove Emoji Support in WordPress 4.2+'
date: '2015-05-25'
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

Did anyone actually ask around before making this "feature" mandatory? Let's get rid of this crap...

**Option 1**

Install Ryan Hellyer's "[Disable Emojis](https://wordpress.org/plugins/disable-emojis/)" plugin.

**Option 2**

Custom code. Place following into `functions.php`

```
<?php
//* Do NOT include the opening php tag shown above. Copy the code shown below into functions.php

/**
 * Remove emoji support.
 */
function grd_remove_emoji() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

	// Remove from TinyMCE
	add_filter( 'tiny_mce_plugins', 'grd_remove_tinymce_emoji' );
}
add_action( 'init', 'grd_remove_emoji' );

/**
 * Filter out the tinymce emoji plugin.
 */
function grd_remove_tinymce_emoji( $plugins ) {

	if ( ! is_array( $plugins ) ) {
		return array();
	}

	return array_diff( $plugins, array( 'wpemoji' ) );
}
```