<?php
/*
Plugin Name: Comicpress Keyboard Control
Plugin URI: https://github.com/Giwayume/comicpress-keyboard-control
Description: Allows for the use of arrow keys when navigating your comics. Designed for Comicpress 2.9.
Version: 1.1
Author: Matt Steven
Author URI: https://github.com/Giwayume/
License: GPLv2
*/

function add_kb_js() {
  wp_enqueue_script(
    'ckc-keyboard',
    plugins_url() . '/comicpress-keyboard-control/keyboard.js',
    '','',false
  );

  wp_enqueue_script(
    'ckc-focus',
    plugins_url() . '/comicpress-keyboard-control/setFocus.js',
    '','',true
  );
}

add_action('wp_enqueue_scripts', 'add_kb_js');

?>
