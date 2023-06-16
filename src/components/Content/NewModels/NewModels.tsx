import React from 'react';
import './newModels.scss';
import Card from '../../Card/Card';
import { usePageChanger } from '../../../utils/PageChanger';
import { Link } from 'react-router-dom';
import { useCatalogContext } from '../../CatalogContext';
import { useCarousel } from '../../../utils/carousel';

export default function NewModels() {
	const {uniquePhones, widthCard, gap} = useCatalogContext();
	const latestPhones = uniquePhones.sort((a, b) => b.year - a.year);
	const page = usePageChanger(1, latestPhones.length, 4);
	const { currentCardPag, firstPage, lastPage, onPageChange } = page;

	const carousel = useCarousel(0);
	const { pos, onPosChange } = carousel;

	const handleBack = () => {
		onPageChange(currentCardPag - 1);
		onPosChange(pos - widthCard - gap);
	};

	const handleForward = () => {
		onPageChange(currentCardPag + 1);
		onPosChange(pos + widthCard + gap);
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
					width: `${widthCard * 4}px`, transition: 'transform 1000ms',
					transform: `translateX(-${pos}px)`,
				}}> <Card key={card.id} phone={card} /> </ul>)}
			</div>
		</section>
	);
}