import React, { useEffect, useState } from 'react';
import './productPage.scss';
import { useParams } from 'react-router-dom';
import { getPhone } from '../../api/phones';
import { Phone } from '../../types/Phone';

export default function ProductPage() {
	const { itemId } = useParams<{ itemId: string }>();
	const [phoneData, setPhoneData] = useState<Phone>();
	const iphone = {
		'id': 'apple-iphone-11-pro-max-64gb-spacegray',
		'namespaceId': 'apple-iphone-11-pro-max',
		'name': 'Apple iPhone 11 Pro Max 64GB Spacegray',
		'capacityAvailable': ['64GB', '256GB', '512GB'],
		'capacity': '64GB',
		'priceRegular': 1480,
		'priceDiscount': 1400,
		'colorsAvailable': ['spacegray', 'midnightgreen', 'gold', 'silver'],
		'color': 'spacegray',
		'images': [
			'img/phones/apple-iphone-11-pro-max/spacegray/00.jpg',
			'img/phones/apple-iphone-11-pro-max/spacegray/01.jpg',
			'img/phones/apple-iphone-11-pro-max/spacegray/02.jpg'
		],
		'description': [
			{
				'title': 'And then there was Pro',
				'text': [
					'A transformative triple-camera system that adds tons of capability without complexity.',
					'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.'
				]
			},
			{
				'title': 'Camera',
				'text': [
					'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.'
				]
			},
			{
				'title': 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
				'text': [
					'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.'
				]
			}
		],
		'screen': '6.5\' OLED',
		'resolution': '2688х1242',
		'processor': 'Apple A13 Bionic',
		'ram': '4GB',
		'camera': '12 Mp + 12 Mp + 12MP',
		'zoom': 'Digital, 10x / Optical, 2x',
		'cell': ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE']
	};

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
						<div className="productPage__image-section-thumbnails">
							{iphone.images.map((thumbnail, index) => (
								<img
									key={index}
									src={process.env.PUBLIC_URL + '/' + thumbnail}
									alt={name}
									className="productPage__image-section-thumbnails-thumbnail"
								/>
							))}
						</div>

						<img
							src={process.env.PUBLIC_URL + '/' + image}
							alt={name} 
							className="productPage__image-section-photo" 
						/>
					</div>
					<div className="productPage__options-section">
						<div className="productPage__options-section-colors">
            Avaible colors: <br/> {iphone.colorsAvailable.join(', ')}
						</div>
						<div className="card__divider productPage__divider"></div>
						<div className="productPage__options-section-capacity">
            Select capacity: <br/> {iphone.capacityAvailable.join(', ')}
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
									<li>{iphone.resolution}</li>
									<li>{iphone.processor}</li>
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
						{iphone.description.map((item, index) => (
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
								<li>{iphone.resolution}</li>
								<li>{iphone.processor}</li>
								<li>{ram}</li>
								<li>{capacity}</li>
								<li>{iphone.camera}</li>
								<li>{iphone.cell.join(', ')}</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}