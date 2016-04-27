/**
 * @fileoverview Provide zz.ui.mdl.menu base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.menu' );

goog.require( 'goog.dom' );
goog.require( 'goog.events' );
goog.require( 'goog.ui.registry' );
goog.require( 'goog.ui.decorate' );

goog.require( 'zz.ui.mdl.button' );
goog.require( 'zz.ui.mdl.Menu' );
goog.require( 'zz.ui.mdl.MenuRenderer' );
goog.require( 'zz.ui.mdl.menu.tpl' );

/**
 * Base namespace for zz.ui.mdl.menu module.
 * @const
 */
zz.ui.mdl.menu = zz.ui.mdl.menu || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.menu.bootstrap = function( ){

	goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.MenuRenderer.CSS_CLASS, function( ){

		return new zz.ui.mdl.Menu( );
	} );

	//
    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.menu.tpl.default );

	var menu = goog.global.menu = goog.ui.decorate( goog.dom.getElement( '1' ) );
	var btn = goog.ui.decorate( goog.dom.getElement( 'demo-menu-lower-left' ) );
	var item = new zz.ui.mdl.MenuRenderer( 'Added menu item' );

	goog.events.listen( btn, goog.ui.Component.EventType.ACTION, function( ){

		menu.toggle( );
	} );

	goog.events.listen( menu, goog.ui.Component.EventType.ACTION, function( evt ){

		if( evt.target.getId( ) === 'add' ){

			menu.addMenuItem( item, 4 );
		}
		if( evt.target.getId( ) === 'remove' ){

			menu.removeMenuItem( item );
		}
	} );
};
goog.exportSymbol( 'zz.ui.mdl.menu.bootstrap', zz.ui.mdl.menu.bootstrap );