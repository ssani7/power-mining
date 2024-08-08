'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FadeInScroll = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 100,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{
				once: true,
				amount: 0.5,
			}}
			transition={{
				ease: 'easeInOut',
				duration: 0.75,
			}}>
			{children}
		</motion.div>
	);
};

export default FadeInScroll;
