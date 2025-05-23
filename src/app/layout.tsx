import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/navbar/navbar';

export const metadata: Metadata = {
  title: 'Телефонный справочник ГСП',
  description: 'Телефонная книга ГСП',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body className='antialiased mx-10 min-h-[500px] min-w-[1100px]'>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Navbar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
