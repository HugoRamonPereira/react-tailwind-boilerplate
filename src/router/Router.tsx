import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthGuard } from '../Auth/AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path='/signin' element={<p>Signin</p>} />
          <Route path='/signup' element={<p>Signup</p>} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path='/' element={<p>Dashboard</p>} />
        </Route>
      </Routes>  
    </BrowserRouter>
  );
}