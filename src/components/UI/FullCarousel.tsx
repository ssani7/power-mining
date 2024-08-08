'use client';

import React from 'react';
import SecondaryButton from '@/components/shared/SecondaryButton';
import PrimaryButton from '@/components/shared/PrimaryButton';
import EmblaCarousel from '@/components/UI/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { Typography, duration } from '@mui/material';
import { motion } from 'framer-motion';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const FullCarousel = () => {
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
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{
				once: true,
				amount: 0.5,
			}}
			className="flex flex-col gap-5">
			<motion.div variants={item}>
				<Typography variant="h5" fontWeight={600} textAlign="center">
					About
				</Typography>
			</motion.div>

			<motion.div variants={item}>
				<Typography variant="body1" textAlign="center">
					Our mission is to democrtizon PMC Mining
				</Typography>
			</motion.div>

			<motion.div variants={item}>
				<div className="flex flex-col xl:flex-row justify-center items-center gap-6">
					<PrimaryButton>OUR MINING COMPANIES</PrimaryButton>
					<SecondaryButton>AMT Team</SecondaryButton>
				</div>
			</motion.div>

			<motion.div variants={item}>
				<EmblaCarousel slides={SLIDES} options={OPTIONS} />
			</motion.div>
		</motion.div>
	);
};

export default FullCarousel;
