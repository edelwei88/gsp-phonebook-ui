import { Navbar } from "@/components/gsp/navbar";
import SuperWrapper from "@/components/gsp/SuperWrapper";
import { Payload } from "@/components/types/types";
import { getEmployees, getTree } from "@/components/types/getData";
import { nanoid } from "nanoid";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { page = "1", department = "", organization = "" } = await searchParams;
  const payload: Payload = await getEmployees(page, department, organization);
  const tree = await getTree();

  const addUniqueIds = (items: any[]): any[] => {
    return items.map((item) => ({
      ...item,
      ID: nanoid(),
      Children: item.Children ? addUniqueIds(item.Children) : undefined,
    }));
  };

  return (
    <div className="flex flex-col items-center mx-[30px]">
      <div className="w-full mb-[20px] px-[30px]">
        <Navbar />
      </div>
      <div className="flex flex-row w-full h-full">
        <SuperWrapper
          pages={payload.pages}
          payload={payload}
          dataWithUniqueIds={addUniqueIds(tree)}
          cur={parseInt(page)}
        />
      </div>
    </div>
  );
}

