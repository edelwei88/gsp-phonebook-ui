import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/navbar/navbar';
import { SearchBar } from '@/components/searchbar/search-bar';
import { HierarchyWrapper } from '@/components/hierarchy/hierarchy-wrapper';
import { BreadcrumbsWrapper } from '@/components/breadcrumbs/breadcrumbs-wrapper';
import HierarchyTable from '@/components/kal/kal';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

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
      <body className={`antialiased mx-10 mt-1`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <div>
            <BreadcrumbsWrapper />
            <SearchBar />
            <HierarchyTable hierarchyChildren={<HierarchyWrapper />}>
              {children}
            </HierarchyTable>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
