import React from 'react';
import './card.scss';
import { Phone } from '../../types/Phone';
import { Link } from 'react-router-dom';
interface CardProps {
	phone: Phone;
  }
  
export default function Card({ phone }: CardProps) {
	const {
		name,
		itemId,
		fullPrice,
		price,
		screen,
		capacity,
		ram,
		image
	} = phone;
	return (
		<Link className="no-underline" to={`/item/${itemId}`}>
			<div className="card">
				<div className="card__container">
					<div className="card__img">
						<img
							className="card__img-photo"
							src={process.env.PUBLIC_URL + '/' + image}
							alt="Product"
						>
						</img>
					</div>
					<div className="card__title">
						{name}
					</div>
					<div className="card__price">
						{price !== fullPrice && <h4 className="card__price-head">{price}</h4>}
						<h4 className="card__price-discounted">{fullPrice}</h4>
					</div>

					<div className="card__divider"></div>

					<ul className="card__info">
						<div className="card__info-left">
							<li>{screen}</li>
							<li>{capacity}</li>
							<li>{ram}</li>
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
							<img
								className="card__buttons-add-to-favorites-icon"
								src={process.env.PUBLIC_URL + '/images/heart.svg'}
								alt="Add to favorites"
							/>
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
}