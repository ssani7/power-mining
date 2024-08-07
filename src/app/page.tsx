import Image from 'next/image';
import elipse from '@/assets/elipse.png';
import cross from '@/assets/cross.png';
import check from '@/assets/check.png';
import { Typography } from '@mui/material';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Banner from '@/components/UI/Banner';
import Services from '@/components/UI/Services';
import Footer from '@/components/UI/Footer';
import Charts from '@/components/UI/Charts';
import SecondaryButton from '@/components/shared/SecondaryButton';
import EmblaCarousel from '@/components/UI/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../styles/embla.css';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
	return (
		<div className="">
			<Image src={elipse} className="max-h-[40vh] absolute w-full -z-10" alt="" />

			<Banner />

			<Services />

			{/* good bad */}
			<Typography variant="h5" fontWeight={600} textAlign="center">
				The Democratization of PMC Mining
			</Typography>

			<div className="flex px-10 gap-8 py-6">
				<div className="w-1/2 flex flex-col gap-4 items-center text-center bg-[#F4C1C1] p-10 rounded-lg">
					<Image src={cross} className="size-[100px]" alt="" />
					<Typography variant="h6">Mining without PMC</Typography>
					<Typography variant="body2">
						Mining without PMC you need to import machines,find suitable space,deal with high electricity coats, invest in cooling equipment,hire staff, perform maintenance,and pay taxes.
					</Typography>
				</div>

				<div className="w-1/2 flex flex-col gap-4 items-center text-center bg-[#A3F2AB] p-10 rounded-lg">
					<Image src={check} className="size-[100px]" alt="" />
					<Typography variant="h6">Mining With PMC</Typography>
					<Typography variant="body2">Mining PMC with Your Phone and Internet Only.</Typography>
				</div>
			</div>

			{/* <div>
				<svg width="100%" height="200" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
					<path d="M0,100 Q150,200 300,100 T600,100 T900,100 T1200,100" fill="none" stroke="black" strokeWidth="3" />
				</svg>
			</div> */}

			<Charts />

			<div className="flex flex-col gap-5">
				<Typography variant="h5" fontWeight={600} textAlign="center">
					About
				</Typography>

				<Typography variant="body1" textAlign="center">
					Our mission is to democratize bitcoin mining
				</Typography>

				<div className="flex justify-center items-center gap-6">
					<PrimaryButton>OUR MINING COMPANIES</PrimaryButton>
					<SecondaryButton>AMT Team</SecondaryButton>
				</div>

				<EmblaCarousel slides={SLIDES} options={OPTIONS} />
			</div>
		</div>
	);
}
