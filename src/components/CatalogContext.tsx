/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Phone } from '../types/Phone';
import { getAllPhones } from '../api/phones';
import { Sorted } from '../types/Sorted';

interface ContextCatalog {
    uniquePhones: Phone[];
	sortedPhones: Phone[];
	setSort(sort: Sorted | null): void;
	sort: Sorted | null;
}

export const CatalogContext = createContext<ContextCatalog>(
	{
		uniquePhones: [],
		sortedPhones: [],
		setSort: () => { },
		sort: null,
	});

export const CatalogContextProvider = (
	{ children }: {
          children: ReactNode
        },
) => {
	const [phonesData, setPhonesData] = useState<Phone[]>([]);
	const [sort, setSort] = useState<Sorted | null>(null);
	// const [perPage, setPerPage] = useState(16);
	// const handlePerpage = (event: React.ChangeEvent<HTMLSelectElement>) => {
	// 	setPerPage(Number(event.target.value));
	// };

	// const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
	// 	const choose = event.target.value;
	// 	switch (choose) {
	// 	case 'Newest': setSort(Sorted.Newest);
	// 		break;
	// 	case 'PriceUp': setSort(Sorted.PriceUp);
	// 		break;
	// 	case 'PriceDown': setSort(Sorted.PriceDown);
	// 		break;
	// 	default: setSort(null);
	// 		break;
	// 	}
	// };

	useEffect(() => {
		getAllPhones()
			.then((response) => {
				setPhonesData(response);
			})
			.catch((error) => {
				console.error(error.message);
			});
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

	return (
		<CatalogContext.Provider value={{
			uniquePhones,
			sortedPhones,
			setSort,
			sort,
		}}
		>
			{children}
		</CatalogContext.Provider>
	);
};
    
export const useCatalogContext = () => useContext(CatalogContext);
    