import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslations } from 'next-intl';

const PERMIT_LINK = 'https://drive.google.com/file/d/1TcnxE6Q3Cr6tBslJBHZ5sCRe6HZoNlKk/view?usp=sharing';
const WHITE_PAPER_LINK = 'https://docs.google.com/document/d/1UGhvU4unM90IYs3GvA3LGnTtdNrNwZsbDoHuGeHk7aU/edit';

const DocsMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const t = useTranslations('Navbar');

	const docOptions = [
		{ name: t('White Paper'), link: WHITE_PAPER_LINK },
		{ name: t('Business Permit'), link: PERMIT_LINK },
	];

	// const [selectedLanguage, setSelectedLanguage] = React.useState<any>(docOptions[0]);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
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
					<Typography variant="body2" fontWeight={600} textTransform="capitalize">
						Documents
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
				{docOptions.map((option, i) => (
					<a key={option.name} href={option.link} target="_blank">
						<MenuItem onClick={handleClose}>{option.name}</MenuItem>
					</a>
				))}
			</Menu>
		</div>
	);
};

export default DocsMenu;
