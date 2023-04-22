import { ReactNode } from 'react';
import Navbar from '@/components/Layout/Navbar';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
