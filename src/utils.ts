import { useState } from 'react';

export const usePageChanger = (initialValue: number, len: number, initialPos: number) => {
	const [currentCardPag, setCurrentCarPag] = useState(initialValue);
	const [pos, setPos] = useState(initialPos);

	const onPosChange = (skip: number) => setPos(skip);
	const onPageChange = (page: number) => setCurrentCarPag(page);
	const perPage = 4;
	const total = len;
	const startingCard = currentCardPag * perPage - 3;
	const endingCard = currentCardPag + 3 > total
		? total
		: startingCard + 3;
	const numberOfPages = Math.ceil(total / perPage);
	const firstPage = currentCardPag === 1;
	const lastPage = currentCardPag === numberOfPages;

	return { currentCardPag, onPageChange, startingCard, endingCard, firstPage, lastPage, pos, onPosChange };
};