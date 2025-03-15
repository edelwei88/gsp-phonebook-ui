import { AppProvider } from "@/components/context/appContext";
import { Breadcrumbs } from "@/components/gsp/breadcrumbs";
import { Hierarchy } from "@/components/gsp/hierarchy";
import { Pagination } from "@/components/gsp/pagination";

export default function Page() {
  return (
    <AppProvider>
      <Breadcrumbs />
      <Pagination />
      <Hierarchy />
    </AppProvider>
  );
}
