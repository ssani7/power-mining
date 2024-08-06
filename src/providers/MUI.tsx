'use client';
import { Poppins, Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const theme = createTheme({
	typography: {
		fontFamily: poppins.style.fontFamily,
	},

	palette: {
		primary: {
			light: '#6CA340',
			main: '#BBE667',
			dark: '#BBE667',
			contrastText: '#000',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
		text: {
			primary: '#000',
			secondary: '#000',
			disabled: '#000',
			// hint: '#000',
		},
	},
});

export default theme;
