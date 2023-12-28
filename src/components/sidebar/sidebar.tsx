import { useState } from 'react';
import React from '../../../public/react.svg';
import Tailwind from '../../../public/tailwind.svg';
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

export function Sidebar() {
  const [asideCollapsed, setAsideCollapsed] = useState(false);

  return (
    <aside
      className={`bg-white h-[97%] my-3 ml-3 rounded-s-3xl ${
        asideCollapsed ? 'w-20 px-auto' : 'w-1/3 p-2'
      }`}
    >
      <div className='flex items-center justify-between mt-3 mb-16 px-5'>
        <div
          className={`gap-2 overflow-hidden transition-all ${
            !asideCollapsed ? 'flex' : 'hidden'
          }`}
        >
          <img src={React} alt='React.js logo' width={30} />
          <p className='uppercase font-extralight tracking-wide'>Dashboard</p>
          <img src={Tailwind} alt='TailwindCSS logo' width={37} />
        </div>
        <button
          className='p-2 translate-x-2 hover:bg-gray-100 hover:rounded-full hover:transition-all'
          onClick={() => setAsideCollapsed((value) => !value)}
        >
          {asideCollapsed ? <DoubleArrowRightIcon /> : <DoubleArrowLeftIcon />}
        </button>
      </div>

      <div>
        <ul className='space-y-3 font-medium px-5'>
          <li>
            <a
              href='#'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <svg
                className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 21'
              >
                <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
              </svg>
              {!asideCollapsed && <span className='ms-3'>Dashboard</span>}
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <svg
                className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 21'
              >
                <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
              </svg>
              {!asideCollapsed && <span className='ms-3'>Dashboard</span>}
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <svg
                className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 21'
              >
                <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
              </svg>
              {!asideCollapsed ? (
                <span className='ms-3'>Dashboard</span>
              ) : (
                <span className='ms-3'></span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
