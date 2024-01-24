import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col py-safe">
      <main className="flex flex-1 flex-col py-4 px-safe-offset-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
