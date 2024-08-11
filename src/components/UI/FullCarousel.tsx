'use client';

import React from 'react';
import SecondaryButton from '@/components/shared/SecondaryButton';
import PrimaryButton from '@/components/shared/PrimaryButton';
import EmblaCarousel from '@/components/UI/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { Typography, duration } from '@mui/material';
import { motion } from 'framer-motion';
import ceo from '@/assets/ceo.png';
import { useTranslations } from 'next-intl';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;

const FullCarousel = () => {
	const t = useTranslations('About');
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

	const SLIDES = [
		{
			photo: ceo,
			title: 'CEO & Founder',
			name: 'Ibn Sayed Sagar',
			profileLinks: [{ name: 'linkedin', link: 'https://www.linkedin.com/in/ibn-sayed-sagar-7aa554208' }],
		},
	];

	return (
		<motion.div
			id="about"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{
				once: true,
				amount: 0.5,
			}}
			className="flex flex-col gap-5 pb-10">
			<motion.div variants={item}>
				<Typography variant="h5" fontWeight={600} textAlign="center">
					{t('About')}
				</Typography>
			</motion.div>

			<motion.div variants={item} className="xl:max-w-[60vw] mx-auto px-6">
				<Typography variant="body1" textAlign="center">
					{t('desc')}
				</Typography>
			</motion.div>

			<motion.div variants={item}>
				<div className="flex flex-col xl:flex-row justify-center items-center gap-6">
					{/* <PrimaryButton>OUR MINING COMPANIES</PrimaryButton> */}
					{/* <SecondaryButton>PMT Team</SecondaryButton> */}
					<Typography variant="h5" fontWeight={700} textAlign="center">
						{t('PMC Team')}
					</Typography>
				</div>
			</motion.div>

			<motion.div variants={item}>
				<EmblaCarousel slides={SLIDES} options={OPTIONS} />
			</motion.div>
		</motion.div>
	);
};

export default FullCarousel;
