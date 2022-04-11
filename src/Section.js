import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';

const path = process.env.PUBLIC_URL;
const arr = [
	'Blizzards',
	'Calm',
	'DustyRoad',
	'Escape',
	'Payday',
	'Retreat',
	'Seasonal',
	'Vespers',
];
const num = arr.length;

function Section() {
	let [index, setIndex] = useState(0);
	const wrap = useRef(null);

	useEffect(() => {
		rotate();
	}, [index]);

	const rotate = () => {
		wrap.current.style.transform = `rotate(${45 * index}deg)`;
	};

	return (
		<>
			<section className='wrap' ref={wrap}>
				{arr.map((data, idx) => {
					return (
						<Card key={idx} path={path} data={data} index={idx} num={num} />
					);
				})}
			</section>

			<a href='#' className='prev' onClick={() => setIndex(++index)}></a>
			<a href='#' className='next' onClick={() => setIndex(--index)}></a>
		</>
	);
}

export default Section;
