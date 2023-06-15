import React, { useCallback } from 'react';
import './newModels.scss';
import Card from '../../Card/Card';
import { usePageChanger } from '../../../utils';
import { Link } from 'react-router-dom';
import { useCatalogContext } from '../../CatalogContext';

export default function NewModels() {
	const {uniquePhones} = useCatalogContext();
	const latestPhones = uniquePhones.sort((a, b) => b.year - a.year);
	const page = usePageChanger(1, latestPhones.length, 0);
	const { currentCardPag, firstPage, lastPage, onPageChange, onPosChange, pos } = page;


	const getWidthWindow = useCallback(() => {
		const { innerWidth: width } = window;
		return width;
	}, [latestPhones]);

	const widthCard = getWidthWindow() > 1200
		? 275
		: getWidthWindow() > 640
			? 240
			: 215;

	const handleBack = () => {
		onPageChange(currentCardPag - 1);
		onPosChange(pos - widthCard * 4 - 56 * 4);
	}; 

	const handleForward = () => {
		onPageChange(currentCardPag + 1);
		onPosChange(pos + widthCard * 4 + 56 * 4);
	};

	const showingCards = latestPhones;
	return (
		<section className="new-models">
			<div className="new-models__header">
				<h2>Brand new models</h2>
				<div className="new-models__header__buttons">
					<Link
						to='prev'
						className={`new-models__header__buttons-left new-models__header__buttons__button ${firstPage && 'new-models__disabled'}`}
						onClick={handleBack}
						
					>
						<img
							className='new-models__header__buttons__button__img'
							src={process.env.PUBLIC_URL + '/images/arrow-left.svg'}
							alt="" />
					</Link>
					<Link
						to='next'
						onClick={handleForward}
						className={`new-models__header__buttons-right new-models__header__buttons__button ${lastPage && 'new-models__disabled'}`}
						
					>
						<img
							className='new-models__header__buttons__button__img'
							src={process.env.PUBLIC_URL + '/images/arrow-right.svg'}
							alt="" />
					</Link>
				</div>
			</div>
			<div className='new-models__cards'>
				{showingCards.map(card => <ul key={card.id} style={{
					width: `${widthCard * 4}px`, transition: 'transform 2000ms',
					transform: `translateX(-${pos}px)`,
				}}> <Card key={card.id} phone={card} /> </ul>)}
			</div>
		</section>
	);
}