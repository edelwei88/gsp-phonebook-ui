import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/navbar/Navbar';
import { SearchBar } from '@/components/searchbar/search-bar';
import { HierarchyWrapper } from '@/components/hierarchy/hierarchy-wrapper';
import { BreadcrumbsWrapper } from '@/components/breadcrumbs/breadcrumbs-wrapper';
import { SidebarWrapper } from '@/components/sidebar/Sidebar';
import { Table } from 'lucide-react';

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
            <BreadcrumbsWrapper />
            <SearchBar />
            <SidebarWrapper hierarchy={<HierarchyWrapper />}>
              {children}
            </SidebarWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
