import { User } from "@/lib/types/user";

interface HintBlockProps {
  users: User[];
  hasSearched: boolean;
}

export default function HintBlock({ users, hasSearched }: HintBlockProps) {
  if (hasSearched && (!users || users.length === 0)) {
  return (
  <p className="mt-2 text-gray-600 dark:text-gray-400 dark:text-aliceblue">
    Работник не найден
  </p>
  );
  }
  if (!users || users.length === 0) {
  return null;
  }
  return (
  <div
  className="mt-2 max-h-[300px] overflow-y-auto rounded-md 
  border border-gray-300 bg-white/50 shadow-lg dark:border-gray-700 
  dark:bg-onyx/50 backdrop-blur-sm absolute z-50 w-full dark:text-aliceblue
    ease-in-out"
  style={{
    top: "100%", 
    left: 0, 
  }}
  >
  <div className="flex flex-col w-full">
    <div className="flex flex-row px-4 py-2  items-center justify-around text-center">
    <div className="flex flex-col w-1/3 text-center"><p className="font-bold">ФИО</p></div>
    <div className="flex flex-col w-1/3 text-center"><p className="font-bold">Email</p></div>
    <div className="flex flex-col w-1/3 text-center"><p className="font-bold">Телефон</p></div>
    </div>
    <div className="w-full bg-white border-solid h-[1px]"></div>
    {users.map((user) => (
    <div
    key={user.ID}
    className="px-4 py-2 flex flex-row justify-around text-center items-center hover:bg-gray-100/50 dark:hover:bg-onyx/50"
    >
    <div className="w-1/3 flex flex-col">
      
      <p className="font-medium">{user.FullNameRus}</p>
    </div>
    <div className="w-1/3 flex flex-col ">
      <p className="text-sm text-gray-600 dark:text-aliceblue">
      {user.Email}
      </p>
    </div>
    <div className="flex flex-col w-1/3">
      <p className="text-sm text-gray-600 dark:text-aliceblue">
      {user.Phone}
      </p>
    </div>
    </div>
    ))}
  </div>
  </div>
  );
}
