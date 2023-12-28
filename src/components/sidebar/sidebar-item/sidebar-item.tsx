import { ReactNode } from 'react';
import { useSidebar } from '../../../app/hooks/useSidebar';

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
}

export function SidebarItem({ icon, text, active }: SidebarItemProps) {
  const { collapsed } = useSidebar();

  return (
    <li
      className={`
        flex items-center gap-2 py-2 px-3 my-1 rounded-md cursor-pointer transition-colors ${
          active ? 'bg-indigo-200 text-indigo-800' : 'bg-white text-gray-600'
        }`}
    >
      {icon}
      {!collapsed && <span className='font-light'>{text}</span>}
    </li>
  );
}
