import React from 'react';
import brands from '@/assets/banner brands.png';
import { Typography } from '@mui/material';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Image from 'next/image';

const Banner = () => {
	return (
		<div className="flex items-center justify-center px-10 pt-14">
			<div className="w-1/3 flex flex-col gap-3 text-center">
				<Typography variant="h2" fontWeight="600">
					Invest In PMC Mining
				</Typography>
				<Typography variant="body2">Poor People Earn With PMC Mining</Typography>
				<div>
					<PrimaryButton>Start Mining</PrimaryButton>
				</div>
			</div>
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
