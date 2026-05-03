import React from 'react';

const LiquiSidebar = () => {
  const links = [
    "Upcoming Matches",
    "Trivia",
    "Statistics",
    "Achievements",
    "Awards",
    "Biography",
    "Earnings Chart",
    "Gallery",
    "Media",
    "References"
  ];

  return (
    <div className="w-[200px] flex-shrink-0 hidden lg:block text-[13px] border-r border-[#2b2d31] pr-4 pt-4">
      <div className="font-bold text-white mb-3 text-[11px] tracking-widest pl-2">CONTENTS</div>
      <div className="flex flex-col gap-1">
        {links.map((link, idx) => (
          <div key={idx} className="text-gray-300 hover:bg-[#212327] hover:text-white px-2 py-1.5 cursor-pointer rounded-sm truncate">
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiquiSidebar;
