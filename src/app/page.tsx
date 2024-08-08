import Image from 'next/image';

import Banner from '@/components/UI/Banner';
import Services from '@/components/UI/Services';
import '../styles/embla.css';
import FadeIn from '@/components/motions/FadeIn';
import elipse from '@/assets/elipse.png';
import FadeInScroll from '@/components/motions/FadeInScroll';
import FullCarousel from '@/components/UI/FullCarousel';
import GoodBad from '@/components/UI/GoodBad';
import { Typography } from '@mui/material';
import RoadMap from '@/components/UI/RoadMap';

export default function Home() {
	return (
		<div className="">
			<FadeIn>
				<Image src={elipse} className="max-h-[40vh] absolute w-full -z-10" alt="" />
				<Banner />
			</FadeIn>

			<FadeInScroll>
				<Services />
			</FadeInScroll>

			<GoodBad />

			{/* <div>
				<svg width="100%" height="200" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
					<path d="M0,100 Q150,200 300,100 T600,100 T900,100 T1200,100" fill="none" stroke="black" strokeWidth="3" />
				</svg>
			</div> */}

			{/* <Charts /> */}

			<div className="py-10 xl:py-20">
				<Typography variant="h5" fontWeight={600} textAlign="center">
					Roadmap
				</Typography>
				<RoadMap />
			</div>

			<FullCarousel />
		</div>
	);
}
