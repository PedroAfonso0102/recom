import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral font-sans text-secondary-500">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#cc000010_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] contrast-50 brightness-50" />
      </div>

      <Header />

      <main className="flex-grow relative z-10 w-full overflow-hidden">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
