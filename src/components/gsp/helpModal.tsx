'use client';

import { X } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        onClick={handleBackdropClick}
        className='fixed inset-0 bg-onyx opacity-75 z-40 pointer-events-auto'></div>
      <div className='fixed inset-0 flex items-center justify-center z-50 text-black dark:text-aliceblue pointer-events-none'>
        <div className='w-1/3 rounded-xl bg-white border-1 border-azul dark:bg-onyxlight shadow-lg relative pointer-events-auto'>
          <button
            onClick={onClose}
            className='cursor-pointer absolute top-4 right-4 text-gray-600 hover:text-gray-900'>
            <X />
          </button>

          <div className='px-6 py-4 border-b border-gray-200'>
            <h2 className='text-xl font-bold'>Помощь</h2>
          </div>

          <div className='px-6 py-4 text-left'>
            <p className=''>
              Телефонный справочник получает данные пользователей автоматически
              из корпоративных информационных систем. Обновления проходят
              ежедневно с 7:00 до 7:30 (мск.)
            </p>
            <p className='pt-10'>
              Если ФИО, должность или подразделение сотрудника указано не верно,
              необходимо обратиться к своему кадровому работнику (куратору) для
              внесения изменений в карточке 1С: ЗУП.
            </p>
            <p className='pt-10'>
              При необходимости изменить email или фотографию профиля,
              необходимо создать заявку на Портале системы «Поддержка
              пользователей» / Телефонный справочник / Изменение данных
              пользователя
            </p>
            <p className='pt-10'>
              Для остальных изменений нажмите "Изменить данные" в верхней части
              карточки сотрудника телефонного справочника
            </p>
            <p className='pt-10'>
              Если у вас есть предложения по развитию справочника, направляйте
              письма на электронную почту phonebook@gsprom.ru
            </p>
          </div>

          <div className='px-6 flex flex-row justify-end py-4 border-t border-gray-200'>
            <div className='flex flex-col'>
              <button
                onClick={onClose}
                className='cursor-pointer bg-azul text-white px-4 py-2 rounded hover:bg-aliceblue hover:text-black'>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
