import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/navbar/navbar';
import { BreadcrumbsItem } from '@/types/components/breadcrumbs';
import { Breadcrumbs } from '@/components/breadcrumbs/wrapper';
import { SearchBar } from '@/components/searchbar/search-bar';
import { SidebarWrapper } from '@/components/sidebar/sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Телефонный справочник ГСП',
  description: 'Телефонная книга ГСП',
};

const testData: BreadcrumbsItem[] = [
  {
    id: '1',
    name: 'name1',
  },
  {
    id: '2',
    name: 'name2',
  },
  {
    id: '3',
    name: 'name3',
  },
  {
    id: '4',
    name: 'name4',
  },
  {
    id: '5',
    name: 'name5',
  },
  {
    id: '6',
    name: 'name6',
  },
  {
    id: '7',
    name: 'name7',
  },
  {
    id: '8',
    name: 'name8',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-10 mt-1`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <div>
            <Breadcrumbs items={testData} />
            <SearchBar />
            <div className='my-5'>
              <SidebarWrapper>{children}</SidebarWrapper>
            </div>
            <div className=''></div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
