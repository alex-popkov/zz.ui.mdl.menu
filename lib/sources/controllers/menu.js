// Copyright 2005 The ZZ Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Provide zz.ui.mdl.menu.controllers.Menu class.
 * @author popkov.aleksander@gmail.com (Alexander Popkov)
 */

goog.provide( 'zz.ui.mdl.menu.controllers.Menu' );

goog.require( 'goog.array' );
goog.require( 'goog.style' );
goog.require( 'goog.dom.classlist' );
goog.require( 'goog.events.EventType' );
goog.require( 'goog.ui.Component' );
goog.require( 'goog.ui.Menu' );
goog.require( 'zz.ui.mdl.menu.services.Popup' );
goog.require( 'zz.ui.mdl.controllers.BaseControl' );
goog.require( 'zz.ui.mdl.menu.views.Menu' );
goog.require( 'zz.ui.mdl.menuitem.enums.CSS' );
goog.require( 'zz.ui.mdl.menu.enums.CSS' );
goog.require( 'zz.ui.mdl.RippleControl' );

/**
 * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or decorate the button.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for document interaction.
 * @extends {goog.ui.Menu}
 * @constructor
 */
zz.ui.mdl.menu.controllers.Menu = function( opt_renderer, opt_domHelper ){

	goog.ui.Menu.call(

		this,
		undefined,
		opt_renderer || zz.ui.mdl.menu.views.Menu.getInstance( ),
		opt_domHelper );

	zz.ui.mdl.menu.services.Popup.getInstance( ).addClosable( this );

	/**
	 * Properties where all Ripples instances are stored.
	 * @type {Array}
	 * @private
	 */
	this.ripples_ = [ ];
};
goog.inherits( zz.ui.mdl.menu.controllers.Menu, goog.ui.Menu );
goog.tagUnsealableClass( zz.ui.mdl.menu.controllers.Menu );

/**
 * Called when the component's element is known to be in the document. Anything using document.getElementById etc.
 * should be done at this stage. If the component contains child components, this call is propagated to its children.
 * @override
 */
zz.ui.mdl.menu.controllers.Menu.prototype.enterDocument = function( ){

	goog.base( this, 'enterDocument' );

	this.setVisible( false );
	this.getHandler( ).listenWithScope(

		this.listElement_,
		goog.events.EventType.TRANSITIONEND,
		this.animationEndListener_,
		false,
		this
	);
	goog.array.forEach( this.getItemsElements( ), function( item ){

		if( goog.dom.classlist.contains( item, zz.ui.mdl.menuitem.enums.CSS.RIPPLE_EFFECT ) ){

			var i = this.ripples_.push( new zz.ui.mdl.RippleControl( ) );
			this.ripples_[ i - 1 ].decorate( item );
		}
	}, this );

};

/**
 * Deletes or nulls out any references to COM objects, DOM nodes, or other disposable objects. Classes that extend
 * {@code goog.Disposable} should override this method. Not reentrant. To avoid calling it twice, it must only be
 * called from the subclass' {@code disposeInternal} method. Everywhere else the public {@code dispose} method must
 * be used.
 * @inheritDoc
 **/
zz.ui.mdl.menu.controllers.Menu.prototype.disposeInternal = function( ){

	goog.base( this, 'disposeInternal' );
	this.getHandler( ).dispose( );
	zz.ui.mdl.menu.services.Popup.getInstance( ).removeClosable( this );
	goog.array.forEach( this.ripples_, function( ripple ){

		ripple.dispose( );
	} );
};

/**
 * Listener for animation end event.
 * @this {zz.ui.mdl.menu.controllers.Menu}
 * @private
 */
zz.ui.mdl.menu.controllers.Menu.prototype.animationEndListener_ = function( ){

	this.getRenderer( ).removeAnimatingClass( this );
};

/**
 * Setting up menu container element.
 * @param {Element} element
 */
zz.ui.mdl.menu.controllers.Menu.prototype.setContainerElement = function( element ){

	this.containerElement_ = element;
};

/**
 * Return menu container element.
 * @returns {Element}
 */
zz.ui.mdl.menu.controllers.Menu.prototype.getContainerElement = function( ){

	return this.containerElement_;
};

/**
 * Setting up menu outline element.
 * @param {Element} element
 */
zz.ui.mdl.menu.controllers.Menu.prototype.setOutlineElement = function( element ){

	this.outlineElement_ = element;
};

/**
 * Return menu outline element.
 * @returns {Element}
 */
zz.ui.mdl.menu.controllers.Menu.prototype.getOutlineElement = function( ){

	return this.outlineElement_;
};


/**
 * Setting up menu list element.
 * @param {Element} element
 */
zz.ui.mdl.menu.controllers.Menu.prototype.setListElement = function( element ){

	this.listElement_ = element;
};

/**
 * Return menu list element.
 * @returns {Element}
 */
zz.ui.mdl.menu.controllers.Menu.prototype.getListElement = function( ){

	return this.listElement_;
};

/**
 * Setting up menu item elements.
 * @param {Array} items
 */
zz.ui.mdl.menu.controllers.Menu.prototype.setItemsElements = function( items ){

	this.itemsElements_ = items;
};

/**
 * Return menu item elements.
 * @returns {Array}
 */
zz.ui.mdl.menu.controllers.Menu.prototype.getItemsElements = function( ){

	return this.itemsElements_;
};

/**
 * @override
 * @param {boolean} show
 */
zz.ui.mdl.menu.controllers.Menu.prototype.setVisible = function( show ){

	var visibilityChanged = zz.ui.mdl.menu.controllers.Menu.superClass_.setVisible.call( this, show, true );
	goog.style.setElementShown( this.getElement( ), true );
	return visibilityChanged;
};

/**
 * Open menu.
 * @param {Element=} opt_element
 */
zz.ui.mdl.menu.controllers.Menu.prototype.open = function( opt_element ){

	this.getRenderer( ).open( this, opt_element );
	goog.async.nextTick( function( ){

		this.setVisible( true );

	}, this )
};

/**
 * Close menu.
 * @param {Element=} opt_element
 */
zz.ui.mdl.menu.controllers.Menu.prototype.close = function( opt_element ){

	this.getRenderer( ).close( this, opt_element );
	goog.async.nextTick( function( ){

		this.setVisible( false );

	}, this )
};

/**
 * Toggle menu state.
 * @param {Element=} opt_element
 */
zz.ui.mdl.menu.controllers.Menu.prototype.toggle = function( opt_element ){

	if( this.isVisible( ) ){

		this.close( opt_element );

	}else{

		this.open( opt_element );
	}
};

/**
 * Add new menu item.
 * @param {zz.ui.mdl.menu.controllers.MenuItem} child
 * @param {number} index
 */
zz.ui.mdl.menu.controllers.Menu.prototype.addMenuItem = function( child, index ){

	this.addChildAt( child, index, true );
	this.setItemsElements( goog.dom.getElementsByClass( zz.ui.mdl.menu.enums.CSS.ITEM ) );
};

/**
 * Remove specified item from menu.
 * @param {zz.ui.mdl.menu.controllers.MenuItem} child
 */
zz.ui.mdl.menu.controllers.Menu.prototype.removeMenuItem = function( child ){

	this.removeChild( child, true );
	this.setItemsElements( goog.dom.getElementsByClass( zz.ui.mdl.menu.enums.CSS.ITEM ) );
};