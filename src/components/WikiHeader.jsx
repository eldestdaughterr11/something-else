import React from 'react';
import { Search, Menu, User, Settings, Lock } from 'lucide-react';

const WikiHeader = () => {
  return (
    <div className="w-full">
      {/* Top Main Nav */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#eaecf0] bg-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Menu className="w-5 h-5 text-[#202122] cursor-pointer" />
          <div className="flex flex-col items-center justify-center cursor-pointer">
             <div className="font-serif text-[1.4rem] leading-none tracking-tight">WIKIPEDIA</div>
             <div className="font-serif text-[0.65rem] tracking-[0.1em] text-[#54595d]">The Free Encyclopedia</div>
          </div>
        </div>

        <div className="flex-1 max-w-[600px] px-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#54595d]" />
            <input 
              type="text" 
              placeholder="Search Wikipedia" 
              className="w-full bg-[#eaecf0] border border-transparent rounded-[20px] py-1.5 pl-10 pr-4 text-[0.875rem] outline-none focus:bg-white focus:border-[#3366cc] focus:shadow-[inset_0_0_0_1px_#3366cc]"
            />
            <button className="absolute right-3 top-1.5 text-xs font-semibold text-[#54595d] border border-[#a2a9b1] rounded px-2 py-0.5 bg-[#f8f9fa] hover:bg-white">
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[0.875rem] font-medium text-[#202122]">
          <span className="hover:underline cursor-pointer hidden sm:block">Donate</span>
          <span className="hover:underline cursor-pointer hidden sm:block">Create account</span>
          <span className="hover:underline cursor-pointer">Log in</span>
          <Settings className="w-4 h-4 cursor-pointer text-[#202122]" />
        </div>
      </div>
    </div>
  );
};

export default WikiHeader;
