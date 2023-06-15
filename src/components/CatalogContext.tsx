import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/Phone';
import { getAllPhones } from '../api/phones';

interface ContextCatalog {
    uniquePhones: Phone[];
    favorites: Phone[];
    addToFavorites: (phone: Phone) => void;
    removeFromFavorites: (phone: Phone) => void;
}

export const CatalogContext = createContext<ContextCatalog>(
	{
		uniquePhones: [],
		favorites: [],
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		addToFavorites: () => {},
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		removeFromFavorites: () => {},
	});

export const CatalogContextProvider = (
	{ children }: {
          children: ReactNode
        },
) => {
	const [phonesData, setPhonesData] = useState<Phone[]>([]);
	const [favorites, setFavorites] = useState<Phone[]>([]);

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

	return (
		<CatalogContext.Provider value={{
			uniquePhones,
			favorites,
			addToFavorites,
			removeFromFavorites,
		}}
		>
			{children}
		</CatalogContext.Provider>
	);
};
    
export const useCatalogContext = () => useContext(CatalogContext);
    