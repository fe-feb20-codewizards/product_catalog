import { useState } from 'react';

export const useChangeCatalog = (len: number, perPage: number) => {
	const [activeButton, setActiveButton] = useState(1);
	const onChanger = (button: number) => setActiveButton(button);

	const maxPages = (len / perPage);
	const firstButton = activeButton > 2
		? activeButton - 1
		: 1;
	const lastButton = activeButton + 1 > maxPages
		? maxPages
		: activeButton + 1;

	return { firstButton, lastButton, maxPages, onChanger, activeButton };
};
