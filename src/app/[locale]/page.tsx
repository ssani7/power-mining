import Image from 'next/image';

import Banner from '@/components/UI/Banner';
import Services from '@/components/UI/Services';
import '@/styles/embla.css';
import FadeIn from '@/components/motions/FadeIn';
import elipse from '@/assets/elipse2.png';
import FadeInScroll from '@/components/motions/FadeInScroll';
import FullCarousel from '@/components/UI/FullCarousel';
import GoodBad from '@/components/UI/GoodBad';
import { Typography } from '@mui/material';
import RoadMap from '@/components/UI/RoadMap';
import Animation from '@/components/UI/Animation';
import { unstable_setRequestLocale } from 'next-intl/server';
import Charts from '@/components/UI/Charts';

export default function Home({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
	unstable_setRequestLocale(locale);
	return (
		<>
			<Animation />
			<div className="galaxybg">
				<FadeIn>
					{/* <Image src={elipse} className="h-[30vh] xl:h-[38vh] absolute w-full -z-10" alt="" /> */}
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

				<Charts />

				<div id="roadmap" className="py-10 my-20 xl:py-20  custom-scroll">
					<Typography variant="h5" fontWeight={600} textAlign="center">
						Roadmap
					</Typography>
					<RoadMap />
				</div>

				<FullCarousel />
			</div>
		</>
	);
}
