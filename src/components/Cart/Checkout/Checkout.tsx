import React from 'react';
import './Checkout.scss';

interface Props {
	sum: number;
	quantity: number;
}
export function Checkout({ sum, quantity }: Props) {
	return (
		<div>
			<div className="checkout">
				<div className="checkout__info">
					<p className="checkout__sum">{sum}</p>
					<p className="checkout__total">Total for {quantity} items</p>
				</div>
				<button className="checkout__button">Checkout</button>
			</div>
		</div>
	);
}