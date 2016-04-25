/**
 * @fileoverview Provide zz.ui.mdl.menu.enums.CSS base object.
 * @author popkov.aleksander@gmail.com (Alexander Popkov)
 */

goog.provide( 'zz.ui.mdl.menu.enums.CSS' );

/**
 * Store strings for class names defined by this component that are used in JavaScript. This allows us to simply change
 * it in one place should we decide to modify at a later date.
 * @enum {string}
 */
zz.ui.mdl.menu.enums.CSS = {

    ROOT_ELEMENT: goog.getCssName( 'mdl-menu' ),
    CONTAINER: goog.getCssName( 'mdl-menu__container' ),
    OUTLINE: goog.getCssName( 'mdl-menu__outline' ),
    ITEM: goog.getCssName( 'mdl-menu__item' ),
    ITEM_RIPPLE_CONTAINER: goog.getCssName( 'mdl-menu__item-ripple-container' ),
    RIPPLE_EFFECT: goog.getCssName( 'mdl-js-ripple-effect' ),

    // Statuses
    IS_UPGRADED: goog.getCssName( 'is-upgraded' ),
    IS_VISIBLE: goog.getCssName( 'is-visible' ),
    IS_ANIMATING: goog.getCssName( 'is-animating' ),

    // Alignment options
    BOTTOM_LEFT: goog.getCssName( 'mdl-menu--bottom-left' ),  // This is the default.
    BOTTOM_RIGHT: goog.getCssName( 'mdl-menu--bottom-right' ),
    TOP_LEFT: goog.getCssName( 'mdl-menu--top-left' ),
    TOP_RIGHT: goog.getCssName( 'mdl-menu--top-right' ),
    UNALIGNED: goog.getCssName( 'mdl-menu--unaligned' )
};


/**
 * Default CSS class to be applied to the root element of components rendered by this renderer.
 * @type {string}
 */
zz.ui.mdl.menu.views.Menu.CSS_CLASS = goog.getCssName( 'mdl-menu' );