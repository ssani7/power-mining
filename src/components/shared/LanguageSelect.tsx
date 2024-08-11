'use client';

import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import uk from '@/assets/flags/uk.png';
import sp from '@/assets/flags/spain.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useParams, useRouter } from 'next/navigation';

const languageOptions = [
	{ name: 'English', value: 'en', icon: uk },
	{ name: 'Spanish', value: 'es', icon: sp },
];

const LanguageSelect = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const router = useRouter();

	const params = useParams<{ locale: string }>();

	const defaultLanguage = languageOptions.find((op) => op.value == params.locale) || languageOptions[0];

	const [selectedLanguage, setSelectedLanguage] = React.useState<any>(defaultLanguage);

	console.log('params', params);

	const handleSelect = (index: number) => {
		setSelectedLanguage(languageOptions[index]);
		router.push(`/${languageOptions[index].value}`);
		handleClose();
	};

	return (
		<div className="flex items-center">
			<Button
				id="demo-customized-button"
				aria-controls={open ? 'demo-customized-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				variant="text"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon htmlColor="white" />}>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
					<Image src={selectedLanguage.icon} height={100} width={100} className="w-7" alt="USA" />
					<Typography variant="body2" fontWeight={600}>
						{selectedLanguage.name}
					</Typography>
				</Box>
			</Button>
			<Menu
				id="demo-customized-menu"
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}>
				{languageOptions.map((option, i) => (
					<MenuItem key={option.name} onClick={() => handleSelect(i)}>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<Image src={option.icon} height={100} width={100} className="w-7" alt="USA" />
							<Typography variant="body2" fontWeight={600}>
								{option.name}
							</Typography>
						</Box>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default LanguageSelect;
