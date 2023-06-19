import React from 'react';
import { getNumbers } from '../../../utils/PageChanger';
import Button from '../Button/Button';
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
	lastVisiblePage: number,
}

export default function Pagination({ 
	handleButtonNext, handleButtonPrev, handlePage, currentCardPag, firstButton, lastButton, firstPage, lastPage, lastVisiblePage,
}: PaginationProps) {
	const isFirstPoints = currentCardPag - 2 > 1;
	const isLastPoints = lastVisiblePage >= currentCardPag + 3;
	return (
		<div className='pagination'>
			<div className='pagination__buttons'>
				<button
					onClick={handleButtonPrev}
					className={`pagination__buttons-button ${firstPage && 'pagination__buttons-button--disabled'}`}>
					{'<'}
				</button>
				{isFirstPoints && (
					<div style={{ display: 'inline-block' }}>
						<Button page={1} current={currentCardPag} handlePage={handlePage} />
						{currentCardPag - 2 > 1 ? <span>...</span> : <Button page={1} current={currentCardPag} handlePage={handlePage} />}
					</div>)}
				{getNumbers(firstButton, lastButton + 1).map(page => <Button
					key={page}
					page={page}
					current={currentCardPag}
					handlePage={handlePage} />)}
				{isLastPoints && (
					<div style={{ display: 'inline-block' }}>
						{lastVisiblePage - 1 > currentCardPag + 2 && <span>...</span>}
						<Button page={lastVisiblePage} current={currentCardPag} handlePage={handlePage} />
					</div>)}
				<button onClick={handleButtonNext} className={`pagination__buttons-button ${lastPage && 'pagination__buttons-button--disabled'}`}>{'>'}</button>
			</div>
		</div>
	);
}
