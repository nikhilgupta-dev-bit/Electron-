"use client";
// This is a client component
import { useClerk, useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";


const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check localStorage for theme or system preference
    let savedTheme = null;
    if (typeof window !== 'undefined') {
      savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        // Detect system preference
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-2 border-b border-gray-300 text-gray-700 min-h-12">
      <Image
        className="cursor-pointer w-16 md:w-24 lg:w-28 h-auto"
        onClick={() => router.push('/')}
        src={"/logo.png"}
        alt="logo"
        width={96}
        height={32}
        priority
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <button
          onClick={() => router.push('/')}
          className="relative group overflow-hidden hover:text-gray-900 transition bg-transparent border-none p-0 m-0 focus:outline-none"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">Home</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          onClick={() => router.push('/all-products')}
          className="relative group overflow-hidden hover:text-gray-900 transition bg-transparent border-none p-0 m-0 focus:outline-none"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">Shop</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          onClick={() => router.push('/about-us')}
          className="relative group overflow-hidden hover:text-gray-900 transition bg-transparent border-none p-0 m-0 focus:outline-none"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">About Us</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          onClick={() => router.push('/contact-us')}
          className="relative group overflow-hidden hover:text-gray-900 transition bg-transparent border-none p-0 m-0 focus:outline-none"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">Contact</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          onClick={toggleTheme}
          className="ml-2 px-3 py-1 rounded-full border border-gray-400 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-800 transition-colors duration-300"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
      </div>
      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {!isSignedIn && (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>
        )}
        {!isSignedIn && (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
