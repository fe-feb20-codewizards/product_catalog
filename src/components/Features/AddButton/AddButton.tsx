import classNames from 'classnames';
import React from 'react';
import { Phone } from '../../../types/Phone';
import { Tablet } from '../../../types/Tablet';
import './AddButton.scss';
import { useCatalogContext } from '../../CatalogContext';


interface AddButtonProps {
    product: Phone | Tablet;
}

export function AddButton({product}: AddButtonProps) {
	const { addToCart, favorites, addToFavorites, removeFromFavorites, cart } = useCatalogContext();
	const isInCart = cart.some(cartt => cartt.id === product.id);
	const isFavorite = favorites.some((favoritePhone) => favoritePhone.id === product.id);

	const handleFavoriteClick = () => {
		if (isFavorite) {
			removeFromFavorites(product);
		} else {
			addToFavorites(product);
		}
	};

	return (<div className="buttons">
		<button
			className={classNames('buttons-add-to-cart', { 'selected': isInCart })}
			onClick={() => addToCart(product)}
		>
            Add to cart
		</button>
		<button
			className="buttons-add-to-favorites"
			onClick={handleFavoriteClick}
		>
			<img
				className="buttons-add-to-favorites-icon"
				src={process.env.PUBLIC_URL + (isFavorite ? '/images/Union.png' : '/images/heart.svg')}
				alt="Add to favorites"
			/>
		</button>
	</div>);
}