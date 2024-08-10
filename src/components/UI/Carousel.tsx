'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from '@/components/UI/CarouselDots';
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import photo from '@/assets/banner.png';
import { IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Slide = {
	photo: any;
	title: string;
	name: string;
	profileLinks: {
		name: string;
		link: string;
	}[];
};

type PropType = {
	slides: Slide[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__number flex-col gap-2">
								<Image src={slide.photo} alt="" />
								<div className="flex flex-col text-center">
									<Typography variant="h5" fontWeight={700} color="#BBE667">
										{slide.title}
									</Typography>
									<Typography variant="h5" fontWeight={600}>
										{slide.name}
									</Typography>
								</div>
								<div className="flex">
									{slide.profileLinks.map((social) => (
										<a key={social.link} className="flex items-center" href={social.link} target="_blank">
											<IconButton
												sx={{
													bgcolor: '#1C3F00',
												}}>
												{social.name == 'instagram' && <LinkedInIcon fontSize="medium" htmlColor="white" />}
												{social.name == 'twitter' && <LinkedInIcon fontSize="medium" htmlColor="white" />}
												{social.name == 'linkedin' && <LinkedInIcon fontSize="medium" htmlColor="white" />}
											</IconButton>
											{/* <Typography variant="button">{slide.profileLinks.linkedin}</Typography> */}
										</a>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* <div className="embla__controls">
				<div className="embla__buttons">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>

				<div className="embla__dots">
					{scrollSnaps.map((_: any, index: any) => (
						<DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')} />
					))}
				</div>
			</div> */}
		</section>
	);
};

export default EmblaCarousel;
