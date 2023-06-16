import React, { useState } from 'react';
import './Checkout.scss';

interface Props {
	sum: number;
	quantity: number;
	handleClearEntireCart: () => void;
}

export function Checkout({ sum, quantity, handleClearEntireCart }: Props) {
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleCheckout = () => {
		handleClearEntireCart();

		setShowConfirmation(true);
		setTimeout(() => {
			window.location.href = '/';
		}, 5000000);
	};

	return (
		<div>
			<div className="checkout">
				<div className="checkout__info">
					<p className="checkout__sum">{sum}</p>
					<p className="checkout__total">Total for {quantity} items</p>
				</div>
				{!showConfirmation ? (
					<button className="checkout__button" onClick={handleCheckout}>
						Checkout
					</button>
				) : (
					<div className="checkout__success-wrapper">
						<p className='checkout__success-title'>
							Thank you for your order.
						</p>
						<p className="checkout__success-message">
							Redirecting you to the <a href="/">homepage </a> in 5 seconds...
						</p>
					</div>
				)}
			</div>
		</div>
	);
}