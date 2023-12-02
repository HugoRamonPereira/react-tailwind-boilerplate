import { Outlet } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div className='w-full h-screen bg-yellow-100'>
      <div className='bg-stone-400 p-2'>
        <h1>Dashboard Layout</h1>
      </div>

      <div className='p-2'>
        <Outlet />
      </div>
    </div>
  );
}
