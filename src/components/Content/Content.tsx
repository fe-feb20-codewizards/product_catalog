import React from 'react';
import './content.scss';
import Welcome from './Welcome/Welcome';
import NewModels from './NewModels/NewModels';
import Categories from './Categories/Categories';
import Discounts from './Discounts/Discounts';

export default function Content() {
	return (
		<main className="content">
			<Welcome />

			<NewModels />

			<Categories />

			<Discounts />
		</main>
	);
}