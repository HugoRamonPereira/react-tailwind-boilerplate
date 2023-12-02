import { ComponentProps, forwardRef, useState } from 'react';
import { CrossCircledIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { cn } from '../../../app/utils/cn';
import { EyeClosedIcon } from '@radix-ui/react-icons';

interface AnimatedInputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const AnimatedPasswordInput = forwardRef<
  HTMLInputElement,
  AnimatedInputProps
>(
  (
    { id, name, placeholder, error, className, ...props }: AnimatedInputProps,
    inputRef
  ) => {
    const inputId = id ?? name;
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className='relative'>
        <input
          {...props}
          type={showPassword ? 'text' : 'password'}
          name={name}
          id={inputId}
          ref={inputRef}
          placeholder=' '
          className={cn(
            'bg-white w-full  rounded-lg border border-gray-500 pl-3 pr-12 h-[52px] mb-2 text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
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
        <button
          type='button'
          className='absolute top-4 right-4'
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </button>
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
