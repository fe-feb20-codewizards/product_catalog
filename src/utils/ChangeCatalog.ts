import { useState } from 'react';

export const useChangeCatalog = (len: number, perPage: number) => {
	const [activeButton, setActiveButton] = useState(1);
	

	const onChanger = (button: number) => setActiveButton(button);

	const maxPages = (len / perPage);
	const firstButton = activeButton > 3
		? activeButton - 2
		: 1;
	const lastButton = activeButton + 2 > maxPages
		? maxPages
		: activeButton + 2;

	return { firstButton, lastButton, maxPages, onChanger, activeButton };
};