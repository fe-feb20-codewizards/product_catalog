import React from 'react';
import './CartItem.scss';
import PhoneInCart from '../../../types/PhoneInCart';

interface Props {
	phone: PhoneInCart;
	handleChangeQuantity: (id: string, value: number) => void;
	handleRemoveFromCart: (id: string) => void;
}

export function CartItem({
	phone,
	handleChangeQuantity,
	handleRemoveFromCart
}: Props) {
	const { image, name, price, quantity, id } = phone;

	return (
		<div className="cartItem">
			<div className="cartItem__info">
				<img
					className="cartItem__delete"
					src={process.env.PUBLIC_URL + '/images/remove-icon.svg'}
					onClick={() => handleRemoveFromCart(id)}
				/>
				<div className="cartItem__titleWrapper">
					<img
						className="cartItem__image"
						src={process.env.PUBLIC_URL + '/' + image}
						alt={name}
					/>
					<p className="cartItem__title">
						<span>{name}</span>
					</p>
				</div>
			</div>
			<div className="cartItem__amount">
				<div className='cartItem__amount-buttons'>
					<button
						className="cartItem__amount-button"
						onClick={() => handleChangeQuantity(id, -1)}
					>
						-
					</button>
					<p className="cartItem__amount-value">{quantity}</p>
					<button
						className="cartItem__amount-button"
						onClick={() => handleChangeQuantity(id, 1)}
					>
						+
					</button>
				</div>
				<p className="cartItem__price">{price}</p>
			</div >
		</div >


	);
}