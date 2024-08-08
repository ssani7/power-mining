'use client';

import { Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/other.css';

const roadmap = [
	{
		date: 'October 2021',
		desc: 'Project execution begins. Token analysis and planning',
	},
	{
		date: 'October 2021',
		desc: 'Project execution begins. Token analysis and planning',
	},
	{
		date: 'October 2021',
		desc: 'Project execution begins. Token analysis and planning',
	},
	{
		date: 'October 2021',
		desc: 'Project execution begins. Token analysis and planning',
	},
	{
		date: 'October 2021',
		desc: 'Project execution begins. Token analysis and planning',
	},
	{
		date: 'October 2021',
		desc: 'Project execution begins. Token analysis and planning',
	},
];

const RoadMap = () => {
	const container = {
		hidden: { opacity: 1, x: '-100%' },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 2,
			},
		},
	};

	const item = {
		hidden: { opacity: 1, x: -100 },
		show: {
			opacity: 1,
			x: 0,
			// transition: {
			// 	duration: 0.5,
			// },
		},
	};

	return (
		<div className="overflow-scroll xl:overflow-hidden">
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{
					once: true,
					// amount: 1,
				}}
				className="flex justify-center py-20 overflow-x-scroll xl:overflow-hidden xl:w-full w-fit">
				{roadmap.map((r, i) => (
					<motion.div
						key={i}
						className={` ${
							i % 2 == 1 ? 'border border-b-0  rounded-tl-full rounded-tr-full  mb-[150px] ' : 'scale-x-[1.03] border border-t-0 rounded-bl-full rounded-br-full  mt-[150px]'
						} border-black h-[150px] w-[300px] relative border-4`}>
						<motion.div
							variants={item}
							initial="hidden"
							animate="show"
							className={`absolute h-[240px] flex flex-col items-center text-sm text-center px-4 ${i % 2 == 1 ? 'top-[75%]' : '-scale-x-[1.038] -top-[25%]'}`}>
							<p className="font-semibold text-lg">October 2021</p>
							<p>Project execution begins. Token analysis and planning.</p>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default RoadMap;
