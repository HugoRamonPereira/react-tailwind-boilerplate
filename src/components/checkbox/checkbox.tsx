import { ComponentProps, forwardRef, useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { Link } from 'react-router-dom';

interface CheckboxProps extends ComponentProps<'input'> {
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { error, ...props }: CheckboxProps,
    inputRef
  ) => {
    const [isChecked, setIsChecked] = useState(false);

    function toggleCheckbox() {
      setIsChecked(!isChecked);
    }

    return (
      <div>
        <div className="flex items-center gap-1">
          <label
            className="relative p-1 flex items-center rounded-lg cursor-pointer focus-within:outline-none focus-within:ring-1 focus-within:ring-green-500 focus-within:p-1 focus-within:ring-offset-1 focus-within:ring-offset-green-500"
            htmlFor="terms"
          >
            <input
              {...props}
              type="checkbox"
              ref={inputRef}
              className="before:content[''] peer relative h-5 w-5 p-1 cursor-pointer appearance-none rounded-md border border-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10 focus-within:outline-none focus-within:ring-1 focus-within:ring-green-500 focus-within:p-1"
              id="terms"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <span
              className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" strokeWidth="1">
                <path fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
              </svg>
            </span>
          </label>
          <div>
            <p className='text-green-500 tracking-wide text-xs sm:text-sm p-1'>
              Eu concordo com os{' '}
              <Link
                to='/terms'
                className='p-1 underline underline-offset-4 hover:text-green-400 focus:outline-none focus:ring-[0.5px] focus:ring-green-500 focus:rounded-sm focus:ring-offset-1 focus:ring-offset-green-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                Termos & Condições
              </Link>
            </p>
          </div>
        </div>
        <div>
          {error ? (
            <div
              className={
                'flex items-center justify-center gap-1 h-6 font-light tracking-wide text-red-600'
              }
            >
              <RxCrossCircled />
              <span className='text-red-600 text-xs'>{error}</span>
            </div>
          ) : (
            <div className='h-6 invisible'>
              {' '}
            </div>
          )}
        </div>
      </div>
    );
  }
);