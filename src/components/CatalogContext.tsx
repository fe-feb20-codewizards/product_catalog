/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Phone } from '../types/Phone';
import { getAllPhones } from '../api/phones';
import PhoneInCart from '../types/PhoneInCart';
import { getWidthWindow } from '../utils/getWinodw';

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
	widthCard: number,
	gap: number,
	shuffledPhones: Phone[],
	phonesData: Phone[],
}

export const CatalogContext = createContext<ContextCatalog>(
	{
		uniquePhones: [],
		favorites: [],
		shuffledPhones: [],
		addToFavorites: () => { },
		removeFromFavorites: () => {},
		cart: [],
		cartSum: 0,
		cartQuantity: 0,
		phonesData: [],
		addToCart: () => {},

		removeFromCart: () => { },
		changeCartItemQuantity: () => { },
		widthCard: 0,
		gap: 0,
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
		setCartSum(
			cart.reduce(
				(sum, phone) => sum + phone.price * phone.quantity,
				0
			)
		);

		setCartQuantity(
			cart.reduce(
				(sum, phone) => sum + phone.quantity,
				0
			)
		);
	}, [cart]);

	const widthCard = getWidthWindow() > 1200
		? 275
		: getWidthWindow() > 640
			? 240
			: 215;

	const gap = getWidthWindow() > 1200
		? 56
		: getWidthWindow() > 640
			? 48
			: 40;

	const getModelName = useCallback((name: string) => {
		const regex = /^(.+)\s\d+GB/;
		const match = name.match(regex);
		return match ? match[1] : name;
	}, [phonesData, cart]);

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

	const addToFavorites = useCallback((phone: Phone) => {
		setFavorites((prevFavorites) => {
			const newFavorites = [...prevFavorites, phone];
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
			return newFavorites;
		});
	},[favorites]);

	const removeFromFavorites = useCallback((phone: Phone) => {
		setFavorites((prevFavorites) => {
			const newFavorites = prevFavorites.filter(
				(favoritePhone) => favoritePhone.id !== phone.id
			);
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
			return newFavorites;
		});
	},[favorites]);

	const addToCart = useCallback((phone: Phone) => {
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
	},[cart]);

	const removeFromCart = useCallback((phone: string) => {
		setCart((prevCart) => {
			const newCart = prevCart.filter(
				(cartPhone) => cartPhone.id !== phone
			);
			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		});
	},[cart]);

	const changeCartItemQuantity = useCallback((id: string, value: number) => {
		const current = cart.find(phone => phone.id === id);

		setCart((prevCart) => {
			let newCart = [];

			if (current?.quantity === 1 && value === -1) {
				newCart = prevCart.filter(
					(cartPhone) => cartPhone.id !== id
				);
			} else { 
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
	},[cart]);

	const discountedPhones = useMemo(() => uniquePhones.filter(
		(phone) => phone.price < phone.fullPrice
	),[phonesData]);

	const shuffledPhones = useMemo(() => {
		return [...discountedPhones].sort(() => Math.random() - 0.5);
	}, [phonesData]);

	return (
		<CatalogContext.Provider value={{
			uniquePhones,
			favorites,
			addToFavorites,
			removeFromFavorites,
			phonesData,
			cart,
			cartSum,
			cartQuantity,
			addToCart,
			removeFromCart,
			changeCartItemQuantity,
			widthCard,
			gap,
			shuffledPhones,
		}}
		>
			{children}
		</CatalogContext.Provider>
	);
};
    
export const useCatalogContext = () => useContext(CatalogContext);
    