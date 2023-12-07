import { ComponentProps, forwardRef } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../../app/utils/cn';

interface AnimatedInputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const AnimatedInput = forwardRef<HTMLInputElement, AnimatedInputProps>(
  (
    { id, name, placeholder, error, className, ...props }: AnimatedInputProps,
    inputRef
  ) => {
    const inputId = id ?? name;
    return (
      <div className='relative'>
        <input
          {...props}
          name={name}
          id={inputId}
          ref={inputRef}
          placeholder=' '
          className={cn(
            'bg-white w-full font-light rounded-lg border border-gray-500 px-3 h-[52px] mb-2 text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
            error && '!border-red-900',
            className
          )}
        />
        <label
          htmlFor={inputId}
          className='absolute text-[10px] font-light tracking-wide left-[13px] top-2 text-gray-700 pointer-events-none peer-placeholder-shown:sm:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:sm:top-3.5 transition-all'
        >
          {placeholder}
        </label>
        {error && (
          <div
            className={
              'flex items-center gap-1 font-light tracking-wide text-red-900'
            }
          >
            <CrossCircledIcon />
            <span className='text-red-900 text-xs'>{error}</span>
          </div>
        )}
      </div>
    );
  }
);
