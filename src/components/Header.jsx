import React from 'react';
import { Search, Home, Tv, Store, Users, Gamepad2, Bell, MessageCircle, Menu, Grid } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm flex items-center justify-between px-4 h-14 z-50">
      {/* Left */}
      <div className="flex items-center gap-2 w-1/4">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-blue-600 fill-current" height="40" width="40">
          <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
          <path className="fill-white" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
        </svg>
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-10 lg:w-64 cursor-pointer transition-all">
          <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Search Facebook" 
            className="hidden lg:block bg-transparent outline-none ml-2 w-full text-[15px]"
          />
        </div>
      </div>

      {/* Middle */}
      <div className="hidden md:flex flex-1 justify-center max-w-[680px]">
        <div className="flex w-full justify-between gap-1 items-center px-4">
          <div className="group cursor-pointer flex-1 flex justify-center items-center h-12 rounded-lg hover:bg-gray-100 relative text-blue-600">
            <Home className="w-7 h-7" fill="currentColor" />
            <div className="absolute bottom-[-6px] w-full h-[3px] bg-blue-600 rounded-t-md"></div>
          </div>
          <div className="group cursor-pointer flex-1 flex justify-center items-center h-12 rounded-lg hover:bg-gray-100 text-gray-500">
            <Tv className="w-7 h-7 group-hover:bg-gray-200 rounded-lg p-0.5" />
          </div>
          <div className="group cursor-pointer flex-1 flex justify-center items-center h-12 rounded-lg hover:bg-gray-100 text-gray-500">
            <Store className="w-7 h-7 group-hover:bg-gray-200 rounded-lg p-0.5" />
          </div>
          <div className="group cursor-pointer flex-1 flex justify-center items-center h-12 rounded-lg hover:bg-gray-100 text-gray-500">
            <Users className="w-7 h-7 group-hover:bg-gray-200 rounded-lg p-0.5" />
          </div>
          <div className="group cursor-pointer flex-1 flex justify-center items-center h-12 rounded-lg hover:bg-gray-100 text-gray-500">
            <Gamepad2 className="w-7 h-7 group-hover:bg-gray-200 rounded-lg p-0.5" />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 w-1/4 justify-end">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
          <Grid className="w-5 h-5 text-gray-900" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
          <MessageCircle className="w-5 h-5 text-gray-900" fill="currentColor" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
          <Bell className="w-5 h-5 text-gray-900" fill="currentColor" />
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-100 border border-gray-300 overflow-hidden cursor-pointer ml-1">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Header;
