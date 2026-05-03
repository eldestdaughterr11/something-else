import React from 'react';
import { Search, MoreHorizontal, Video, Plus } from 'lucide-react';

const ContactItem = ({ name, image }) => (
  <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-colors relative">
    <div className="relative">
      <img src={image} alt={name} className="w-9 h-9 rounded-full object-cover" />
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
    </div>
    <span className="font-medium text-[15px]">{name}</span>
  </div>
);

const RightSidebar = () => {
  const contacts = [
    { name: "John Doe", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Jane Smith", img: "https://i.pravatar.cc/150?img=5" },
    { name: "Michael Johnson", img: "https://i.pravatar.cc/150?img=15" },
    { name: "Emily Davis", img: "https://i.pravatar.cc/150?img=20" },
    { name: "Chris Wilson", img: "https://i.pravatar.cc/150?img=33" },
    { name: "Sarah Taylor", img: "https://i.pravatar.cc/150?img=44" },
    { name: "David Miller", img: "https://i.pravatar.cc/150?img=55" },
    { name: "Jessica Brown", img: "https://i.pravatar.cc/150?img=47" },
    { name: "Daniel Martinez", img: "https://i.pravatar.cc/150?img=59" },
    { name: "Laura Garcia", img: "https://i.pravatar.cc/150?img=16" },
  ];

  return (
    <div className="hidden lg:block w-[320px] pt-4 px-2 h-screen sticky top-14 overflow-y-auto hide-scrollbar">
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="text-gray-500 font-semibold text-[17px] px-2 mb-2">Sponsored</h3>
        <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-colors">
          <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=150&q=80" alt="Ad" className="w-[110px] h-[110px] rounded-lg object-cover" />
          <div>
            <div className="font-medium">Learn React Mastery</div>
            <div className="text-sm text-gray-500">react-courses.com</div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-2 mb-2 mt-4">
        <h3 className="text-gray-500 font-semibold text-[17px]">Contacts</h3>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer text-gray-500">
            <Video className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer text-gray-500">
            <Search className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer text-gray-500">
            <MoreHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <div className="pb-10">
        {contacts.map((contact, i) => (
          <ContactItem key={i} name={contact.name} image={contact.img} />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
