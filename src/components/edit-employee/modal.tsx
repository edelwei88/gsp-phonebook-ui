/* eslint-disable @next/next/no-img-element */
'use client';
import { User } from '@/types/api/user';
import { SaveAll, SquareUserRound, TrashIcon, X } from 'lucide-react';
import { useState } from 'react';

export function EditEmployeeModal({
  employee,
  onClose,
}: {
  employee: User;
  onClose(): void;
}) {
  const [code, setCode] = useState('');

  const handleSendCode = () => {
    console.log('Введенный код:', code);
  };

  return (
    <>
      <div
        className='fixed bg-card opacity-75 inset-0 z-50 pointer-events-auto'
        onClick={onClose}
      ></div>

      <div className='fixed inset-0 flex items-center justify-center z-60 pointer-events-none'>
        <div className='w-full max-w-4xl mx-4'>
          <div
            className='bg-card rounded-xl shadow-lg relative pointer-events-auto max-h-[90vh]
              overflow-y-auto'
          >
            <div className='sticky top-0 bg-card z-10 p-4 border-b flex justify-between items-center'>
              <h2 className='text-xl font-bold'>Редактирование сотрудника</h2>
              <div className='flex space-x-4'>
                <button className='hover:text-gray-800 dark:hover:text-white transition-colors'>
                  <SaveAll size={20} />
                </button>
                <button
                  onClick={onClose}
                  className='hover:text-gray-800 dark:hover:text-white transition-colors'
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className='flex p-6 items-center bg-alice dark:bg-onyxlight'>
              <div
                className='relative h-20 w-20 rounded-[15px] border-4 border-gray-400 dark:border-azul
                  overflow-hidden flex-shrink-0'
              >
                {employee.Photo ? (
                  <img
                    alt='photo'
                    src={'data:image/jpg;base64,' + employee.Photo}
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center'>
                    <SquareUserRound className='size-10 text-gray-400' />
                  </div>
                )}
              </div>
              <div className='ml-6'>
                <h3 className='text-xl font-bold'>{employee.FullNameRus}</h3>
                <p className='text-sm'>
                  {employee.Workplace || 'Должность не указана'}
                </p>
              </div>
            </div>

            <div className='p-6 space-y-6'>
              <div className='grid grid-cols-1 gap-6'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                  <label className='text-sm font-medium sm:w-48'>
                    Мобильный телефон (личный)
                  </label>
                  <div className='flex-1 flex items-center gap-3'>
                    <input
                      type='text'
                      placeholder='+7 999 888 77 66'
                      className='flex-1 border border-gray-300 rounded-lg p-2'
                    />
                    <button className='text-gray-500 hover:text-red-500 transition-colors p-1'>
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                  <label className='text-sm font-medium sm:w-48'>
                    Городской телефон
                  </label>
                  <div className='flex-1 flex items-center gap-3'>
                    <input
                      type='text'
                      placeholder='+7 123 456 78 90'
                      className='flex-1 border border-gray-300 rounded-lg p-2'
                    />
                    <button className='text-gray-500 hover:text-red-500 transition-colors p-1'>
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-1 gap-6'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                  <label className='text-sm font-medium sm:w-48'>
                    Рабочее место
                  </label>
                  <div className='flex-1 flex items-center gap-3'>
                    <input
                      type='text'
                      placeholder='Офис 123'
                      className='flex-1 border border-gray-300 rounded-lg p-2'
                    />
                    <button className='text-gray-500 hover:text-red-500 transition-colors p-1'>
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                  <label className='text-sm font-medium sm:w-48'>Адрес</label>
                  <div className='flex-1 flex items-center gap-3'>
                    <input
                      type='text'
                      placeholder='ул. Примерная, д. 1'
                      className='flex-1 border border-gray-300 rounded-lg p-2'
                    />
                    <button className='text-gray-500 hover:text-red-500 transition-colors p-1'>
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4'>
                <label className='text-sm font-medium sm:w-48'>
                  Код подтверждения
                </label>
                <div className='flex-1 flex items-center gap-3'>
                  <input
                    type='text'
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    placeholder='Введите код'
                    className='flex-1 border border-gray-300 rounded-lg p-2'
                  />
                  <button
                    onClick={handleSendCode}
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
