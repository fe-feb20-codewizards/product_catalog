import React from 'react';
import { getNumbers } from '../../../utils/PageChanger';
import Button from '../Button';
import './Pagination.scss';

interface PaginationProps {
    handleButtonNext: () => void,
    handleButtonPrev: () => void,
    handlePage: (page: number) => void,
    currentCardPag: number,
    firstButton: number,
    lastButton: number,
    firstPage: boolean,
    lastPage: boolean,
}

export default function Pagination({ 
	handleButtonNext, handleButtonPrev, handlePage,  currentCardPag, firstButton, lastButton, firstPage, lastPage,
}: PaginationProps) {
	return (
		<div className='pagination'>
			<div className='pagination__buttons'>
				<button onClick={handleButtonPrev} className={`pagination__buttons-button ${firstPage && 'pagination__buttons-button--disabled'}`}>{'<'}</button>
				{getNumbers(firstButton, lastButton + 1).map(page => <Button
					key={page}
					page={page}
					current={currentCardPag}
					handlePage={handlePage} />)}
				<button onClick={handleButtonNext} className={`pagination__buttons-button ${lastPage && 'pagination__buttons-button--disabled'}`}>{'>'}</button>
			</div>
		</div>
	);
}
