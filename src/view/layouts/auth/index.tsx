import { Outlet } from 'react-router-dom';
import react from '../../../../public/react.svg';
import tailwind from '../../../../public/tailwind.svg';
import { Footer } from '../../../components/footer';

export function AuthLayout() {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
      <div className='w-full h-screen flex'>
        <div className='hidden lg:flex flex-col w-1/2 h-full justify-center items-center p-8'>
          <p className='text-gray-700 font-light tracking-wider text-3xl mb-10'>
            Welcome to the React.js and TailwindCSS Template
          </p>
          <div className='flex gap-5'>
            <img
              src={react}
              alt='transactions-illustration'
              className='select-none'
              width={100}
            />
            <img
              src={tailwind}
              alt='transactions-illustration'
              className='select-none'
              width={130}
            />
          </div>

          <div className='max-w-[656px] mx-8 space-y-5 p-10 text-center'>
            <p className='text-gray-700 font-extralight tracking-wider text-xl'>
              Here we have many components ready to be used easily
            </p>
            <p className='text-gray-700 font-extralight tracking-wider text-xl'>
              Please Login or Create your Account to see everything use
            </p>
          </div>
        </div>

        <div className='w-full lg:w-[700px] h-full flex flex-col items-center justify-center ml-16'>
          <div className='w-3/4 h-3/5 flex flex-col items-center justify-center gap-4 lg:gap-8 bg-gray-100 border border-gray-400 rounded-3xl'>
            <div className='w-full max-w-[504px] px-4'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
