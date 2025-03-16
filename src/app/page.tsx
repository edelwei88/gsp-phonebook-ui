import { AppProvider } from "@/components/context/appContext";
import { Breadcrumbs } from "@/components/gsp/breadcrumbs";
import { Hierarchy } from "@/components/gsp/hierarchy";
import { Pagination } from "@/components/gsp/pagination";
import SearchBar from "@/components/gsp/searchbar/customSearchBar";

export default function Page() {
  return (
    <AppProvider>
      <Breadcrumbs />
      <SearchBar />
      <Pagination />
      <Hierarchy />
    </AppProvider>
  );
}
