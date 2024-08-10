'use client';

import { Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/other.css';

const roadmap = [
	{
		date: 'September 2024',
		desc: 'Power Mining Launching',
	},
	{
		date: 'October 2024',
		desc: 'Start Worldwide Marketing',
	},
	{
		date: 'Novermber 2024',
		desc: 'Global active users reach 100K',
	},
	{
		date: 'January 2025',
		desc: 'Global active users reach 500K',
	},
	{
		date: 'February 2025',
		desc: 'Power Mining 1.0 officially launched',
	},
	{
		date: 'March 2025',
		desc: 'Global active users reach 1M',
	},
	{
		date: 'April-Sep 2025',
		desc: 'Developing PMC Test Net And PMC withdrawal and transaction Test',
	},
	{
		date: 'October 2025',
		desc: 'Global active users reach 3M',
	},
	{
		date: 'Nov-Dec 2025',
		desc: 'Developing PMC MainNet And PMC withdrawal and transaction',
	},
	{
		date: 'January 2026',
		desc: 'Officially launched CAT trading plan',
	},
	{
		date: 'June 2026',
		desc: 'Open users withdraw in batches',
	},
	{
		date: 'January 2026',
		desc: 'Global active users reach 100m',
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
		<div className="overflow-x-scroll custom-scroll">
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{
					once: true,
					// amount: 1,
				}}
				className="flex justify-center py-20 px-10 overflow-x-scroll xl:overflow-hidden  w-fit ">
				{roadmap.map((r, i) => (
					<motion.div
						key={i}
						className={` ${
							i % 2 == 1 ? 'border border-b-0  rounded-tl-full rounded-tr-full mb-[150px] ' : 'scale-x-[1] border border-t-0 rounded-bl-full rounded-br-full  mt-[150px]'
						} border-white h-[150px] w-[300px] relative border-4 -ml-[4px]`}>
						<motion.div
							variants={item}
							initial="hidden"
							animate="show"
							className={`absolute h-[240px] flex flex-col items-center text-sm text-center px-4 ${i % 2 == 1 ? 'top-[75%]' : '-scale-x-[1.038] -top-[25%]'}`}>
							<p className="font-semibold text-lg text-[#BBE667]">October 2021</p>
							<p className="text-white">Project execution begins. Token analysis and planning.</p>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default RoadMap;
