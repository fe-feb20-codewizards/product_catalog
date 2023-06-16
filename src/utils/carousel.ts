import { useState } from 'react';

export const useCarousel = (initialPosition: number) => {
	const [pos, setPos] = useState(initialPosition);
	const onPosChange = (skip: number) => setPos(skip);

	return { onPosChange, pos, };
};