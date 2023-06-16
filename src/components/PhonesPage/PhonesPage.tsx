import React, { useCallback, useState } from 'react';
import { useCatalogContext } from '../CatalogContext';
import Card from '../Card/Card';

import { Sorted } from '../../types/Sorted';
import { getNumbers, usePageChanger } from '../../utils/PageChanger';
import Button from '../Features/Button';
import './Phones.scss';
import { useChangeCatalog } from '../../utils/ChangeCatalog';

export default function PhonesPage() {
	const { sortedPhones, sort, setSort } = useCatalogContext();
	const [perPage, setPerPage] = useState(16);

	const pagin = useChangeCatalog(sortedPhones.length, perPage);
	const { firstButton, lastButton, maxPages, onChanger, activeButton } = pagin;

	const handlePerpage = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
		setPerPage(Number(event.target.value));
	}, [perPage, activeButton, sortedPhones]);


	const handleSort = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
		const choose = event.target.value;
		switch (choose) {
		case 'Newest': setSort(Sorted.Newest);
			break;
		case 'PriceUp': setSort(Sorted.PriceUp);
			break;
		case 'PriceDown': setSort(Sorted.PriceDown);
			break;
		}
	}, [sort]);

	const page = usePageChanger(1, sortedPhones.length, perPage);
	const { currentCardPag, onPageChange, startingCard, endingCard, firstPage, lastPage } = page;

	const showingCards = sortedPhones.slice(startingCard - 1, endingCard);
	
	const handleButtonPrev = useCallback(() => {
		if (activeButton > 1 && currentCardPag > 1) {
			onPageChange(currentCardPag - 1);
			onChanger(activeButton - 1);
		}
	}, [activeButton]);

	const handleButtonNext = useCallback(() => {
		if (activeButton < maxPages && currentCardPag < maxPages) {
			onPageChange(currentCardPag + 1);
			onChanger(activeButton + 1);
		}
	}, [activeButton]);

	const handlePage = useCallback((page: number) => {
		onPageChange(page);
		onChanger(page);
	}, [activeButton, perPage]);

	return (
		<div className='phones'>
			<header className='phones__header header'>
				<h1 className='header__title'>Mobile phones</h1>
				<p className='header__title-text'>95 models</p>
			</header>
			<section>
				<div className='phones__sorting'>
					<div>
						<p className='phone__sorting-text'>Sort by</p>
						<label htmlFor="sort" >
							<select name="sort" id="sort" value={sort || 'Choose sort'} onChange={handleSort} className='phones__sorting-sortby' >
								<option value="Newest">Newest</option>
								<option value="PriceUp">Price Up</option>
								<option value="PriceDown">Price Down</option>
							</select>
						</label>
					</div>
					<div>
						<p className='phone__sorting-text'>Items on page</p>
						< label htmlFor="page" className='phones__sorting-page'>
							<select name="page" id="page" value={perPage}onChange={handlePerpage} className='phones__sorting-pages'>
								<option value="4">4</option>
								<option value="16">16</option>
								<option value="20">20</option>
							</select></label></div>

				</div>
				<article className='phones__cards'>
					<div className='phones__cards phones__cards-card'>
						{showingCards.map(phone => <Card phone={phone} key={phone.id} />)}
					</div>
				</article>
				<footer className='phones___footer'>
					<div className='phones__footer-button'>
						<button onClick={handleButtonPrev} className={`${firstPage && 'phones__footer__disabled'}`}>{'<'}</button>
						{getNumbers(firstButton, lastButton + 1).map(page => <Button
							key={page}
							page={page}
							current={currentCardPag}
							handlePage={handlePage} />)}
						<button onClick={handleButtonNext} className={`${lastPage && 'phones__footer__disabled'}`}>{'>'}</button>
					</div>
				</footer>
			</section>
		</div>
	);
}
