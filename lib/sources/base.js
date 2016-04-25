/**
 * @fileoverview Provide zz.ui.mdl.menu base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.menu' );
goog.provide( 'zz.ui.mdl.menu.controllers.Menu' );

/**
 * Base namespace for zz.ui.mdl.menu module.
 * @const
 */
zz.ui.mdl.menu = zz.ui.mdl.menu || { };


goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.menu.views.Menu.CSS_CLASS, function( ){

    return new zz.ui.mdl.menu.controllers.Menu( );
} );

/**
 * Bootstrap module method.
 */
zz.ui.mdl.menu.bootstrap = function( ){

	//
};
window[ 'bootstrap' ] = zz.ui.mdl.menu.bootstrap;