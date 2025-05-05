'use client';

import { X } from 'lucide-react';
import { memo, useCallback } from 'react';
import { HelpModalProps } from '@/types/components/help-modal';
import { HELP_CONTENT } from '@/consts/help-content';

export default memo(function HelpModal({ isOpen, onClose }: HelpModalProps) {
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={handleBackdropClick}
        className='fixed inset-0 bg-background opacity-75 z-40 pointer-events-auto'
      />
      <div className='fixed inset-0 flex items-center justify-center z-50 pointer-events-none'>
        <div className='w-full md:w-2/3 lg:w-1/3 rounded-xl bg-background border-1 border-azul shadow-lg relative pointer-events-auto max-h-[90vh] overflow-y-auto'>
          <button
            onClick={onClose}
            className='cursor-pointer absolute top-4 right-4 hover:text-gray-900 '
            aria-label='Закрыть модальное окно'>
            <X size={24} />
          </button>

          <div className='px-6 py-4 border-b'>
            <h2 className='text-xl font-bold'>Помощь</h2>
          </div>

          <div className='px-6 py-4 text-left space-y-6'>
            {HELP_CONTENT.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className='px-6 py-4 border-tflex justify-end'>
            <button
              onClick={onClose}
              className='cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded transition-colors duration-200'>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
