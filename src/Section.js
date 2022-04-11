import React from 'react';
const arr = [
	'Blizzard',
	'Calm',
	'DustyRoad',
	'Escape',
	'Paday',
	'Retreat',
	'Seasonal',
	'Vespers',
];

function Section() {
	return (
		<section className='wrap'>
			{arr.map((data, idx) => {
				return <article key={idx}>{data}</article>;
			})}
		</section>
	);
}

export default Section;
