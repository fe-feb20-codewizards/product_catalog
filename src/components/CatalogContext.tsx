/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Phone } from '../types/Phone';
import { getAllPhones } from '../api/phones';
import { Sorted } from '../types/Sorted';

interface ContextCatalog {
	uniquePhones: Phone[];
	favorites: Phone[];
	sortedPhones: Phone[];
	setSort: (sort: Sorted) => void;
	sort: Sorted | null;
	addToFavorites: (phone: Phone) => void;
	removeFromFavorites: (phone: Phone) => void;
	cart: Phone[];
	addToCart: (phone: Phone) => void;
	removeFromCart: (phone: Phone) => void;
}

export const CatalogContext = createContext<ContextCatalog>(
	{
		uniquePhones: [],
		sortedPhones: [],
		setSort: () => { },
		sort: null,
		favorites: [],
		addToFavorites: () => {},
		removeFromFavorites: () => {},
		cart: [],
		addToCart: () => {},
		removeFromCart: () => { },
	});

export const CatalogContextProvider = (
	{ children }: {
          children: ReactNode
        },
) => {
	const [phonesData, setPhonesData] = useState<Phone[]>([]);
	const [sort, setSort] = useState<Sorted | null>(null);
	const [favorites, setFavorites] = useState<Phone[]>([]);
	const [cart, setCart] = useState<Phone[]>([]);

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

	const sortedPhones = useMemo(() => {
		let newPhones = phonesData;
		if (sort) {
			switch (sort) {
			case Sorted.Newest: newPhones = newPhones.sort((a, b) => b.year - a.year);
				break;
			case Sorted.PriceDown: newPhones = newPhones.sort((a, b) => b.price - a.price);
				break;
			case Sorted.PriceUp: newPhones = newPhones.sort((a, b) => a.price - b.price);
				break;
			}
		}

		return newPhones;
	}, [phonesData, sort]);

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
		setCart((prevCart) => {
			const newCart = [...prevCart, phone];
			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		});
	};

	const removeFromCart = (phone: Phone) => {
		setCart((prevCart) => {
			const newCart = prevCart.filter(
				(cartPhone) => cartPhone.id !== phone.id
			);
			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		});
	};

	return (
		<CatalogContext.Provider value={{
			uniquePhones,
			sortedPhones,
			setSort,
			sort,
			favorites,
			addToFavorites,
			removeFromFavorites,
			cart,
			addToCart,
			removeFromCart,
		}}
		>
			{children}
		</CatalogContext.Provider>
	);
};
    
export const useCatalogContext = () => useContext(CatalogContext);
    