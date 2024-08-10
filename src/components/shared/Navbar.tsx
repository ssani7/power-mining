'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/fulllogo.png';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageSelect from './LanguageSelect';
import DocsMenu from './DocsMenu';

const pages = [
	{ name: 'About Us', link: '/notfound' },
	// { name: 'White Paper', link: '/about' },
	{ name: 'Contact', link: '/notfound' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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
		<AppBar position="sticky" sx={{ boxShadow: 'none', background: '#182a08' }}>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Link href="/">
							<Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
								<Image src={logo} className="size-12 rounded-sm bg-gradient-to-tr from-[#6CA340] to-[#BBE667] p-1" alt="logo" />
								<div className="flex flex-col gap-0 ml-2 font-semibold">
									<p className="text-white">Power Mining Coin</p>
									{/* <p>Coin</p> */}
								</div>
							</Box>
						</Link>

						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
							<div onClick={handleCloseNavMenu} className="flex items-center">
								<DocsMenu />
							</div>
							{pages.map((page) => (
								<Button key={page.link} onClick={handleCloseNavMenu} sx={{ my: 2, color: '#fff', display: 'block', textTransform: 'capitalize' }}>
									<Link href={page.link}>{page.name}</Link>
								</Button>
							))}
						</Box>

						<Box sx={{ marginLeft: '10px', display: { xs: 'none', md: 'flex' }, gap: '10px' }}>
							<Link href="/notfound">
								<SecondaryButton>Air Drop</SecondaryButton>
							</Link>
							<Link href="/notfound">
								<PrimaryButton>Launch App</PrimaryButton>
							</Link>

							<LanguageSelect />
						</Box>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
							<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
								<MenuIcon htmlColor="white" />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}>
								{pages.map((page) => (
									<MenuItem key={page.link} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page.name}</Typography>
									</MenuItem>
								))}
								<MenuItem onClick={handleCloseNavMenu}>
									<LanguageSelect />
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</motion.div>
		</AppBar>
	);
}
export default Navbar;
