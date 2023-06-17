import React from 'react';
import './Button.scss';

interface ButtonProps {
    page: number,
    current: number,
    handlePage: (page: number) => void,
}
export default function Button({ page, current, handlePage }: ButtonProps) {
	const style = page !== current
		? {
			border: '1px solid black',
			color: 'black'
		}
		: {
			border: '1px solid green',
			color: 'green'
		};
	return (<button className="button" style={style} onClick={()=> handlePage(page)} >{page}</button>);
}