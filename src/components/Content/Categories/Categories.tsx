import React from 'react';
import './categories.scss';

export default function Categories() {
	return (
		<section className="categories">
			<h2>Shop by category</h2>
			<div className="categories__blocks">
				<div className="categories__blocks-phones categories__blocks__block">
					<img
						className="categories__blocks__block-photo"
						src="https://picsum.photos/500"
						alt="Category"
					></img>
					<h3 className="categories__blocks__block-title">
						Category 1
					</h3>
					<div className="categories__blocks__block-count">
						x models
					</div>
				</div>
				<div className="categories__blocks-tablets categories__blocks__block">
					<img
						className="categories__blocks__block-photo"
						src="https://picsum.photos/500"
						alt="Category"
					></img>
					<h3 className="categories__blocks__block-title">
						Category 2
					</h3>
					<div className="categories__blocks__block-count">
						x models
					</div>
				</div>
				<div className="categories__blocks-accessories categories__blocks__block">
					<img
						className="categories__blocks__block-photo"
						src="https://picsum.photos/500"
						alt="Category"
					></img>
					<h3 className="categories__blocks__block-title">
						Category 3
					</h3>
					<div className="categories__blocks__block-count">
						x models
					</div>
				</div>
			</div>
		</section>
	);
}