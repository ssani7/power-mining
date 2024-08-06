import { Button } from '@mui/material';
import React from 'react';

interface PrimaryButtonProps {
	children: React.ReactNode;
}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
	return (
		<Button
			variant="contained"
			sx={{
				background: 'linear-gradient(to right, #6CA340, #BBE667)',
				fontSize: '14px',
				textTransform: 'capitalize',
				fontWeight: 600,
				borderRadius: '8px',
				padding: '8px 26px',
			}}>
			{children}
		</Button>
	);
};

export default PrimaryButton;
