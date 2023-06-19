import React from 'react';
import { Sorted } from '../../../types/Sorted';
import './Sorting.scss';

interface SortingProps {
    sort: Sorted | null;
    handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    perPage: number;
    handlePerpage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Sorting({sort, handleSort, perPage, handlePerpage}: SortingProps) {
	return (<div className='sorting'>
		<div className='sorting__sort'>
			<p className='sorting-text'>Sort by</p>
			<label htmlFor="sort">
				<select
					name="sort" id="sort" value={sort || 'Choose sort'} onChange={handleSort}
					className='sorting sorting-select'>
					<option value="NoSort">No sort</option>
					<option value="Newest">Newest</option>
					<option value="Oldest">Oldest</option>
					<option value="PriceUp">Price Up</option>
					<option value="PriceDown">Price Down</option>
				</select>
			</label>
		</div>
		<div className='sorting__sort'>
			<p className='sorting-text'>Items on page</p>
			<label htmlFor="page" className='sort'>
				<select
					name="page" id="page" value={perPage} onChange={handlePerpage}
					className='sorting sorting-select'>
					<option value="4">4</option>
					<option value="8">8</option>
					<option value="16">16</option>
					<option value="20">20</option>
					<option value="32">32</option>
				</select>
			</label>
		</div>

	</div>
	);
}