'use client';

import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === 'light' ? 'primary.main' : '#308fe8',
	},
}));

const data = {
	labels: ['Mining by user', 'Pre-Sale', 'Liquidity', 'And Airdrop'],
	datasets: [
		{
			data: [80, 10, 5, 5],
			backgroundColor: ['#71ff00', '#7EDA34', '#BBE667', '#6CA340'],
			hoverOffset: 4,
		},
	],
};

const Charts = () => {
	const t = useTranslations('token');

	return (
		<div id="token" className="flex flex-col gap-6 xl:px-20 px-4 my-20 glass_card py-10 mx-6 xl:mx-10">
			<Typography variant="h5" fontWeight={600} textAlign="center">
				{t('title')}
			</Typography>
			<Typography textAlign="center" sx={{ maxWidth: { xs: '100%', md: '70%' }, margin: 'auto' }}>
				{t('desc')}
			</Typography>

			<div className="w-full flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-0">
				<div className="w-full xl:w-1/3 xl:max-w-[500px] flex flex-col gap-4 xl:gap-8 order-2 xl:order-1">
					<div>
						<Typography>{t('op1')}(80%)</Typography>
						<LinearProgress
							variant="determinate"
							value={80}
							sx={{
								height: '8px',
								borderRadius: '10px',
								'& .MuiLinearProgress-bar1Determinate': {
									bgcolor: '#71ff00',
									borderRadius: '6px',
								},
							}}
						/>
					</div>
					<div>
						<Typography>{t('op2')}(10%)</Typography>
						<LinearProgress
							variant="determinate"
							value={10}
							sx={{
								height: '8px',
								borderRadius: '10px',
								'& .MuiLinearProgress-bar1Determinate': {
									bgcolor: '#7EDA34',
									borderRadius: '6px',
								},
							}}
						/>
					</div>
				</div>

				<div className="xl:w-1/3 max-h-80 flex justify-center order-first xl:order-2">
					<Doughnut
						data={data}
						options={{
							plugins: {
								legend: {
									display: false,
								},
							},
						}}
					/>
				</div>

				<div className="w-full xl:w-1/3 xl:max-w-[500px] flex flex-col gap-4 xl:gap-8 order-3">
					<div>
						<Typography>{t('op3')}(5%)</Typography>
						{/* <BorderLinearProgress variant="determinate" value={5} bgcolor="#7EDA34" /> */}
						<LinearProgress
							variant="determinate"
							value={5}
							sx={{
								height: '8px',
								borderRadius: '10px',
								'& .MuiLinearProgress-bar1Determinate': {
									bgcolor: '#BBE667',
									borderRadius: '6px',
								},
							}}
						/>
					</div>
					<div>
						<Typography>{t('op4')}(5%)</Typography>
						{/* <BorderLinearProgress variant="determinate" value={5} bgcolor="#7EDA34" /> */}
						<LinearProgress
							variant="determinate"
							value={5}
							sx={{
								height: '8px',
								borderRadius: '10px',
								'& .MuiLinearProgress-bar1Determinate': {
									bgcolor: '#6CA340',
									borderRadius: '6px',
								},
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Charts;
