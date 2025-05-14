'use client';
import { User } from '@/types/api/user';
import { HintProps } from '@/types/components/search-bar';

const HintBlockContent = ({ users }: { users: User[] }) => {
  const setSelectedUser = (temp: User) => {};

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-row px-4 py-2 items-center justify-around text-center'>
        <HeaderCell>ФИО</HeaderCell>
        <HeaderCell>Email</HeaderCell>
        <HeaderCell>Телефон</HeaderCell>
      </div>
      <div className='w-full bg-card' />
      {users.map(user => (
        <UserRow
          key={user.ID}
          user={user}
          onClick={() => setSelectedUser(user)}
        />
      ))}
    </div>
  );
};

const HeaderCell = ({ children }: { children: React.ReactNode }) => (
  <div className='flex flex-col w-1/3 text-center'>
    <p className='font-bold'>{children}</p>
  </div>
);

const UserRow = ({ user, onClick }: { user: User; onClick: () => void }) => (
  <div
    onMouseDown={onClick}
    className='cursor-pointer px-4 py-2 flex flex-row justify-around text-center items-center 
               hover:bg-gray-100/50 dark:hover:bg-onyx/50 transition-colors duration-200'>
    <Cell className='font-medium'>{user.FullNameRus}</Cell>
    <Cell className='text-foreground'>{user.Email}</Cell>
    <Cell className='text-foreground'>{user.Phone}</Cell>
  </div>
);

const Cell = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`w-1/3 flex flex-col ${className}`}>
    <p className='text-sm'>{children}</p>
  </div>
);

const EmptyState = () => (
  <div className='h-32 flex items-center justify-center'>
    <span>Ничего не найдено</span>
  </div>
);

export function HintBlock({ users, hasSearched }: HintProps) {
  if (!users || users.length === 0) {
    return hasSearched ? (
      <HintContainer>
        <EmptyState />
      </HintContainer>
    ) : null;
  }

  return (
    <HintContainer>
      <HintBlockContent users={users} />
    </HintContainer>
  );
}

const HintContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className='mt-2 max-h-[333px] overflow-y-auto rounded-md border border-gray-300 
               bg-card shadow-lg dark:border-gray-700 backdrop-blur-sm 
               absolute z-60 w-full dark:text-aliceblue ease-in-out transition-all'
    style={{
      top: '100%',
      left: 0,
    }}>
    {children}
  </div>
);
