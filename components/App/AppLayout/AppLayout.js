import React from 'react';
import { AppHeader, AppFooter } from '@/components/App';

function AppLayout({ children }) {
  return (
    <div className="container">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}

export default AppLayout;
