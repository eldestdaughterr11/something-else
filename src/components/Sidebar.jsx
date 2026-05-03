import React from 'react';
import { Users, History, Bookmark, MonitorPlay, UsersRound, Calendar, ChevronDown } from 'lucide-react';

const SidebarItem = ({ icon, title, image }) => (
  <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-colors w-full font-medium text-[15px]">
    {image ? (
      <img src={image} alt={title} className="w-9 h-9 rounded-full border border-gray-300 object-cover" />
    ) : (
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-blue-500">
        {icon}
      </div>
    )}
    <span className="truncate">{title}</span>
  </div>
);

const Sidebar = () => {
  return (
    <div className="hidden xl:block w-[320px] pt-4 px-2 h-screen sticky top-14 overflow-y-auto hide-scrollbar">
      <div className="flex flex-col gap-1 pb-4 border-b border-gray-300">
        <SidebarItem image="https://i.pravatar.cc/150?img=11" title="Van Ryan Navarez" />
        <SidebarItem icon={<Users className="w-7 h-7 text-blue-500 fill-current" />} title="Friends" />
        <SidebarItem icon={<History className="w-7 h-7 text-blue-500 fill-current" />} title="Memories" />
        <SidebarItem icon={<Bookmark className="w-7 h-7 text-purple-500 fill-current" />} title="Saved" />
        <SidebarItem icon={<UsersRound className="w-7 h-7 text-blue-500 fill-current" />} title="Groups" />
        <SidebarItem icon={<MonitorPlay className="w-7 h-7 text-blue-500 fill-current" />} title="Video" />
        <SidebarItem icon={<Calendar className="w-7 h-7 text-red-500 fill-current" />} title="Events" />
        <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-colors w-full font-medium text-[15px]">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
            <ChevronDown className="w-5 h-5" />
          </div>
          <span>See more</span>
        </div>
      </div>
      
      <div className="pt-4 pb-2">
        <div className="flex justify-between items-center px-2 mb-1">
          <h3 className="text-[17px] font-semibold text-gray-500">Your shortcuts</h3>
          <span className="text-blue-500 text-sm hover:bg-gray-200 p-1 rounded-md cursor-pointer hidden group-hover:block">Edit</span>
        </div>
        <SidebarItem image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=50&q=80" title="Web Development Group" />
        <SidebarItem image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=50&q=80" title="React JS Community" />
        <SidebarItem image="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=50&q=80" title="Gamer's Hub" />
      </div>
      
      <div className="text-xs text-gray-500 px-2 mt-4 space-x-1 pb-10">
        <a href="#" className="hover:underline">Privacy</a> · 
        <a href="#" className="hover:underline">Terms</a> · 
        <a href="#" className="hover:underline">Advertising</a> · 
        <a href="#" className="hover:underline">Ad Choices</a> · 
        <a href="#" className="hover:underline">Cookies</a> · 
        <a href="#" className="hover:underline">More</a> · 
        <span>Meta © 2026</span>
      </div>
    </div>
  );
};

export default Sidebar;
