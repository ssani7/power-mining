import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import { ThemeProvider } from '@mui/material';
import theme from '@/providers/MUI';
import Footer from '@/components/UI/Footer';

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider theme={theme}>
						<Navbar />
						{children}
						<Footer />
					</ThemeProvider>
					{/* {children} */}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
