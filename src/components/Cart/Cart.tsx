import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { CartItem } from './CartItem/CartItem';
import { Checkout } from './Checkout/Checkout';
import { useCatalogContext } from '../CatalogContext';

export function Cart() {
	const { cart,
		cartQuantity,
		cartSum,
		removeFromCart,
		changeCartItemQuantity
	} = useCatalogContext();

	return (
		<div className="cart">
			<h3 className="cart__title">Cart</h3>
			<div className="cart__content">
				<div className="cart__products">
					{cart.map(phone => (
						<CartItem
							key={phone.id}
							phone={phone}
							handleChangeQuantity={changeCartItemQuantity}
							handleRemoveFromCart={removeFromCart}
						/>
					))}
				</div>
				<Checkout sum={cartSum} quantity={cartQuantity} />
			</div>
		</div>
	);
}