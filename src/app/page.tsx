import Image from 'next/image';
import elipse from '@/assets/elipse.png';
import brands from '@/assets/banner brands.png';
import btc from '@/assets/btc icon.png';
import cross from '@/assets/cross.png';
import check from '@/assets/check.png';
import { Typography } from '@mui/material';
import PrimaryButton from '@/components/shared/PrimaryButton';

export default function Home() {
	return (
		<div className="">
			<Image src={elipse} className="h-[55vh] absolute" alt="" />

			{/* banner */}
			<div className="flex items-center justify-around px-10 pt-10">
				<div className="w-1/3 flex flex-col gap-3">
					<Typography variant="h2" fontWeight="600">
						Invest in Bitcoin mining
					</Typography>
					<Typography variant="body2">Without worrying about bureaucracy and the operational part, but in an intelligent, safe, and profitable way!</Typography>
					<div>
						<PrimaryButton>Start Mining</PrimaryButton>
					</div>
				</div>
				<div className="w-1/2 flex flex-col items-center justify-end bg-[#fff]">
					<iframe
						src="https://www.youtube.com/embed/tgbNymZ7vqY"
						// style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100%' }}
						frameBorder="0"
						className="px-11 min-h-[240px] max-w-[36vw] w-full bg-[#fff] "
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="YouTube video"
					/>
					<Image src={brands} className="w-[350px] bg-[#fff]" alt="" />
				</div>
			</div>

			{/* services */}
			<div className="py-16 px-10">
				<Typography variant="h5" fontWeight={600} textAlign="center">
					What Is AMT?
				</Typography>
				<div className="grid grid-cols-12 gap-4 w-5/6 mx-auto pt-6">
					<div className="col-span-7 flex items-center bg-[#EBEBEB] p-5 rounded-lg">
						<Image src={btc} className="size-32" alt="" />
						<Typography variant="body2">AutoMiningToken (AMT) is a BSC Network token that generates passive income in bitcoin daily.</Typography>
					</div>
					<div className=" col-span-5 flex items-center bg-[#EBEBEB] p-5 rounded-lg">
						<Image src={btc} className="size-32" alt="" />
						<Typography variant="body2">AutoMiningToken (AMT) is a BSC Network token that generates passive income in bitcoin daily.</Typography>
					</div>
					<div className=" col-span-5 flex items-center bg-[#EBEBEB] p-5 rounded-lg">
						<Image src={btc} className="size-32" alt="" />
						<Typography variant="body2">AutoMiningToken (AMT) is a BSC Network token that generates passive income in bitcoin daily.</Typography>
					</div>
					<div className="col-span-7 flex items-center bg-[#EBEBEB] p-5 rounded-lg">
						<Image src={btc} className="size-32" alt="" />
						<Typography variant="body2">AutoMiningToken (AMT) is a BSC Network token that generates passive income in bitcoin daily.</Typography>
					</div>
				</div>
				<div className="w-full flex justify-center py-10">
					<PrimaryButton>Buy Token</PrimaryButton>
				</div>
			</div>

			{/* good bad */}
			<Typography variant="h5" fontWeight={600} textAlign="center">
				The democratization of BTC mining{' '}
			</Typography>

			<div className="flex px-10 gap-8 py-6">
				<div className="w-1/2 flex flex-col gap-4 items-center text-center bg-[#F4C1C1] p-10 rounded-lg">
					<Image src={cross} className="size-[100px]" alt="" />
					<Typography variant="h6">BTC mining without AMT</Typography>
					<Typography variant="body2">
						You need to import machines, find suitable space, deal with high electricity costs, invest in cooling equipment, hire staff, perform maintenance, and pay taxes.
					</Typography>
				</div>

				<div className="w-1/2 flex flex-col gap-4 items-center text-center bg-[#A3F2AB] p-10 rounded-lg">
					<Image src={check} className="size-[100px]" alt="" />
					<Typography variant="h6">BTC mining without AMT</Typography>
					<Typography variant="body2">
						You need to import machines, find suitable space, deal with high electricity costs, invest in cooling equipment, hire staff, perform maintenance, and pay taxes.
					</Typography>
				</div>
			</div>
		</div>
	);
}
