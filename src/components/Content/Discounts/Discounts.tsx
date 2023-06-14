import React from 'react';
import './discounts.scss';
import Card from '../../Card/Card';

export default function Discounts() {
	return (
		<section className="discounts">
			<div className="discounts__header">
				<h2>Brand new models</h2>
				<div className="discounts__header__buttons">
					<button className="discounts__header__buttons-left discounts__header__buttons__button">
						<img src={process.env.PUBLIC_URL + '/images/arrow-left.svg'} alt="" />
					</button>
					<button className="discounts__header__buttons-right discounts__header__buttons__button">
						<img src={process.env.PUBLIC_URL + '/images/arrow-right.svg'} alt="" />
					</button>
				</div>
			</div>
			<div className='discounts__cards'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
}