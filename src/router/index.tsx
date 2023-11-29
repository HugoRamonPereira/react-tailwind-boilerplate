import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthGuard } from '../auth';
import { Signin } from '../view/pages/signin';
import { Signup } from '../view/pages/signup';
import { Dashboard } from '../view/pages/dashboard';
import { AuthLayout } from '../view/layouts/auth';
import { DashboardLayout } from '../view/layouts/dashboard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthGuard isPrivate={false} />}>
          {/* AuthLayout is a specific layout to the public routes */}
          <Route element={<AuthLayout />}>
            <Route path='/' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Route>
        {/* Private Route - Requires Authentication */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
