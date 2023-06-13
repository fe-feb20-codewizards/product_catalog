import React from 'react';
import './BurgerPopUp.scss';

const BurgerPopUp = () => {
	return (
		<div className="burger" id='nav'>
			<nav className="navigation-burger">
				<div className="navigation-burger">
					<ul className="navigation-burger__list_left">
						
						<li className="navigation-burger__item_l">
							<a
								href="/"
								className="navigation-burger__link active"
							>
                Home
							</a>
						</li>
						<li className="navigation-burger__item_l">
							<a
								href="/phones"
								className="navigation-burger__link"
							>
                Phones
							</a>
						</li>
						<li className="navigation-burger__item_l">
							<a
								href="/tablets"
								className="navigation-burger__link"
							>
                Tablets
							</a>
						</li>
						<li className="navigation-burger__item_l">
							<a
								href="/accessories"
								className="navigation-burger__link"
							>
                Accessories
							</a>
						</li>
					</ul>
				</div>
				<div className="nav-btn">
					<a
						href="/favorites"
						className="nav-btn__element"
					>
						<img
							src={process.env.PUBLIC_URL + '/images/Shopping bag (Cart).svg'}
							alt="favorities icon"
							className="nav-btn__icon"
						/>
					</a>
					<a
						href="/cart"
						className="nav-btn__element"
					>
						<img
							src={process.env.PUBLIC_URL + '/images/Vector (Stroke).svg'}
							alt="favorities icon"
							className="nav-btn__icon"
						/>
					</a>
				
				</div>
			</nav>
		</div>
	);
};

export default BurgerPopUp;
