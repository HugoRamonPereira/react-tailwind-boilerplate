import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className='w-full h-screen bg-stone-100'>
      <div className='bg-stone-400 p-3'>
        <h1>Auth Layout</h1>
      </div>

      <div className='p-3'>
        <Outlet />
      </div>
    </div>
  );
}