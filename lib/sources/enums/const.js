/**
 * @fileoverview Provide zz.ui.mdl.menu.enums.CONST base object.
 * @author popkov.aleksander@gmail.com (Alexander Popkov)
 */

goog.provide( 'zz.ui.mdl.menu.enums.CONST' );

/**
 * Store constants in one place so they can be updated easily.
 * @enum {string | number}
 */
zz.ui.mdl.menu.enums.CONST = {

    // Total duration of the menu animation.
    TRANSITION_DURATION_SECONDS: 0.3,
    // The fraction of the total duration we want to use for menu item animations.
    TRANSITION_DURATION_FRACTION: 0.8,
    // How long the menu stays open after choosing an option (so the user can see
    // the ripple).
    CLOSE_TIMEOUT: 150
};