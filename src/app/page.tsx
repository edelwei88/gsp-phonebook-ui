import { Breadcrumbs } from "@/components/gsp/breadcrumbs";
import { Hierarchy } from "@/components/gsp/hierarchy";
import { Pagination } from "@/components/gsp/pagination";
import SearchBar from "@/components/gsp/searchbar/customSearchBar";
import { Table } from "@/components/gsp/table";

export default function Page() {
  return (
    <div>
      <Breadcrumbs />
      <SearchBar />
      <Pagination />
      <Hierarchy />
      <Table />
    </div>
  );
}
