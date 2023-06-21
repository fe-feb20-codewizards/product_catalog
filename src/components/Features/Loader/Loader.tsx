import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

export function Loader() {
	return (
		<div style={{ width: '400px', margin: 'auto', display: 'flex', gap: '35px', paddingTop: '50px' }}>
			<h1>Loading</h1>
			<CirclesWithBar
				height="100"
				width="100"
				color="#4fa94d"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				outerCircleColor=""
				innerCircleColor=""
				barColor=""
				ariaLabel='circles-with-bar-loading'
			/>
		</div>);
}