import { ReactNode } from 'react';

export function Avatar({children}: { children: ReactNode }) {
  return (
    <div className='flex items-center gap-2'>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{children?.toString()?.substring(0,2)?.toUpperCase()}</span>
      </div>

      <div className='hidden sm:flex'>
        <span>{children}</span>
      </div>
    </div>
  );
}