'use client';
import { TableRowProps } from '@/types/components/table';
import { TableCell, TableRow } from '../ui/table';
import { useState } from 'react';
import EmployeeCard from '../employee-card/employee-card';
import { createPortal } from 'react-dom';
import { Organization } from '@/types/components/organization';

export function Row({
  user,
  organizations,
  ...props
}: React.ComponentProps<'tr'> & TableRowProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TableRow
        {...props}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <TableCell>{user.FullNameRus}</TableCell>
        <TableCell>{user.Workplace}</TableCell>
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
