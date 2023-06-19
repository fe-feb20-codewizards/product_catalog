import React from 'react';
import './discounts.scss';
import Card from '../../Card/Card';
import { usePageChanger } from '../../../utils/PageChanger';
import { Link } from 'react-router-dom';
import { useCatalogContext } from '../../CatalogContext';
import { useCarousel } from '../../../utils/carousel';

export default function Discounts() {
	const { shuffledPhones, widthCard, gap } = useCatalogContext();
	const page = usePageChanger(1, shuffledPhones.length, 1);
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

	const showingCards = shuffledPhones;

	return (
		<section className="discounts">
			<div className="discounts__header">
				<h2>Hot prices</h2>
				<div className="discounts__header__buttons">
					<Link
						to='prev'
						className={`new-models__header__buttons-left new-models__header__buttons__button ${firstPage && 'new-models__disabled'}`}
						onClick={handleBack}
					>
						<img src={process.env.PUBLIC_URL + '/images/arrow-left.svg'} alt="" className='new-models__header__buttons__button__img' /> 
					</Link>
					<Link
						to='next'
						onClick={handleForward}
						className={`new-models__header__buttons-right new-models__header__buttons__button ${lastPage && 'new-models__disabled'}`}
					>	
						<img src={process.env.PUBLIC_URL + '/images/arrow-right.svg'} alt="" className='new-models__header__buttons__button__img' />
					</Link>
				</div>
			</div>
			<div className='discounts__cards'>
				{showingCards.map(card => <ul key={card.id} style={{
					width: `${widthCard * 4}px`, transition: 'transform 1000ms',
					transform: `translateX(-${pos}px)`,
				}}> <Card key={card.id} product={card} /> </ul>)}
			</div>
		</section>
	);
}