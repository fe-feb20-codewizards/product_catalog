import React from 'react';
import './newModels.scss';
import Card from '../../Card/Card';
import { usePageChanger } from '../../../utils';
import { Link } from 'react-router-dom';
import { useCatalogContext } from '../../CatalogContext';

export default function NewModels() {
	const {uniquePhones} = useCatalogContext();
	const latestPhones = uniquePhones.sort((a, b) => b.year - a.year);
	const page = usePageChanger(1, latestPhones.length, 4);
	const { currentCardPag, firstPage, lastPage, startingCard, endingCard, onPageChange } = page;
	

	const showingCards = latestPhones.slice(startingCard - 1, endingCard);
	return (
		<section className="new-models">
			<div className="new-models__header">
				<h2>Brand new models</h2>
				<div className="new-models__header__buttons">
					<Link
						to='prev'
						className={`new-models__header__buttons-left new-models__header__buttons__button ${firstPage && 'new-models__disabled'}`}
						onClick={() => onPageChange(currentCardPag - 1)}
						
					>
						<img
							className='new-models__header__buttons__button__img'
							src={process.env.PUBLIC_URL + '/images/arrow-left.svg'}
							alt="" />
					</Link>
					<Link
						to='next'
						onClick={() => onPageChange(currentCardPag + 1)}
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
				{showingCards.map(card => <Card key={card.id} phone={card} />)}
			</div>
		</section>
	);
}