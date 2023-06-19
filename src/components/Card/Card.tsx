import React from 'react';
import './card.scss';
import { Phone } from '../../types/Phone';
import { Link } from 'react-router-dom';
import { Tablet } from '../../types/Tablet';
import { AddButton } from '../Features/AddButton/AddButton';

interface CardProps {
	product: Phone | Tablet;
  }
  
export default function Card({ product }: CardProps) {
	const {
		name,
		itemId,
		fullPrice,
		price,
		screen,
		capacity,
		ram,
		image
	} = product;

	return (
		<div className="card">
			<div className="card__container">
				<Link className="no-underline" to={`/product_catalog/item/${itemId}`}>
					<div className="card__img">
						<img
							className="card__img-photo"
							src={process.env.PUBLIC_URL + '/' + image}
							alt="Product"
						>
						</img>
					</div>
				</Link>
				<div className="card__wrapper">
					<Link className="no-underline" to={`/product_catalog/item/${itemId}`}>
						<div className="card__title">
							{name}
						</div>
					</Link>
					<div className="card__price">
						{price !== fullPrice && <h4 className="card__price-head">{price}</h4>}
						<h4 className="card__price-discounted">{fullPrice}</h4>
					</div>

					<div className="card__divider"></div>

					<ul className="card__info">
						<div className="card__info-left">
							<li>Screen</li>
							<li>Capacity</li>
							<li>RAM</li>
						</div>
						<div className="card__info-right">
							<li>{screen}</li>
							<li>{capacity}</li>
							<li>{ram}</li>
						</div>
					</ul>
					<AddButton
						product={product}
					/>
				</div>
			</div>
		</div>
	);
}