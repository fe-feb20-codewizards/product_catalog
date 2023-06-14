import React, { useState, useEffect } from 'react';
import './content.scss';
import Welcome from './Welcome/Welcome';
import NewModels from './NewModels/NewModels';
import Categories from './Categories/Categories';
import Discounts from './Discounts/Discounts';
import { getAllPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';

export default function Content() {			//TODO: remove and use from App.tsx
	const [phonesData, setPhonesData] = useState<Phone[]>([]);

	useEffect(() => {
		getAllPhones()
			.then((response) => {
				setPhonesData(response);
			})
			.catch((error) => {
				console.error(error.message);
			});
	}, []);

	return (
		<main className="content">
			<div className="content__wrapper">
				<Welcome />

				<NewModels phones={phonesData} />

				<Categories />

				<Discounts phones={phonesData} />
			</div>
		</main>
	);
}