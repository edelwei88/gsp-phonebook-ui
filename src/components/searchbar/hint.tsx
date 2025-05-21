'use client';
import { User } from '@/types/api/user';
import { HintProps } from '@/types/components/search-bar';
import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import EmployeeCard from '../employee-card/employee-card';

const HintBlockContent = ({
  users,
  onMouseDown,
}: {
  users: User[];
  onMouseDown(bool: boolean): void;
}) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-row px-4 py-2 items-center justify-around text-center'>
        <HeaderCell>ФИО</HeaderCell>
        <HeaderCell>Email</HeaderCell>
        <HeaderCell>Телефон</HeaderCell>
      </div>
      <div className='w-full bg-card' />
      {users.map(user => (
        <UserRow key={user.ID} user={user} onMouseDown={onMouseDown} />
      ))}
    </div>
  );
};

function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col w-1/3 text-center'>
      <p className='font-bold'>{children}</p>
    </div>
  );
}

const UserRow = ({
  user,
  onMouseDown,
}: {
  user: User;
  onMouseDown(bool: boolean): void;
}) => {
  {
    const [modalOpen, setModalOpen] = useState(false);
    return (
      <>
        <div
          onMouseDown={() => {
            setModalOpen(true);
          }}
          className='cursor-pointer px-4 py-2 flex flex-row justify-around text-center items-center
            hover:bg-gray-100/50 dark:hover:bg-onyx/50 transition-colors duration-200'
        >
          <Cell className='font-medium'>{user.FullNameRus}</Cell>
          <Cell className='text-foreground'>{user.Email}</Cell>
          <Cell className='text-foreground'>{user.Phone}</Cell>
        </div>

        {modalOpen &&
          createPortal(
            <EmployeeCard
              isOpen={modalOpen}
              onClose={() => {
                setModalOpen(false);
                onMouseDown(false);
              }}
              employee={user}
            />,
            document.body,
          )}
      </>
    );
  }
};

function Cell({ children }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={'w-1/3 flex flex-col'}>
      <p className='text-sm'>{children}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className='h-32 flex items-center justify-center'>
      <span>Ничего не найдено</span>
    </div>
  );
}

export function HintBlock({ users, hasSearched, onMouseDown }: HintProps) {
  if (users.length === 0 && hasSearched) {
    return (
      <HintContainer>
        <EmptyState />
      </HintContainer>
    );
  } else if (!hasSearched) {
    return null;
  }

  return (
    <HintContainer>
      <HintBlockContent users={users} onMouseDown={onMouseDown} />
    </HintContainer>
  );
}

const HintContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className='mt-2 max-h-[333px] overflow-y-auto rounded-md border border-gray-300 bg-card
      shadow-lg dark:border-gray-700 backdrop-blur-sm absolute z-30 w-full
      dark:text-aliceblue ease-in-out transition-all'
    style={{
      top: '100%',
      left: 0,
    }}
  >
    {children}
  </div>
);
