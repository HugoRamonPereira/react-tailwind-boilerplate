import { Outlet } from 'react-router-dom';
import { Footer } from '../../../components/footer';
import { Sidebar } from '../../../components/sidebar';

export function DashboardLayout() {
  return (
    <div className='w-full h-screen bg-gray-400 flex'>
      <Sidebar />

      <div className='flex flex-col justify-between p-2 my-3 mr-3 bg-gray-200 h-[97%] rounded-e-3xl'>
        <header>This is the header section</header>

        <div className='p-2'>
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}
