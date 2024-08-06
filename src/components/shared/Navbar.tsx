'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/../public/logo.png';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import uk from '@/assets/uk.png';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const pages = ['About Us', 'White Paper', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
	const [showBrc, setShowbrc] = React.useState(true);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="sticky" sx={{ boxShadow: 'none', background: '#f7fced' }}>
			{showBrc && (
				<div className="bg-black py-1">
					<Typography variant="subtitle2" textAlign="center" color="white">
						Check local regulations to be aware of permission and conditions to use and transact BEP-20 tokens.
					</Typography>
					<div onClick={() => setShowbrc(false)}>
						<CloseIcon className="absolute right-0 top-1 bottom-1 text-white cursor-pointer" />
					</div>
				</div>
			)}
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
						<Image src={logo} className="size-10 rounded-sm" alt="logo" />
						<div className="flex flex-col gap-0 ml-2 font-semibold">
							<p>Power</p>
							<p>Token</p>
						</div>
					</Box>

					<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
						{pages.map((page) => (
							<Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: '#000', display: 'block', textTransform: 'capitalize' }}>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ marginLeft: '10px', display: 'flex', gap: '10px' }}>
						<SecondaryButton title="Air Drop" />
						<PrimaryButton>Launch App</PrimaryButton>
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px' }}>
						<Image src={uk} height={100} width={100} className="w-7" alt="USA" />
						<Typography variant="body2" fontWeight={600}>
							English
						</Typography>
					</Box>

					{/* <Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
