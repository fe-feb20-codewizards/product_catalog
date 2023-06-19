import React from 'react';
import './card.scss';
import { Phone } from '../../types/Phone';
import { Link } from 'react-router-dom';
import { useCatalogContext } from '../CatalogContext';
import { Tablet } from '../../types/Tablet';
import classNames from 'classnames';

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
	const { addToCart, favorites, addToFavorites, removeFromFavorites, cart } = useCatalogContext();

	const isFavorite = favorites.some((favoritePhone) => favoritePhone.id === product.id);

	const handleFavoriteClick = () => {
		if (isFavorite) {
			removeFromFavorites(product);
		} else {
			addToFavorites(product);
		}
	};

	const isInCart = cart.some(cartt => cartt.id === product.id);

	return (
		<div className="card">
			<div className="card__container">
				<Link className="no-underline" to={`/item/${itemId}`}>
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
					<Link className="no-underline" to={`/item/${itemId}`}>
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

					<div className="card__buttons">
						<button 
							className={classNames('card__buttons-add-to-cart', {'selected': isInCart})}
							onClick={() => addToCart(product)}
						>
								Add to cart
						</button>
						<button 
							className="card__buttons-add-to-favorites"
							onClick={handleFavoriteClick}
						>	
							<img
								className="card__buttons-add-to-favorites-icon"
								src={process.env.PUBLIC_URL + (isFavorite ? '/images/union.png' : '/images/heart.svg')}
								alt="Add to favorites"	
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}