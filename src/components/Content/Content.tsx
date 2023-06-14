import React from 'react';
import './content.scss';
import Welcome from './Welcome/Welcome';
import NewModels from './NewModels/NewModels';
import Categories from './Categories/Categories';
import Discounts from './Discounts/Discounts';

export default function Content() {
	return (
		<main className="content">
			<div className="content__wrapper">
				<Welcome />

				<NewModels />

				<Categories />

				<Discounts />
			</div>
		</main>
	);
}