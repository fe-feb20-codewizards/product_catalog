import React from 'react';
import './newModels.scss';
import Card from '../../Card/Card';

export default function NewModels() {
	return (
		<section className="new-models">
			<div className="new-models__header">
				<h2>Brand new models</h2>
				<div className="new-models__header__buttons">
					<button className="new-models__header__buttons-left new-models__header__buttons__button">
						<img src={process.env.PUBLIC_URL + '/images/arrow-left.svg'} alt="" />
					</button>
					<button className="new-models__header__buttons-right new-models__header__buttons__button">
						<img src={process.env.PUBLIC_URL + '/images/arrow-right.svg'} alt="" />
					</button>
				</div>
			</div>
			<div className='new-models__cards'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
}