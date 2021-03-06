// This file was automatically generated from menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace zz.ui.mdl.menu.tpl.
 */

goog.provide('zz.ui.mdl.menu.tpl');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.ui.mdl.menu.tpl.default = function(opt_data, opt_ignored) {
  return '<button id="demo-menu-lower-left" class="' + goog.getCssName('mdl-button') + ' ' + goog.getCssName('mdl-js-button') + ' ' + goog.getCssName('mdl-button--icon') + '"><i class="' + goog.getCssName('material-icons') + '">more_vert</i></button><ul id="1" class="' + goog.getCssName('mdl-menu') + ' ' + goog.getCssName('mdl-menu--bottom-left') + ' ' + goog.getCssName('mdl-js-menu') + ' ' + goog.getCssName('mdl-js-ripple-effect') + '" for="demo-menu-lower-left"><li id="t1" class="' + goog.getCssName('mdl-menu__item') + '">Some Action</li><li id="t2" disabled class="' + goog.getCssName('mdl-menu__item') + '">Another Action</li><li id="add" class="' + goog.getCssName('mdl-menu__item') + '">Add new menu item</li><li id="remove" class="' + goog.getCssName('mdl-menu__item') + '">Remove new menu item</li></ul>';
};
if (goog.DEBUG) {
  zz.ui.mdl.menu.tpl.default.soyTemplateName = 'zz.ui.mdl.menu.tpl.default';
}
