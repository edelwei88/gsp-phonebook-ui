import { BreadcrumbsWrapper } from '@/components/breadcrumbs/breadcrumbs-wrapper';
import { HierarchyWrapper } from '@/components/hierarchy/hierarchy-wrapper';
import { SearchBar } from '@/components/searchbar/search-bar';
import HierarchyTable from '@/components/wrapper/wrapper';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BreadcrumbsWrapper />
      <SearchBar />
      <HierarchyTable hierarchyChildren={<HierarchyWrapper />}>
        {children}
      </HierarchyTable>
    </div>
  );
}
