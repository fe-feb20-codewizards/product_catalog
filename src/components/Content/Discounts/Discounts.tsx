import React from 'react';
import './discounts.scss';
import Card from '../../Card/Card';
import { usePageChanger } from '../../../utils';
import { Link } from 'react-router-dom';

export default function Discounts() {
	const page = usePageChanger(1);
	const { currentCardPag, showingCards, firstPage, lastPage, } = page;

	return (
		<section className="discounts">
			<div className="discounts__header">
				<h2>Brand new models</h2>
				<div className="discounts__header__buttons">
					<Link
						to='prev'
						className={`new-models__header__buttons-left new-models__header__buttons__button ${firstPage && 'new-models__disabled'}`}
						onClick={() => page.onPageChange(currentCardPag - 1)}
						area-disabled={firstPage}
					>
						<img src={process.env.PUBLIC_URL + '/images/arrow-left.svg'} alt="" className='new-models__header__buttons__button__img' /> 
					</Link>
					<Link
						to='next'
						onClick={() => page.onPageChange(currentCardPag + 1)}
						className={`new-models__header__buttons-right new-models__header__buttons__button ${lastPage && 'new-models__disabled'}`}
						aria-disabled={lastPage}
					>	
						<img src={process.env.PUBLIC_URL + '/images/arrow-right.svg'} alt="" className='new-models__header__buttons__button__img' />
					</Link>
				</div>
			</div>
			<div className='discounts__cards'>
				{showingCards.map(card => <>{card}<Card key={card} /></>)}
			</div>
		</section>
	);
}