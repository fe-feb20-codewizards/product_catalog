import React from 'react';
import './categories.scss';
import { useCatalogContext } from '../../CatalogContext';

export default function Categories() {
	const { uniquePhones } = useCatalogContext();
	return (
		<section className="categories">
			<h2>Shop by category</h2>
			<div className="categories__blocks">
				<div className="categories__blocks-phones categories__blocks__block">
					<img
						className="categories__blocks__block-photo"
						src={process.env.PUBLIC_URL + '/images/phonesCategory.png'}
						alt="Category"
					></img>
					<h3 className="categories__blocks__block-title">
						Phones
					</h3>
					<div className="categories__blocks__block-count">
						{uniquePhones.length} models
					</div>
				</div>
				<div className="categories__blocks-tablets categories__blocks__block">
					<img
						className="categories__blocks__block-photo"
						src={process.env.PUBLIC_URL + '/images/tabletsCategory.png'}
						alt="Category"
					></img>
					<h3 className="categories__blocks__block-title">
						Tablets
					</h3>
					<div className="categories__blocks__block-count">
						x models
					</div>
				</div>
				<div className="categories__blocks-accessories categories__blocks__block">
					<img
						className="categories__blocks__block-photo"
						src={process.env.PUBLIC_URL + '/images/accessoriesCategory.png'}
						alt="Category"
					></img>
					<h3 className="categories__blocks__block-title">
						Accessories
					</h3>
					<div className="categories__blocks__block-count">
						x models
					</div>
				</div>
			</div>
		</section>
	);
}