import React from 'react';
import './card.scss';

export default function Card() {
	return (
		<div className="card">
			<div className="card__container">
				<div className="card__img">
					<img
						className="card__img-photo"
						src="https://picsum.photos/170/200"
						alt="Product"
					>
					</img>
				</div>
				<div className="card__title">
					Product Title
				</div>
				<div className="card__price">
					<h4 className="card__price-head">100</h4>
					<h4 className="card__price-discounted">200</h4>
				</div>

				<div className="card__divider"></div>

				<ul className="card__info">
					<div className="card__info-left">
						<li>Screen</li>
						<li>Capacity</li>
						<li>RAM</li>
					</div>
					<div className="card__info-right">
						<li>Screen Info</li>
						<li>Capacity Info</li>
						<li>RAM Info</li>
					</div>
				</ul>

				<div className="card__buttons">
					<button className="card__buttons-add-to-cart">
						Add to cart
					</button>
					<button className="card__buttons-add-to-favorites">	
						❤️			{/* //TODO: svg icon */}
					</button>
				</div>
			</div>
		</div>
	);
}