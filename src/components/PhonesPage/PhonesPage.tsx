import React, { useCallback, useState } from 'react';
import { useCatalogContext } from '../CatalogContext';
import Card from '../Card/Card';

import { Sorted } from '../../types/Sorted';
import { usePageChanger } from '../../utils/PageChanger';
import './Phones.scss';
import { useChangeCatalog } from '../../utils/ChangeCatalog';
import { Link } from 'react-router-dom';
import Pagination from '../Features/Pagination/Pagination';

export default function PhonesPage() {
	const { sortedPhones, sort, setSort } = useCatalogContext();
	const [perPage, setPerPage] = useState(16);

	const pagin = useChangeCatalog(sortedPhones.length, perPage);
	const { firstButton, lastButton, maxPages, onChanger, activeButton } = pagin;
	const page = usePageChanger(1, sortedPhones.length, perPage);
	const { currentCardPag, onPageChange, startingCard, endingCard, firstPage, lastPage } = page;

	const resetPage = () => {
		onPageChange(1);
		onChanger(1);
	};

	const handlePerpage = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
		resetPage();
		setPerPage(Number(event.target.value));

	}, [perPage, activeButton, sortedPhones]);


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



	const showingCards = sortedPhones.slice(startingCard - 1, endingCard);

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
	}, [activeButton, perPage, currentCardPag, sortedPhones]);

	const handlePage = useCallback((page: number) => {
		onPageChange(page);
		onChanger(page);
	}, [activeButton, perPage]);

	return (
		<div className='phones'>
			<div>
				<Link to="/" className="phones__link">
					<img src={process.env.PUBLIC_URL + '/images/Home.jpg'} alt="" className='phones__home'/>
				</Link>
				{'    >    '} 
				<Link to="/phones" className="phones__link" >Phones</Link>
			</div>
			<header className='phones__header header'>
				<h1 className='header__title'>Mobile phones</h1>
				<p className='header__title-text'>95 models</p>
			</header>
			<section>
				<div className='phones__sorting'>
					<div>
						<p className='phone__sorting-text'>Sort by</p>
						<label htmlFor="sort" >
							<select
								name="sort" id="sort" value={sort || 'Choose sort'} onChange={handleSort} 
								className='phones__sorting phones__sorting-sortby' >
								<option value="NoSort" >No sort</option>
								<option value="Newest">Newest</option>
								<option value="Oldest">Oldest</option>
								<option value="PriceUp">Price Up</option>
								<option value="PriceDown">Price Down</option>
							</select>
						</label>
					</div>
					<div>
						<p className='phone__sorting-text'>Items on page</p>
						< label htmlFor="page" className='phones__sorting-page'>
							<select	
								name="page" id="page" value={perPage} onChange={handlePerpage} 
								className='phones__sorting phones__sorting-pages'>
								<option value="4">4</option>
								<option value="16">16</option>
								<option value="20">20</option>
							</select></label></div>

				</div>

				<div className='phones__pagination'>
					<Pagination
						handleButtonNext={handleButtonNext}
						handleButtonPrev={handleButtonPrev} 
						handlePage={handlePage}
						firstButton={firstButton}
						lastButton={lastButton}
						currentCardPag={currentCardPag}
						firstPage={firstPage}
						lastPage={lastPage}
					/>
				</div>
				<article className='phones__cards'>
					<div className='phones__cards phones__cards-card'>
						{showingCards.map(phone => <Card phone={phone} key={phone.id} />)}
					</div>
				</article>
				<div className='phones__pagination'>
					<Pagination
						handleButtonNext={handleButtonNext}
						handleButtonPrev={handleButtonPrev} 
						handlePage={handlePage}
						firstButton={firstButton}
						lastButton={lastButton}
						currentCardPag={currentCardPag}
						firstPage={firstPage}
						lastPage={lastPage}
					/>
				</div>
			</section>
		</div>
	);
}
