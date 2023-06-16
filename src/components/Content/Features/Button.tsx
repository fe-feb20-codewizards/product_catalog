import React from 'react';

interface ButtonProps {
    page: number,
    current: number,
}
export default function Button({ page, current }: ButtonProps) {
	const style = page !== current
		? {
			border: '3px solid black'
		}
		: {
			border: '3px solid green'
		};
	return (<button style={style}>{page}</button>);
}