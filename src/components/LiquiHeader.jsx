import React from 'react';
import { Search, User, Settings, FileText, MessageSquare, Edit, History, Share2, Wrench, Menu } from 'lucide-react';

const LiquiHeader = () => {
  return (
    <div className="w-full text-[13px]">
      {/* Top Main Nav */}
      <div className="bg-[#0e2142] h-[50px] flex items-center justify-between px-4">
        <div className="flex items-center gap-6 h-full">
          <div className="flex items-center gap-2 cursor-pointer h-full px-2 hover:bg-[#1a3b68]">
            {/* Liquipedia Horse Logo Placeholder */}
            <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center">
               <span className="text-white font-bold text-lg">L</span>
            </div>
            <div className="text-white leading-tight">
              <div className="font-bold text-[15px] tracking-wide">liquipedia</div>
              <div className="text-[10px] text-gray-300">Mobile Legends</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-gray-300 h-full">
            <div className="flex items-center gap-1 hover:text-white cursor-pointer h-full px-2">
              Trending <span className="text-[10px]">▼</span>
            </div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer h-full px-2">
              Tournaments <span className="text-[10px]">▼</span>
            </div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer h-full px-2">
              Contribute <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-[#081326] border border-[#1a3b68] rounded-sm py-1 px-3 text-white w-48 text-[13px] outline-none focus:border-[#5a9cd6]"
            />
            <Search className="w-4 h-4 absolute right-2 top-1.5 text-gray-400" />
          </div>
          <div className="flex items-center gap-3 text-gray-300">
             <User className="w-4 h-4 cursor-pointer hover:text-white" />
             <Settings className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Sub Nav */}
      <div className="bg-[#0b1c3a] border-b border-[#1a3b68] h-[36px] flex items-center justify-between px-4">
        <div className="flex h-full pl-60"> {/* Offset for left sidebar */}
          <div className="flex items-center gap-2 px-3 bg-[#1a3b68] text-white cursor-pointer h-full border-t-[3px] border-[#5a9cd6]">
            <FileText className="w-4 h-4" />
            <span className="font-semibold">Page</span>
          </div>
          <div className="flex items-center gap-2 px-3 text-[#5a9cd6] hover:bg-[#152a4d] cursor-pointer h-full">
            <MessageSquare className="w-4 h-4" />
            <span>Talk</span>
          </div>
          <div className="flex items-center gap-2 px-3 text-[#5a9cd6] hover:bg-[#152a4d] cursor-pointer h-full">
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </div>
          <div className="flex items-center gap-2 px-3 text-[#5a9cd6] hover:bg-[#152a4d] cursor-pointer h-full">
            <History className="w-4 h-4" />
            <span>History</span>
          </div>
        </div>

        <div className="flex items-center gap-3 h-full">
          <div className="flex items-center gap-1 text-[#5a9cd6] hover:text-white cursor-pointer px-2">
            Auto <span className="text-[10px]">▼</span>
          </div>
          <div className="flex items-center gap-1 text-[#5a9cd6] hover:text-white cursor-pointer px-2">
            <Share2 className="w-4 h-4" /> Share <span className="text-[10px]">▼</span>
          </div>
          <div className="flex items-center gap-1 text-[#5a9cd6] hover:text-white cursor-pointer px-2">
            <Wrench className="w-4 h-4" /> Tools <span className="text-[10px]">▼</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquiHeader;
