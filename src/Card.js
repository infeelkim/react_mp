import React from 'react';

function Card(props) {
	return (
		<article
			style={{
				transform: `rotate(${
					(360 / props.num) * props.index
				}deg) translateY(-180%)`,
			}}>
			<div className='inner'>
				<div className='pic'>
					<img src={`${props.path}/img/${props.data}.jpg`} />
				</div>
				<h2>{props.data}</h2>
			</div>
		</article>
	);
}

export default Card;
