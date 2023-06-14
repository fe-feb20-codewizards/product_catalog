import React from 'react';
import './welcome.scss';

export default function Welcome() {
	return (
		<section className="welcome">
			<div className="welcome__header">
				<h1>Welcome to Nice Gadgets store!</h1>
			</div>
			<div className="welcome__wrapper">
				<div className="welcome__banner"></div>
			</div>
		</section>
	);
}