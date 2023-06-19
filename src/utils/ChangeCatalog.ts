import { useState } from 'react';

export const useChangeCatalog = (len: number, perPage: number) => {
	const [activeButton, setActiveButton] = useState(1);
	const onChanger = (button: number) => setActiveButton(button);

	const maxPages = Math.ceil(len / perPage);

	return { maxPages, onChanger, activeButton };
};
