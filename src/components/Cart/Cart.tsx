import React, { useState } from 'react';
import './Cart.scss';

export function Cart() {
	const phone = {
		title: 'Apple Iphone 14 Pro 128GB Silver (MQ023)',
		price: 999,
		id: 1,
		img: '/img/phones/apple-iphone-11/black/00.jpg'
	};
	const { img, title, price, id } = phone;

	const [showConfirmation, setShowConfirmation] = useState(false);
  
	const handleCheckout = () => {
		setShowConfirmation(true);
		setTimeout(() => {
			window.location.href = '/';
		}, 5000);
	};

	return (

		<div className="cart">
			<h3 className="cart__title">Cart</h3>
			<div className="cart__content">
				<div className="cart__products">
					<div className="cartItem">
						<div className="cartItem__info">
							<a className="cartItem__delete">x</a >
							<div className="cartItem__titleWrapper">
								<img className="cartItem__image" src={process.env.PUBLIC_URL + img} alt="product.name" />
								<p className="cartItem__title">
									<span>{title}</span>
								</p>
							</div>
						</div>
						<div className="cartItem__amount">
							<div className='cartItem__amount-buttons'>
								<button className="cartItem__amount-button">-</button>
								<p className="cartItem__amount-value">{22}</p>
								<button className="cartItem__amount-button" >+</button>
							</div>
							<p className="cartItem__price">{price}</p>
						</div >
					</div >

					<div className="cartItem">
						<div className="cartItem__info">
							<a className="cartItem__delete">x</a >
							<div className="cartItem__titleWrapper">
								<img className="cartItem__image" src={process.env.PUBLIC_URL + img} alt="product.name" />
								<p className="cartItem__title">
									<span>{title}</span>
								</p>
							</div>
						</div>
						<div className="cartItem__amount">
							<div className='cartItem__amount-buttons'>
								<button className="cartItem__amount-button">-</button>
								<p className="cartItem__amount-value">{22}</p>
								<button className="cartItem__amount-button" >+</button>
							</div>
							<p className="cartItem__price">{price}</p>
						</div >
					</div >

				</div>
				<div className="cart__checkout">
					<div className="checkout">
						<div className="checkout__info">
							<p className="checkout__sum">2657</p>
							<p className="checkout__total">Total for 3 items</p>
						</div>
						{!showConfirmation ? (
							<button className="checkout__button" onClick={handleCheckout}>
                                Checkout
							</button>
						) : (
							<p className='success-message'>
								Thank you for your order. Redirecting you to the homepage in 5 seconds...
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}