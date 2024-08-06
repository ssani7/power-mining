import { Button } from '@mui/material';
import { Poppins } from 'next/font/google';
import React from 'react';

interface PrimaryButtonProps {
	title: string;
}

const SecondaryButton = ({ title }: PrimaryButtonProps) => {
	return (
		<Button
			variant="contained"
			sx={{
				background: '#4959E5',
				fontSize: '14px',
				textTransform: 'capitalize',
				fontWeight: 600,
				borderRadius: '8px',
				color: '#fff',
				padding: '8px 30px',
			}}>
			{title}
		</Button>
	);
};

export default SecondaryButton;
