import { useState } from 'react';
import { Phone } from './types/Phone';

export function getCards(from: number, to: number): number[] {
	const cards = [];

	for (let n = from; n <= to; n += 1) {
		cards.push(n);
	}

	return cards;
}

export const paginatePhones = (phonesToPaginate: Phone[], currentCardPag: number) => {
	const CARDS_PER_PAGE = 4;
	const totalPages = Math.ceil(phonesToPaginate.length / CARDS_PER_PAGE);
	const startIndex = (currentCardPag - 1) * CARDS_PER_PAGE;
	const endIndex = startIndex + CARDS_PER_PAGE;
	const paginatedPhones = phonesToPaginate.slice(startIndex, endIndex);
	return { paginatedPhones, totalPages };
};

export const usePageChanger = (initialValue: number) => {
	const [currentCardPag, setCurrentCarPag] = useState(initialValue);
	const onPageChange = (page: number) => setCurrentCarPag(page);

	const total = 36;
	const startingCard = currentCardPag * 4 - 3;
	const endingCard = currentCardPag + 3 > total
		? total
		: startingCard + 3;

	const numberOfPages = Math.round(total / 4);

	const showingCards = getCards(startingCard, endingCard);
	const firstPage = currentCardPag === 1;
	const lastPage = currentCardPag === numberOfPages;

	return { currentCardPag, onPageChange, startingCard, endingCard, showingCards, firstPage, lastPage };
};