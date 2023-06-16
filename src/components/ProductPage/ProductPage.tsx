import React, { useEffect, useState } from 'react';
import './productPage.scss';
import { useParams } from 'react-router-dom';
import { getPhone } from '../../api/phones';
import { Phone } from '../../types/Phone';

export default function ProductPage() {
	const { itemId } = useParams<{ itemId: string }>();
	const [phoneData, setPhoneData] = useState<Phone>();

	useEffect(() => {
		if (itemId) {
			getPhone(itemId)
				.then((response) => {
					setPhoneData(response);
				})
				.catch((error) => {
					console.error(error.message);
				});
		}
	}, [itemId]);

	if (!phoneData) {
		return <h1>Loading...</h1>;
	}

	const { 
		name,
		fullPrice,
		price,
		screen,
		capacity,
		color,
		ram,
		image,
	} = phoneData;

	return (
		<div className="productPage">
			<div className="productPage__wrapper">
				<h1>{name}</h1>
				<div className="productPage__top-section">
					<div className="productPage__image-section">
						<img
							src={process.env.PUBLIC_URL + '/' + image}
							alt={name} 
							className="productPage__image-section-photo" 
						/>
					</div>
					<div className="productPage__options-section">
						<div className="productPage__options-section-colors">
            Color: <br/> {color}
						</div>
						<div className="card__divider productPage__divider"></div>
						<div className="productPage__options-section-capacity">
            Capacity: <br/> {capacity}
						</div>
						<div className="card__divider productPage__divider"></div>
						<div className="productPage__options-section-info">
							<div className="card__price">
								{price !== fullPrice && <h4 className="card__price-head productPage__card__price-head">{price}</h4>}
								<h4 className="card__price-discounted productPage__card__price-discounted">{fullPrice}</h4>
							</div>
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
							<ul className="card__info">
								<div className="card__info-left">
									<li>Screen</li>
									<li>Resolution</li>
									<li>Processor</li>
									<li>RAM</li>
								</div>
								<div className="card__info-right">
									<li>{screen}</li>
									<li>Resolution</li>
									<li>Processor</li>
									<li>{ram}</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<div className="productPage__bottom-section">
					<div className="productPage__about-section">
						<h2>About</h2>
						<div className="card__divider"></div>
						<h3>Lorem ipsum</h3>
						<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error deleniti, aliquid laboriosam earum reprehenderit sequi sit. Omnis possimus tempore nostrum rem veritatis, officiis tenetur quod nisi? Consequatur similique cumque quasi!</span>
					</div>
					<div className="productPage__tech-specs-section">
						<h2>Tech specs</h2>
						<div className="card__divider"></div>
						<ul className="card__info">
							<div className="card__info-left">
								<li>Screen</li>
								<li>Resolution</li>
								<li>Processor</li>
								<li>RAM</li>
								<li>Built in memory</li>
								<li>Camera</li>
								<li>Cell</li>
							</div>
							<div className="card__info-right">
								<li>{screen}</li>
								<li>Resolution</li>
								<li>Processor</li>
								<li>{ram}</li>
								<li>{capacity}</li>
								<li>Camera</li>
								<li>Cell</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}