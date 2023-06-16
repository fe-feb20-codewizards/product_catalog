import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/Phone';
import { getAllPhones } from '../api/phones';
import PhoneInCart from '../types/PhoneInCart';

interface ContextCatalog {
	uniquePhones: Phone[];
	favorites: Phone[];
	addToFavorites: (phone: Phone) => void;
	removeFromFavorites: (phone: Phone) => void;
	cart: PhoneInCart[];
	cartSum: number;
	cartQuantity: number;
	addToCart: (phone: Phone) => void;
	removeFromCart: (phone: string) => void;
	changeCartItemQuantity: (id: string, value: number) => void;
}

export const CatalogContext = createContext<ContextCatalog>(
	{
		uniquePhones: [],
		favorites: [],
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		addToFavorites: () => {},
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		removeFromFavorites: () => {},
		cart: [],
		cartSum: 0,
		cartQuantity: 0,
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		addToCart: () => {},
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		removeFromCart: () => { },
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		changeCartItemQuantity: () => { },
	});

export const CatalogContextProvider = (
	{ children }: {
          children: ReactNode
        },
) => {
	const [phonesData, setPhonesData] = useState<Phone[]>([]);
	const [favorites, setFavorites] = useState<Phone[]>([]);
	const [cart, setCart] = useState<PhoneInCart[]>([]);
	const [cartSum, setCartSum] = useState(0);
	const [cartQuantity, setCartQuantity] = useState(0);

	useEffect(() => {
		getAllPhones()
			.then((response) => {
				setPhonesData(response);
			})
			.catch((error) => {
				console.error(error.message);
			});
		const savedFavorites = localStorage.getItem('favorites');
		if (savedFavorites) {
			setFavorites(JSON.parse(savedFavorites));
		}
		const savedCart = localStorage.getItem('cart');
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		//oblicza sume koszyka
		setCartSum(
			cart.reduce(
				(sum, phone) => sum + phone.price * phone.quantity,
				0
			)
		);

		//ustawia zbiorową ilość SZTUK w koszyku
		setCartQuantity(
			cart.reduce(
				(sum, phone) => sum + phone.quantity,
				0
			)
		);
	}, [cart]);

	const getModelName = (name: string) => {
		const regex = /^(.+)\s\d+GB/;
		const match = name.match(regex);
		return match ? match[1] : name;
	};

	const uniquePhones = Array.from(
		phonesData
			.reduce((map, phone) => {
				const modelName = getModelName(phone.name);
				if (!map.has(modelName)) {
					map.set(modelName, phone);
				}
				return map;
			}, new Map())
			.values()
	);

	const addToFavorites = (phone: Phone) => {
		setFavorites((prevFavorites) => {
			const newFavorites = [...prevFavorites, phone];
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
			return newFavorites;
		});
	};

	const removeFromFavorites = (phone: Phone) => {
		setFavorites((prevFavorites) => {
			const newFavorites = prevFavorites.filter(
				(favoritePhone) => favoritePhone.id !== phone.id
			);
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
			return newFavorites;
		});
	};

	const addToCart = (phone: Phone) => {
		const isInCart = cart.find(item => item.id === phone.id);

		if (!isInCart) {
			setCart((prevCart) => {
				const newCart = [
					...prevCart,
					{
						...phone,
						quantity: 1,
					}
				];
				localStorage.setItem('cart', JSON.stringify(newCart));
				return newCart;
			});
		}
	};

	const removeFromCart = (phone: string) => {
		setCart((prevCart) => {
			const newCart = prevCart.filter(
				(cartPhone) => cartPhone.id !== phone
			);
			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		});
	};

	const changeCartItemQuantity = (id: string, value: number) => {
		const current = cart.find(phone => phone.id === id);

		setCart((prevCart) => {
			let newCart = [];

			//jesli sztuki itemu = 1 i jest to operacja odejmowania to go usuwa całkowicie
			if (current?.quantity === 1 && value === -1) {
				newCart = prevCart.filter(
					(cartPhone) => cartPhone.id !== id
				);
			} else { //a jak mamy więcej sztuk, to dodaje value
				newCart = prevCart.map((phone) => {
					if (phone.id === id) {
						return {
							...phone,
							quantity: phone.quantity + value,
						};
					}

					return phone;
				});
			}

			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		});
	};

	return (
		<CatalogContext.Provider value={{
			uniquePhones,
			favorites,
			addToFavorites,
			removeFromFavorites,
			cart,
			cartSum,
			cartQuantity,
			addToCart,
			removeFromCart,
			changeCartItemQuantity,
		}}
		>
			{children}
		</CatalogContext.Provider>
	);
};
    
export const useCatalogContext = () => useContext(CatalogContext);
    