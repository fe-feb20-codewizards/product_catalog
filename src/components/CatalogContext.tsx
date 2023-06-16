import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/Phone';
import { getAllPhones } from '../api/phones';

interface ContextCatalog {
	uniquePhones: Phone[];
	cart: Phone[];
	addToCart: (phone: Phone) => void;
}

export const CatalogContext = createContext<ContextCatalog>({
	uniquePhones: [],
	cart: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	addToCart: () => {},
});

export const CatalogContextProvider = (
	{ children }: {
          children: ReactNode
        },
) => {
	const [phonesData, setPhonesData] = useState<Phone[]>([]);
	const [cart, setCart] = useState<Phone[]>([]);

	useEffect(() => {
		getAllPhones()
			.then((response) => {
				setPhonesData(response);
			})
			.catch((error) => {
				console.error(error.message);
			});
		const savedCart = localStorage.getItem('cart');
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

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

	const addToCart = (phone: Phone) => {
		setCart((prevCart) => {
			const newCart = [...prevCart, phone];
			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		});
	};

	return (
		<CatalogContext.Provider value={{
			uniquePhones,
			cart,
			addToCart,
		}}
		>
			{children}
		</CatalogContext.Provider>
	);
};
    
export const useCatalogContext = () => useContext(CatalogContext);
    