'use client';

import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

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
	labels: ['Operating Costs', 'Growing Liquidity Reserve', 'Investor Profit'],
	datasets: [
		{
			data: [75, 5, 25],
			backgroundColor: ['#7EDA34', '#6CA340', '#BBE667'],
			hoverOffset: 4,
		},
	],
};

const Charts = () => {
	return (
		<div className="flex items-center px-20 my-20">
			<div className="w-1/2 max-h-80 flex justify-center">
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

			<div className="w-1/2 max-w-[500px] flex flex-col gap-8">
				<div>
					<Typography>Operating Costs: 75%</Typography>
					<LinearProgress
						variant="determinate"
						value={75}
						sx={{
							height: '8px',
							borderRadius: '10px',
							'& .MuiLinearProgress-bar1Determinate': {
								bgcolor: '#7EDA34',
							},
						}}
					/>
				</div>
				<div>
					<Typography>Investor Profit: 25%</Typography>
					<LinearProgress
						variant="determinate"
						value={25}
						sx={{
							height: '8px',
							borderRadius: '10px',
							'& .MuiLinearProgress-bar1Determinate': {
								bgcolor: '#BBE667',
							},
						}}
					/>
				</div>
				<div>
					<Typography>Growing Liquidity Reserve: 5%</Typography>
					{/* <BorderLinearProgress variant="determinate" value={5} bgcolor="#7EDA34" /> */}
					<LinearProgress
						variant="determinate"
						value={5}
						sx={{
							height: '8px',
							borderRadius: '10px',
							'& .MuiLinearProgress-bar1Determinate': {
								bgcolor: '#6CA340',
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Charts;
