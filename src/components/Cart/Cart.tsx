import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { CartItem } from './CartItem/CartItem';
import { Checkout } from './Checkout/Checkout';
import { Phone } from '../../types/Phone';
import PhoneInCart from '../../types/PhoneInCart';

export function Cart() {
	const mokeData: Phone[] = [
		{
			'id': '1',
			'category': 'phones',
			'phoneId': 'apple-iphone-7-32gb-black',
			'itemId': 'apple-iphone-7-32gb-black',
			'name': 'Apple iPhone 7 32GB Black',
			'fullPrice': 400,
			'price': 375,
			'screen': '4.7\' IPS',
			'capacity': '32GB',
			'color': 'black',
			'ram': '2GB',
			'year': 2016,
			'image': 'img/phones/apple-iphone-7/black/00.jpg'
		},
		{
			'id': '10',
			'category': 'phones',
			'phoneId': 'apple-iphone-11-pro-max-64gb-spacegray',
			'itemId': 'apple-iphone-11-pro-max-64gb-spacegray',
			'name': 'Apple iPhone 11 Pro Max 64GB Spacegray',
			'fullPrice': 1480,
			'price': 1400,
			'screen': '6.5\' OLED',
			'capacity': '64GB',
			'color': 'spacegray',
			'ram': '4GB',
			'year': 2019,
			'image': 'img/phones/apple-iphone-11-pro-max/spacegray/00.jpg'
		},
	];

	const [phones, setPhones] = useState<PhoneInCart[]>([]);
	const [checkoutSum, setCheckoutSum] = useState(0);
	const [allQuantity, setAllQuantity] = useState(0);

	//dodaje ilość sztuk do obiektu każdego telefonu
	useEffect(() => {
		setPhones(
			mokeData.map(phone => (
				{
					...phone,
					quantity: 1,
				}
			))
		);
	}, []);


	useEffect(() => {
		//oblicza sume koszyka
		setCheckoutSum(
			phones.reduce(
				(sum, phone) => sum + phone.price * phone.quantity,
				0
			)
		);

		//ustawia zbiorową ilość SZTUK w koszyku
		setAllQuantity(
			phones.reduce(
				(sum, phone) => sum + phone.quantity,
				0
			)
		);
	}, [phones]);

	const handleRemoveFromCart = (id: string) => {
		setPhones(
			phones.filter(phone => phone.id !== id)
		);

	};

	const handleChangeQuantity = (id: string, value: number) => {
		const current = phones.find(phone => phone.id === id);

		if (current?.quantity === 1 && value === -1) {
			handleRemoveFromCart(id);
		}

		setPhones((prev) => (
			prev.map((phone) => {
				if (phone.id === id) {
					return {
						...phone,
						quantity: phone.quantity + value,
					};
				}

				return phone;
			})
		));
	};

	return (
		<div className="cart">
			<h3 className="cart__title">Cart</h3>
			<div className="cart__content">
				<div className="cart__products">
					{phones.map(phone => (
						<CartItem
							key={phone.id}
							phone={phone}
							handleChangeQuantity={handleChangeQuantity}
							handleRemoveFromCart={handleRemoveFromCart}
						/>
					))}
				</div>
				<Checkout sum={checkoutSum} quantity={allQuantity} />
			</div>
		</div>
	);
}