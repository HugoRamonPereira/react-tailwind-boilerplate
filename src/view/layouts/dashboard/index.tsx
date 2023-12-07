import { Outlet } from 'react-router-dom';
import { Footer } from '../../../components/footer';

export function DashboardLayout() {
  return (
    <div className='w-full h-screen bg-yellow-100 flex'>
      <aside className='bg-stone-500 p-2 w-1/3 h-[97%] m-3 rounded-lg'>
        <h1>Dashboard Layout</h1>
      </aside>

      <div className='flex flex-col justify-between pt-2'>
        <header>This is the header section</header>

        <div className='p-2'>
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}
