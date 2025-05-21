/* eslint-disable @next/next/no-img-element */
'use client';
import { TableRowProps } from '@/types/components/table';
import { TableCell, TableRow } from '../ui/table';
import { useState } from 'react';
import EmployeeCard from '../employee-card/employee-card';
import { createPortal } from 'react-dom';
import { SquareUserRound } from 'lucide-react';

export function Row({
  user,
  organizations,
  ...props
}: React.ComponentProps<'tr'> & TableRowProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TableRow
        className='cursor-pointer'
        {...props}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <TableCell className='text-left'>
          <div className='flex items-center gap-4'>
            {user.Photo ? (
              <img
                className='size-14'
                src={`data:image/jpeg;base64,${user.Photo}`}
                alt='User Image'
              />
            ) : (
              <SquareUserRound className='size-14' />
            )}
            <span>{user.FullNameRus}</span>
          </div>
        </TableCell>
        <TableCell className='text-center'>{user.Workplace}</TableCell>
        <TableCell>{user.Email}</TableCell>
        <TableCell>{user.Phone}</TableCell>
      </TableRow>
      {modalOpen &&
        createPortal(
          <EmployeeCard
            organizations={organizations}
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
            employee={user}
          />,
          document.body,
        )}
    </>
  );
}
