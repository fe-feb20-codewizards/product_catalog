import React from 'react';
import './favorites.scss';
import { useCatalogContext } from '../CatalogContext';
import Card from '../Card/Card';

export default function favorites() {
	const { favorites } = useCatalogContext();
  
	return (
		<div className="favorites">
			<div className="favorites__wrapper">
				<h1>Favorites</h1>
				<div className="favorites__counter">
					{favorites.length} items
				</div>
				<div className="favorites__cards">
					{favorites.map((phone) => (
						<div key={phone.id} className="favorites__card"><Card phone={phone}/></div> 
					))}
				</div>
			</div>
		</div>
	);
}