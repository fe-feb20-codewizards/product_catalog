import React from 'react';
import './newModels.scss';
import Card from '../../Card/Card';
import { usePageChanger, paginatePhones } from '../../../utils';
import { Link } from 'react-router-dom';
import { Phone } from '../../../types/Phone';

interface NewModelsProps {
  phones: Phone[];
}

export default function NewModels({ phones }: NewModelsProps) {
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
	
	const latestPhones = uniquePhones.sort((a, b) => b.year - a.year);

	const { paginatedPhones, totalPages } = paginatePhones(latestPhones, currentCardPag);

	return (
		<section className="new-models">
			<div className="new-models__header">
				<h2>Brand new models</h2>
				<div className="new-models__header__buttons">
					<Link
						to='prev'
						className={`new-models__header__buttons-left new-models__header__buttons__button ${firstPage && 'new-models__disabled'}`}
						onClick={() => page.onPageChange(currentCardPag - 1)}
						area-disabled={firstPage}
					>
						<img
							className='new-models__header__buttons__button__img'
							src={process.env.PUBLIC_URL + '/images/arrow-left.svg'}
							alt="" />
					</Link>
					<Link
						to='next'
						onClick={() => page.onPageChange(currentCardPag + 1)}
						className={`new-models__header__buttons-right new-models__header__buttons__button ${currentCardPag === totalPages && 'new-models__disabled'}`}
						area-disabled={currentCardPag === totalPages}
					>
						<img
							className='new-models__header__buttons__button__img'
							src={process.env.PUBLIC_URL + '/images/arrow-right.svg'}
							alt="" />
					</Link>
				</div>
			</div>
			<div className='new-models__cards'>
				{paginatedPhones.map((phone) => (
					<Card key={phone.id} phone={phone} />
				))}
			</div>
		</section>
	);
}