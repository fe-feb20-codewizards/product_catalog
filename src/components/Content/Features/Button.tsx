import React from 'react';

interface ButtonProps {
    page: number,
}
export default function Button({ page }: ButtonProps) {
	return (<button>{page}</button>);
}