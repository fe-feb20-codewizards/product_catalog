import React from 'react';
import './discounts.scss';
import Card from '../../Card/Card';
import { paginatePhones, usePageChanger } from '../../../utils';
import { Link } from 'react-router-dom';
import { Phone } from '../../../types/Phone';

interface DiscountsProps {
  phones: Phone[];
}

export default function Discounts({ phones }: DiscountsProps) {
	const page = usePageChanger(1);
	const { currentCardPag, firstPage } = page;

	const getModelName = (name: string) => {
		const regex = /^(.+)\s\d+GB/;
		const match = name.match(regex);
		return match ? match[1] : name;
	};

	const uniquePhones = Array.from(
		phones
			.reduce((map, phone) => {
				const modelName = getModelName(phone.name);
				if (!map.has(modelName)) {
					map.set(modelName, phone);
				}
				return map;
			}, new Map())
			.values()
	);

	const discountedPhones = uniquePhones.filter(
		(phone) => phone.price < phone.fullPrice
	);

	const shuffledPhones = [...discountedPhones].sort(() => Math.random() - 0.5);

	const { paginatedPhones, totalPages } = paginatePhones(shuffledPhones, currentCardPag);

	return (
		<section className="discounts">
			<div className="discounts__header">
				<h2>Hot prices</h2>
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
						className={`new-models__header__buttons-right new-models__header__buttons__button ${currentCardPag === totalPages && 'new-models__disabled'}`}
						area-disabled={currentCardPag === totalPages}
					>	
						<img src={process.env.PUBLIC_URL + '/images/arrow-right.svg'} alt="" className='new-models__header__buttons__button__img' />
					</Link>
				</div>
			</div>
			<div className='discounts__cards'>
				{paginatedPhones.map((phone) => (
					<Card key={phone.id} phone={phone} />
				))}
			</div>
		</section>
	);
}