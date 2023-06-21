import React, { useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

export function Loader() {
	const [isLoader, setIsLoader] = useState(true);

	setTimeout(() => setIsLoader(false), 15000);

	return (
		< div style={{ width: '500px', margin: 'auto', display: 'flex', gap: '35px', paddingTop: '50px' }} >
			{isLoader
				? (
					<><h1>Loading</h1><CirclesWithBar
						height="100"
						width="100"
						color="#4fa94d"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
						outerCircleColor=""
						innerCircleColor=""
						barColor=""
						ariaLabel='circles-with-bar-loading' /></>
				)
				: (
					<h1>Server no response</h1>)
			}</div >);
}