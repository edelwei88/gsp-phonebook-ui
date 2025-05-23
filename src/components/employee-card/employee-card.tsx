/* eslint-disable @next/next/no-img-element */
'use client';

import { SquareUserRound, X } from 'lucide-react';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { EmployeeCardProps } from '@/types/components/employee-card';
import { getDepartmentPath } from '@/types/components/organization';
import { GetOrganizationTree } from '@/api/get-organization-tree';
import CopyField from '../ui/copy-field';
import { EditEmployeeModal } from '../edit-employee/modal';

export default memo(function EmployeeCard({
  isOpen,
  onClose,
  employee,
  organizations,
}: EmployeeCardProps) {
  const [org, setOrg] = useState(organizations);
  const [editModalOpened, setEditModalOpened] = useState(false);
  useEffect(() => {
    async function fetchData() {
      if (!organizations) setOrg(await GetOrganizationTree());
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );
  if (!isOpen || !employee) return null;

  const departmentPath = getDepartmentPath(org, employee.DepartmentID);
  const organizationPath = getDepartmentPath(org, employee.OrganizationID);

  return (
    <>
      <div
        onClick={handleBackdropClick}
        className='fixed inset-0 bg-card opacity-75 z-40 pointer-events-auto'
      />

      <div className='fixed inset-0 flex items-center justify-center z-50 pointer-events-none'>
        <div
          className='w-full md:w-2/3 lg:w-1/3 rounded-xl bg-card border-1 border-azul shadow-lg
            relative pointer-events-auto max-h-[90vh] overflow-y-auto'
        >
          <button
            onClick={onClose}
            className='cursor-poiner absolute top-4 right-4 hover:text-gray-900'
            aria-label='Закрыть'
          >
            <X size={24} />
          </button>

          <div className='px-6 py-4 border-b flex items-start gap-4'>
            <div
              className='w-20 h-20 rounded-xl bg-gray-100 border-2 border-azul flex items-center
                justify-center overflow-hidden'
            >
              {employee.Photo ? (
                <img
                  src={`data:image/jpeg;base64,${employee.Photo}`}
                  alt='User Image'
                />
              ) : (
                <SquareUserRound className='size-16 text-black' />
              )}
            </div>
            <div className='flex-1'>
              <h2 className='text-xl font-bold'>{employee.FullNameRus}</h2>
              <p className='text-sm text-muted-foreground mt-1'>
                {employee.Workplace}
              </p>
            </div>
          </div>

          <div className='px-6 py-4 space-y-1'>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Организация:</label>
              <CopyField>{organizationPath}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Подразделение:</label>
              <CopyField>{departmentPath.split('→ ').at(-1)}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Префикс:</label>
              <CopyField>{employee.Phone}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Телефон:</label>
              <CopyField>{employee.Phone}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Городской номер:</label>
              <CopyField>{employee.Phone}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>
                Мобильный (рабочий):
              </label>
              <CopyField>{employee.Mobile}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Мобильный (личный):</label>
              <CopyField>{employee.Mobile}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Email:</label>
              <CopyField>{employee.Email}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Рабочее место:</label>
              <CopyField>{employee.Workplace}</CopyField>
            </div>
            <div className='grid grid-cols-[120px_1fr] gap-4'>
              <label className='text-sm font-medium'>Адрес:</label>
              <CopyField>{employee.Address}</CopyField>
            </div>
          </div>

          <div className='px-6 py-4 border-t'>
            <div className='space-y-1'>
              <div className='space-y-1'>
                <div className='flex flex-col'>
                  <span className='text-xs text-muted-foreground'>
                    Организация:
                  </span>
                  <span className='text-sm'>{organizationPath}</span>
                </div>

                <div className='flex flex-col'>
                  <span className='text-xs text-muted-foreground'>
                    Подразделение:
                  </span>
                  <span className='text-sm'>{departmentPath}</span>
                </div>
              </div>
            </div>
          </div>

          <div className='px-6 py-4 border-t flex justify-end'>
            <button
              onClick={() => {
                setEditModalOpened(true);
              }}
              className='cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded
                transition-colors duration-200'
            >
              Редактировать
            </button>
          </div>
        </div>
      </div>
      {editModalOpened && (
        <EditEmployeeModal
          employee={employee}
          onClose={() => {
            setEditModalOpened(false);
          }}
        />
      )}
    </>
  );
});
