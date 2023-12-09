import { useContext } from 'react';
import { SidebarContext } from '../contexts/SideBarContext';

export function useSidebar() {
  return useContext(SidebarContext);
}
