import React, { useCallback } from 'react';
import './discounts.scss';
import Card from '../../Card/Card';
import { usePageChanger } from '../../../utils';
import { Link } from 'react-router-dom';
import { useCatalogContext } from '../../CatalogContext';

export default function Discounts() {
	const {uniquePhones} = useCatalogContext();
	const discountedPhones = uniquePhones.filter(
		(phone) => phone.price < phone.fullPrice
	);

	const shuffledPhones = [...discountedPhones].sort(() => Math.random() - 0.5);
	const page = usePageChanger(1, shuffledPhones.length, 0);
	const { currentCardPag, firstPage, lastPage, pos, onPosChange, onPageChange } = page;

	const getWidthWindow = useCallback(() => {
		const { innerWidth: width } = window;
		return width;
	}, [shuffledPhones]);

	const widthCard = getWidthWindow() > 1200
		? 275
		: getWidthWindow() > 640
			? 240
			: 215;

	const gap = getWidthWindow() > 1200
		? 56
		: getWidthWindow() > 640
			? 48
			: 40;

	const handleBack = () => {
		onPageChange(currentCardPag - 1);
		onPosChange(pos - widthCard * 4 - gap * 4);
	};

	const handleForward = () => {
		onPageChange(currentCardPag + 1);
		onPosChange(pos + widthCard * 4 + gap * 4);
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
					width: `${widthCard * 4}px`, transition: 'transform 2000ms',
					transform: `translateX(-${pos}px)`,
				}}> <Card key={card.id} phone={card} /> </ul>)}
			</div>
		</section>
	);
}