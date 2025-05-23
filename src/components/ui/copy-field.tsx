'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function CopyField({ children }: { children: React.ReactNode }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children as string);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 750);
    } catch (err) {
      console.error('Ошибка при копировании:', err);
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <p className='truncate flex-1 text-wrap'>{children}</p>
      <button
        onClick={handleCopy}
        className={`p-1.5 rounded-md transition-colors ${
          isCopied
            ? 'text-green-500 bg-green-50 dark:bg-green-900/20'
            : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        aria-label={isCopied ? 'Скопировано' : 'Копировать'}
        title={isCopied ? 'Скопировано!' : 'Копировать'}
      >
        {isCopied ? (
          <Check className='w-4 h-4' />
        ) : (
          <Copy className='w-4 h-4' />
        )}
      </button>
    </div>
  );
}
