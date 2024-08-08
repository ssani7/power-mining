'use client';

import React from 'react';
import cross from '@/assets/cross.png';
import check from '@/assets/check.png';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GoodBad = () => {
	const container = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.45,
				duration: 0.75,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, scale: 0.5 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.75,
			},
		},
	};
	return (
		<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
			<Typography variant="h5" fontWeight={600} textAlign="center">
				The Democratization of PMC Mining
			</Typography>

			<div className="flex flex-col xl:flex-row px-10 gap-8 py-6">
				<motion.div
					variants={item}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.5 }}
					className="xl:w-1/2 flex flex-col gap-4 items-center text-center bg-[#F4C1C1] p-10 rounded-lg">
					<Image src={cross} className="size-[100px]" alt="" />
					<Typography variant="h6">Mining without PMC</Typography>
					<Typography variant="body2">
						Mining without PMC you need to import machines,find suitable space,deal with high electricity coats, invest in cooling equipment,hire staff, perform maintenance,and pay taxes.
					</Typography>
				</motion.div>

				<motion.div
					variants={item}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.5 }}
					className="xl:w-1/2 flex flex-col gap-4 items-center text-center bg-[#A3F2AB] p-10 rounded-lg">
					<Image src={check} className="size-[100px]" alt="" />
					<Typography variant="h6">Mining With PMC</Typography>
					<Typography variant="body2">Mining PMC with Your Phone and Internet Only.</Typography>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default GoodBad;
