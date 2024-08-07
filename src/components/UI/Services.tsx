import React from 'react';
import btc from '@/assets/btc icon.png';
import { Typography } from '@mui/material';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Image from 'next/image';

const Services = () => {
	return (
		<div className="pt-32 pb-20 px-10">
			<Typography variant="h5" fontWeight={600} textAlign="center">
				What is PMC?
			</Typography>
			<div className="grid grid-cols-12 gap-4 w-5/6 mx-auto pt-6">
				<div className="col-span-7 flex items-center bg-[#EBEBEB] p-5 rounded-lg">
					<Image src={btc} className="size-32" alt="" />
					<Typography variant="body2">Power Mining Coin Is a Random Poor People Earning With Crypto Application.</Typography>
				</div>
				<div className=" col-span-5 flex items-center bg-[#EBEBEB] p-5 rounded-lg">
					<Image src={btc} className="size-32" alt="" />
					<Typography variant="body2">Power Mining Coin Is a BSC/Sol And PMC MainNet Token/Coin That Generates Passive income in PMC Daily. </Typography>
				</div>
				<div className=" col-span-5 flex items-center bg-[#EBEBEB] p-5 rounded-lg">
					<Image src={btc} className="size-32" alt="" />
					<Typography variant="body2">We Tokenized Our PMC Mining Ecosystem.</Typography>
				</div>
				<div className="col-span-7 flex items-center bg-[#EBEBEB] p-5 rounded-lg">
					<Image src={btc} className="size-32" alt="" />
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
