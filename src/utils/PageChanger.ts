import { useState } from 'react';

export const usePageChanger = (initialValue: number, total: number, perPage: number) => {
	const [currentCardPag, setCurrentCarPag] = useState(initialValue);
	const onPageChange = (page: number) => setCurrentCarPag(page);
	const startingCard = currentCardPag * perPage - (perPage - 1);
	const endingCard = currentCardPag + (perPage - 1) > total
		? total
		: startingCard + (perPage - 1);
	const numberOfPages = perPage > 1 
		? Math.ceil(total / perPage)
		: total - 3;
	const firstPage = currentCardPag === 1;
	const lastPage = currentCardPag === numberOfPages;

	return { currentCardPag, onPageChange, startingCard, endingCard, firstPage, lastPage };
};

export function getNumbers(from: number, to: number): number[] {
	const numbers = [];

	for (let n = from; n <= to; n += 1) {
		numbers.push(n);
	}

	return numbers;
}
