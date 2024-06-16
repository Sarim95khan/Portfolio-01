'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header className="sticky py-4 bg-white shadow-lg dark:bg-accent top-0 z-30 transition-all">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden xl:flex gap-x-8"
              underlineStyles="absolute h-[2px] left-0 top-full bg-primary w-full bg-primary"
              linkStyles="relative hover:text-primary transition-all"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
