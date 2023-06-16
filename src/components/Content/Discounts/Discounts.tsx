import React from 'react';
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
	const page = usePageChanger(1, shuffledPhones.length, 4);
	const { currentCardPag, firstPage, lastPage, startingCard, endingCard, onPageChange } = page;
	

	const showingCards = shuffledPhones.slice(startingCard - 1, endingCard);

	return (
		<section className="discounts">
			<div className="discounts__header">
				<h2>Hot prices</h2>
				<div className="discounts__header__buttons">
					<Link
						to='prev'
						className={`new-models__header__buttons-left new-models__header__buttons__button ${firstPage && 'new-models__disabled'}`}
						onClick={() => onPageChange(currentCardPag - 1)}
					>
						<img src={process.env.PUBLIC_URL + '/images/arrow-left.svg'} alt="" className='new-models__header__buttons__button__img' /> 
					</Link>
					<Link
						to='next'
						onClick={() => onPageChange(currentCardPag + 1)}
						className={`new-models__header__buttons-right new-models__header__buttons__button ${lastPage && 'new-models__disabled'}`}
					>	
						<img src={process.env.PUBLIC_URL + '/images/arrow-right.svg'} alt="" className='new-models__header__buttons__button__img' />
					</Link>
				</div>
			</div>
			<div className='discounts__cards'>
				{showingCards.map(card => <Card key={card.id} phone={card} />)}
			</div>
		</section>
	);
}