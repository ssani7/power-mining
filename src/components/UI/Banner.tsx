'use client';

import React from 'react';
import brands from '@/assets/fulllogo.png';
import { Typography } from '@mui/material';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
	const transitionValues = {
		duration: 0.8,
		repeat: Infinity,
		ease: 'easeOut',
	};

	const ballStyle = {
		display: 'block',
		width: '5rem',
		height: '5rem',
		backgroundColor: 'white',
		borderRadius: '5rem',
		marginRight: 'auto',
		marginLeft: 'auto',
	};
	return (
		<div className="flex flex-col xl:flex-row xl:items-center xl:justify-center gap-10 xl:gap-0 px-6 xl:px-10 pt-6 xl:pt-14 overflow-hidden">
			<motion.div
				initial={{
					x: '-100%',
				}}
				whileInView={{
					x: 0,
				}}
				transition={{
					duration: 0.75,
				}}
				viewport={{ once: true }}
				className="xl:w-1/3 flex flex-col gap-3 text-center">
				<Typography variant="h2" fontWeight="600">
					Invest In PMC Mining
				</Typography>
				<Typography variant="body2">Poor People Earn With PMC Mining</Typography>
				<div>
					<PrimaryButton>Start Mining</PrimaryButton>
				</div>
			</motion.div>
			<motion.div
				initial={{
					x: '100%',
				}}
				whileInView={{
					x: 0,
				}}
				transition={{
					duration: 0.75,
				}}
				viewport={{ once: true }}
				className="flex flex-col items-center justify-end">
				<motion.div
					transition={{
						y: {
							duration: 2,
							repeat: Infinity,
							repeatType: 'mirror',
							ease: 'easeOut',
						},
					}}
					animate={{
						y: ['-2rem', '0rem'],
					}}
					className="w-full max-w-[350px] flex flex-col items-center rounded-lg">
					<Image src={brands} className="" alt="" />
				</motion.div>
			</motion.div>
			{/* <div className="w-1/2 flex flex-col items-center justify-end ">
				<div className="w-full max-w-[650px] bg-white flex flex-col items-center rounded-lg">
					<iframe
						src="https://www.youtube.com/embed/tgbNymZ7vqY"
						// style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100%' }}
						frameBorder="0"
						className="px-8 pt-5 min-h-[300px] w-full bg-[#fff]"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="YouTube video"
					/>
					<Image src={brands} className="w-[350px] bg-[#fff]" alt="" />
				</div>
			</div> */}
		</div>
	);
};

export default Banner;
