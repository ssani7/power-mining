import React from 'react';
import btc from '@/assets/btc icon.png';
import { Typography } from '@mui/material';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Image from 'next/image';
import logo from '@/assets/fulllogo.png';

const Services = () => {
	return (
		<div className="pt-10 xl:pt-32 xl:pb-20 px-6 xl:px-10">
			<Typography variant="h5" fontWeight={600} textAlign="center">
				What is PMC?
			</Typography>
			<div className="grid grid-cols-12 gap-4 xl:w-5/6 mx-auto pt-6">
				<div className="col-span-12 xl:col-span-7 flex gap-3 items-center bg-[#EBEBEB] p-5 rounded-lg">
					<Image src={logo} className="size-28 bg-gradient-to-tr from-[#6CA340] to-[#BBE667] p-4 rounded-lg" alt="" />
					<Typography variant="body2">Power Mining Coin Is a Random Poor People Earning With Crypto Application.</Typography>
				</div>
				<div className=" col-span-12 xl:col-span-5 flex gap-3 items-center bg-[#EBEBEB] p-5 rounded-lg">
					<Image src={logo} className="size-28 bg-gradient-to-tr from-[#6CA340] to-[#BBE667] p-4 rounded-lg" alt="" />
					<Typography variant="body2">Power Mining Coin Is a BSC/Sol And PMC MainNet Token/Coin That Generates Passive income in PMC Daily. </Typography>
				</div>
				<div className="col-span-12 xl:col-span-5 flex gap-3 items-center bg-[#EBEBEB] p-5 rounded-lg">
					<Image src={logo} className="size-28 bg-gradient-to-tr from-[#6CA340] to-[#BBE667] p-4 rounded-lg" alt="" />
					<Typography variant="body2">We Tokenized Our PMC Mining Ecosystem.</Typography>
				</div>
				<div className="col-span-12 xl:col-span-7 flex gap-3 items-center bg-[#EBEBEB] p-5 rounded-lg">
					<Image src={logo} className="size-28 bg-gradient-to-tr from-[#6CA340] to-[#BBE667] p-4 rounded-lg" alt="" />
					<Typography variant="body2">Token/Coin are like partitioned PMC Miners more tokens/coin imply greater terash power, who&apos;s means higher PMC production.</Typography>
				</div>
			</div>
			<div className="w-full flex justify-center py-10">
				<PrimaryButton>Buy Token</PrimaryButton>
			</div>
		</div>
	);
};

export default Services;
