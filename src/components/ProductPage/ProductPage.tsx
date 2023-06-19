import React, { useEffect, useState } from 'react';
import './productPage.scss';
import { useParams } from 'react-router-dom';
import { getPhone } from '../../api/phones';
import { PhoneInfo } from '../../types/PhoneInfo';
import { AddButton } from '../Features/AddButton/AddButton';
import { useCatalogContext } from '../CatalogContext';

export default function ProductPage() {
	const { itemId } = useParams<{ itemId: string }>();
	const [phoneData, setPhoneData] = useState<PhoneInfo | null>(null);
	const { phonesData } = useCatalogContext();

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

	if (!phoneData || !itemId) {
		return <h1>Loading...</h1>;
	}

	const { 
		name,
		description,
		priceRegular,
		priceDiscount,
		screen,
		resolution,
		processor,
		ram,
		camera,
		cell,
		capacity,
		images,
		colorsAvailable,
		capacityAvailable,
	} = phoneData;

	const product = phonesData.filter(phone => phone.itemId === itemId);

	const mainImage = images[0];

	return (
		<div className="productPage">
			<div className="productPage__wrapper">
				<h1>{name}</h1>
				<div className="productPage__top-section">
					<div className="productPage__image-section">
						<div className="productPage__image-section-thumbnails">
							{images.map((thumbnail, index) => (
								<img
									key={index}
									src={process.env.PUBLIC_URL + '/' + thumbnail}
									alt={name}
									className="productPage__image-section-thumbnails-thumbnail"
								/>
							))}
						</div>

						<img
							src={process.env.PUBLIC_URL + '/' + mainImage}
							alt={name}
							className="productPage__image-section-photo"
						/>
					</div>
					<div className="productPage__options-section">
						<div className="productPage__options-section-colors">
							Avaible colors: <br /> {colorsAvailable.join(', ')}
						</div>
						<div className="card__divider productPage__divider"></div>
						<div className="productPage__options-section-capacity">
							Select capacity: <br /> {capacityAvailable.join(', ')}
						</div>
						<div className="card__divider productPage__divider"></div>
						<div className="productPage__options-section-info">
							<div className="card__price">
								{priceDiscount !== priceRegular &&
									<h4 className="card__price-head productPage__card__price-head">
										{priceDiscount}
									</h4>}
								<h4 className="card__price-discounted productPage__card__price-discounted">
									{priceRegular}
								</h4>
							</div>
							<AddButton
								product={product[0]}
							/>
							<ul className="card__info">
								<div className="card__info-left">
									<li>Screen</li>
									<li>Resolution</li>
									<li>Processor</li>
									<li>RAM</li>
								</div>
								<div className="card__info-right">
									<li>{screen}</li>
									<li>{resolution}</li>
									<li>{processor}</li>
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
						{description.map((item, index) => (
							<div key={index}>
								<h3>{item.title}</h3>
								<span>{item.text.join(' ')}</span>
							</div>
						))}
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
								<li>{resolution}</li>
								<li>{processor}</li>
								<li>{ram}</li>
								<li>{capacity}</li>
								<li>{camera}</li>
								<li>{cell.join(', ')}</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}