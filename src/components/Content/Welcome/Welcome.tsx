import React from 'react';
import './welcome.scss';
import Slider from './Slider/Slider';

export default function Welcome() {
	return (
		<section className="welcome">
			<div className="welcome__header">
				<h1>Welcome to Nice Gadgets store!</h1>
			</div>
			<div className="welcome__wrapper">
				<Slider />
			</div>
		</section>
	);
}