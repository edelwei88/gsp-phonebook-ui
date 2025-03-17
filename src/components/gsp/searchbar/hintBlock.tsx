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
    <div className="mt-2 max-h-[300px] overflow-y-auto rounded-md 
    border border-gray-300 bg-white shadow-lg dark:border-gray-700 
    dark:bg-onyx absolute z-50 left-10 right-39 dark:text-aliceblue
    transition-all duration-500 ease-in-out">
      <div className="">
        {users.map((user) => (
          <div
            key={user.ID}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-onyx"
          >
            <div className="">
              <p className="font-medium">{user.FullNameRus}</p>
            </div>
            <div className="">
              <p className="text-sm text-gray-600 dark:text-aliceblue">
                {user.Email}
              </p>
            </div>
            <div className="">
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
