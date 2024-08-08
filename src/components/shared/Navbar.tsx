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
import uk from '@/assets/uk.png';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const pages = [
	{ name: 'About Us', link: '/notfound' },
	{ name: 'White Paper', link: '/about' },
	{ name: 'Contact', link: '/notfound' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const WHITE_PAPER_LINK = 'https://drive.google.com/file/d/1TcnxE6Q3Cr6tBslJBHZ5sCRe6HZoNlKk/view?usp=sharing';

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
		<AppBar position="sticky" sx={{ boxShadow: 'none', background: '#fff' }}>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Link href="/">
							<Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
								<Image src={logo} className="size-12 rounded-sm bg-gradient-to-tr from-[#6CA340] to-[#BBE667] p-1" alt="logo" />
								<div className="flex flex-col gap-0 ml-2 font-semibold">
									<p>Power Mining Coin</p>
									{/* <p>Coin</p> */}
								</div>
							</Box>
						</Link>

						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
							{pages.map((page) => (
								<Button key={page.link} onClick={handleCloseNavMenu} sx={{ my: 2, color: '#000', display: 'block', textTransform: 'capitalize' }}>
									{page.name == 'White Paper' ? (
										<a href={WHITE_PAPER_LINK} target="_blank">
											White Paper
										</a>
									) : (
										<Link href={page.link}>{page.name}</Link>
									)}
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
						</Box>

						<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px', flexGrow: { xs: 1, md: 0 }, justifyContent: 'end' }}>
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
			</motion.div>
		</AppBar>
	);
}
export default Navbar;
