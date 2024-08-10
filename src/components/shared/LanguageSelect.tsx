import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import uk from '@/assets/flags/uk.png';
import ger from '@/assets/flags/germany.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const languageOptions = [
	{ name: 'English', value: '', icon: uk },
	{ name: 'German', value: '', icon: ger },
];

const LanguageSelect = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const [selectedLanguage, setSelectedLanguage] = React.useState<any>(languageOptions[0]);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSelect = (index: number) => {
		setSelectedLanguage(languageOptions[index]);
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
