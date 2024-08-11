import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/fulllogo.png';
import twitter from '@/assets/twitter.png';
import tg from '@/assets/telegram.png';
import yt from '@/assets/fb.svg';
import PrimaryButton from '../shared/PrimaryButton';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const social = [
	{ name: 'Twitter', icon: twitter, link: 'https://x.com/Power_Mining01?t=hoAkyG4Is5WsLE-b5Bux7w&s=09' },
	{ name: 'Telegram', icon: tg, link: 'https://t.me/Power_mining_Announcement' },
	{ name: 'Youtube', icon: yt, link: 'https://www.facebook.com/profile.php?id=61563526515077&mibextid=ZbWKwL' },
];

const Footer = () => {
	const t = useTranslations('Footer');
	return (
		<div id="contact" className="z-20 absolute w-full">
			<div className="bg-[#1C3F00] p-10 flex flex-col gap-5">
				<div className="flex items-center gap-3 justify-center">
					<Image src={logo} className="w-20 rounded-sm" alt="" />
					<div className="">
						<Typography color="white" fontSize={20} fontWeight="700">
							Power Mining
						</Typography>
						<Typography color="white" variant="h5" fontWeight="700">
							Coin{' '}
						</Typography>
					</div>
				</div>

				<Typography color="white" variant="body1" textAlign="center">
					{t('text')}
				</Typography>

				<div className="flex justify-center">
					<Link href="/notfound">
						<PrimaryButton>{t('Launch App')}</PrimaryButton>
					</Link>
				</div>

				<div className="mt-6">
					<Typography color="white" variant="body1" textAlign="center">
						{t('connect')}
					</Typography>

					<div className="flex items-center justify-center gap-4">
						{social.map((s, i) => (
							<div key={s.name} className="bg-[#EEEEEE] mt-4 px-3 py-2 rounded-lg">
								<a href={s.link} target="_blank">
									<Image src={s.icon} className="w-8 h-8 object-contain" alt="" />
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flex justify-center bg-black py-4">
				<Typography color="white" variant="caption" textAlign="center" sx={{ margin: 'auto' }}>
					Copyright © 2023. All rights reserved Privacy Policy - Terms of Use
				</Typography>
			</div>
		</div>
	);
};

export default Footer;
