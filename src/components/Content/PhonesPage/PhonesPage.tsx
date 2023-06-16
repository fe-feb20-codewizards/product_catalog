import React, { useState } from 'react';
import { useCatalogContext } from '../../CatalogContext';
import Card from '../../Card/Card';
import './PhonesPage.scss';
import { Sorted } from '../../../types/Sorted';
import { getNumbers, usePageChanger } from '../../../utils';
import Button from '../Features/Button';

export function PhonesPage() {
	const { sortedPhones, sort, setSort } = useCatalogContext();
	const [perPage, setPerPage] = useState(16);

	const handlePerpage = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setPerPage(Number(event.target.value));
	};

	const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const choose = event.target.value;
		switch (choose) {
		case 'Newest': setSort(Sorted.Newest);
			break;
		case 'PriceUp': setSort(Sorted.PriceUp);
			break;
		case 'PriceDown': setSort(Sorted.PriceDown);
			break;
		}
	};

	const page = usePageChanger(1, sortedPhones.length, perPage);

	const { currentCardPag, onPageChange, startingCard, endingCard, firstPage, lastPage } = page;

	const showingCards = sortedPhones.slice(startingCard - 1, endingCard);
	const activeButton = 3;

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
							<select name="sort" id="sort" value={sort || 'Choose sort'} onChange={handleSort} className='phones__sorting-sortby'>
								<option value="Newest">Newest</option>
								<option value="PriceUp">Price Up</option>
								<option value="PriceDown">Price Down</option>
							</select>
						</label>
					</div>
					<div>
						<p className='phone__sorting-text'>Items on page</p>
						< label htmlFor="page" className='phones__sorting-page'>
							<select name="page" id="page" value={perPage} onChange={handlePerpage} className='phones__sorting-pages'>
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
					{getNumbers(activeButton - 3, activeButton + 3).map(page => <Button key={page} page={page}/>)}
				</footer>
			</section>
		</div>
	);
}
