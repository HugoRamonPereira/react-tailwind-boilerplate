import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[550px] h-[550px] bg-green-300 rounded-2xl flex items-center justify-center'>
        <Outlet />
      </div>
    </div>
  );
}
