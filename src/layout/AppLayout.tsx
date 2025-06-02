import React from 'react';
import { Outlet } from 'react-router';

export default function AppLayout() {
  return (
    <div>
      SideBar
      <Outlet />
    </div>
  );
}
