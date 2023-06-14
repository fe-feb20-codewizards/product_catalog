import { useState } from 'react';

export function getCards(from: number, to: number): number[] {
	const cards = [];

	for (let n = from; n <= to; n += 1) {
		cards.push(n);
	}

	return cards;
}

export const usePageChanger = (initialValue: number) => {
	const [currentCardPag, setCurrentCarPag] = useState(initialValue);
	const onPageChange = (page: number) => setCurrentCarPag(page);

	const total = 12;
	const startingCard = currentCardPag * 4 - 3;
	const endingCard = currentCardPag + 3 > total
		? total
		: startingCard + 3;

	const numberOfPages = Math.ceil(total / 4);

	const showingCards = getCards(startingCard, endingCard);
	const firstPage = currentCardPag === 1;
	const lastPage = currentCardPag === numberOfPages;

	return { currentCardPag, onPageChange, startingCard, endingCard, showingCards, firstPage, lastPage };
};