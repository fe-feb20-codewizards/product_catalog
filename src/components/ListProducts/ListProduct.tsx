import React, { useCallback, useMemo, useState } from 'react';
import Card from '../Card/Card';
import { Sorted } from '../../types/Sorted';
import { usePageChanger } from '../../utils/PageChanger';
import './ListProduct.scss';
import { useChangeCatalog } from '../../utils/ChangeCatalog';
import Pagination from '../Features/Pagination/Pagination';
import { Phone } from '../../types/Phone';
import { Tablet } from '../../types/Tablet';
import { Sorting } from '../Features/Sorting/Sorting';

interface ListProductProps {
    list: Phone[] | Tablet[],
}

export default function ListProduct({ list }: ListProductProps) {
	const [sort, setSort] = useState<Sorted | null>(null);
	const [perPage, setPerPage] = useState(16);
	const pagin = useChangeCatalog(list.length, perPage);
	const { firstButton, lastButton, maxPages, onChanger, activeButton } = pagin;
	const page = usePageChanger(1, list.length, perPage);
	const { currentCardPag, onPageChange, startingCard, endingCard, firstPage, lastPage } = page;

	const lastVisiblePage = Math.ceil(list.length / perPage);
	
	const sortedProducts = useMemo(() => {
		let newList = list;
		if (sort) {
			switch (sort) {
			case Sorted.Newest: newList = newList.sort((a, b) => b.year - a.year);
				break;
			case Sorted.PriceDown: newList = newList.sort((a, b) => b.price - a.price);
				break;
			case Sorted.PriceUp: newList = newList.sort((a, b) => a.price - b.price);
				break;
			case Sorted.Oldest: newList = newList.sort((a, b) => a.year - b.year);
				break;
			case Sorted.NoSort: newList = newList.sort((a, b) => a.itemId.localeCompare(b.itemId));
				break;
			default: newList;
				break;
			}
		}

		return newList;
	}, [list, sort]);
	const resetPage = useCallback(() => {
		onPageChange(1);
		onChanger(1);
	}, [sort]);

	const handlePerpage = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
		resetPage();
		setPerPage(Number(event.target.value));

	}, [perPage, activeButton, list]);

	const handleSort = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
		const choose = event.target.value;
		resetPage();
		switch (choose) {
		case 'Newest': setSort(Sorted.Newest);
			break;
		case 'Oldest': setSort(Sorted.Oldest);
			break;
		case 'PriceUp': setSort(Sorted.PriceUp);
			break;
		case 'PriceDown': setSort(Sorted.PriceDown);
			break;
		case 'NoSort': setSort(Sorted.NoSort);
			break;
		default: setSort(null);
			break;
		}
	}, [sort]);

	const showingCards = sortedProducts.slice(startingCard - 1, endingCard);

	const handleButtonPrev = useCallback(() => {
		if (activeButton > 1 && currentCardPag > 1) {
			onPageChange(currentCardPag - 1);
			onChanger(activeButton - 1);
		}
	}, [activeButton]);

	const handleButtonNext = useCallback(() => {
		if (currentCardPag < maxPages) {
			onPageChange(currentCardPag + 1);
			onChanger(activeButton + 1);
		}
	}, [activeButton, perPage, currentCardPag, sortedProducts]);

	const handlePage = useCallback((page: number) => {
		onPageChange(page);
		onChanger(page);
	}, [activeButton, perPage]);

	return (
		<div className='productList'>
			<div className="productList__sort">
				<Sorting
					sort={sort}
					handleSort={handleSort}
					perPage={perPage}
					handlePerpage={handlePerpage}
				/>
			</div>
			<div className='productList__pagination'>
				<Pagination
					handleButtonNext={handleButtonNext}
					handleButtonPrev={handleButtonPrev}
					handlePage={handlePage}
					firstButton={firstButton}
					lastButton={lastButton}
					currentCardPag={currentCardPag}
					firstPage={firstPage}
					lastPage={lastPage} 
					lastVisiblePage={lastVisiblePage}
				/>
			</div>
			<article className='productList__cards'>
				{showingCards.map(list => <Card product={list} key={list.id} />)}
			</article>
			<div className='ProductList__pagination'>
				<Pagination
					handleButtonNext={handleButtonNext}
					handleButtonPrev={handleButtonPrev}
					handlePage={handlePage}
					firstButton={firstButton}
					lastButton={lastButton}
					currentCardPag={currentCardPag}
					firstPage={firstPage}
					lastPage={lastPage} 
					lastVisiblePage={lastVisiblePage}
				/>
			</div>
		</div>
	);
}
