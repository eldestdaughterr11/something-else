import React from 'react';

const LiquiInfobox = () => {
  return (
    <div className="w-[316px] flex-shrink-0 text-[13px] liqui-border bg-[#212327] rounded-sm overflow-hidden mb-6">
      {/* Header */}
      <div className="bg-[#1a3b68] text-white p-2 flex justify-between items-center border-b border-[#2b2d31]">
        <div className="flex items-center gap-2">
          {/* Team Logo placeholder */}
          <div className="w-5 h-5 bg-black/30 rounded-full flex items-center justify-center text-[9px]">FCPH</div>
          <span className="font-bold text-[15px]">VanTzy</span>
        </div>
        <div className="text-[10px] text-gray-300">[e][h]</div>
      </div>

      {/* Image */}
      <div className="w-full h-[280px] bg-[#1a1b1e] flex items-center justify-center p-2 border-b border-[#2b2d31]">
        {/* Placeholder for player image */}
        <div className="w-full h-full object-cover rounded-sm relative overflow-hidden bg-[#2a2c31]">
           <img src="/Van.jpg" alt="VanTzy" className="w-full h-full object-cover" />
           {/* Mock Jersey Details */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>

      {/* Player Information Title */}
      <div className="bg-[#1a3b68] text-white text-center font-bold py-1 border-b border-[#2b2d31]">
        Player Information
      </div>

      {/* Info Rows */}
      <div className="p-3 flex flex-col gap-2">
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Name:</div>
          <div className="flex-1 font-semibold text-white">Van Navarez</div>
        </div>
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Nationality:</div>
          <div className="flex-1 flex items-center gap-2">
            <span className="text-xl">🇵🇭</span> <span className="liqui-link">Philippines</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Born:</div>
          <div className="flex-1">August 11, 2003 (age 22)</div>
        </div>
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Status:</div>
          <div className="flex-1">Active</div>
        </div>
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Role:</div>
          <div className="flex-1 liqui-link">Jungler</div>
        </div>
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Team:</div>
          <div className="flex-1 font-semibold liqui-link">Team Falcons PH</div>
        </div>
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Alternate IDs:</div>
          <div className="flex-1">Van, Snawfy</div>
        </div>
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Nickname(s):</div>
          <div className="flex-1">The Assassin Prodigy<br/>The New Gen GOAT</div>
        </div>
        
        <div className="border-t border-[#2b2d31] my-1"></div>
        
        <div className="flex">
          <div className="w-[100px] font-semibold text-gray-400">Approx. Total Winnings:</div>
          <div className="flex-1 font-bold text-white">$427,071</div>
        </div>
        <div className="mt-2 p-2 bg-[#1a1b1e] rounded border border-[#2b2d31]">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 px-1">Signature Heroes</div>
          <div className="flex justify-between items-center px-1">
             {[
               { name: 'Fanny', src: '/Fanny.webp' },
               { name: 'Fredrinn', src: '/Fredrinn.webp' },
               { name: 'Hayabusa', src: '/Hayabusa.webp' },
               { name: 'Lancelot', src: '/Lancelot.webp' },
               { name: 'Suyou', src: '/Suyou.webp' }
             ].map((hero) => (
               <div key={hero.name} className="group relative">
                 <div className="p-[1px] bg-[#3b3d41] rounded-sm border border-[#4b4d51] group-hover:border-[#5a9cd6] transition-all transform group-hover:scale-105">
                    <img 
                      src={hero.src} 
                      alt={hero.name} 
                      title={hero.name}
                      className="w-[38px] h-[38px] rounded-sm object-cover bg-black" 
                    />
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1a3b68] text-white text-center font-bold py-1 border-y border-[#2b2d31]">
        Links
      </div>
      <div className="p-2 flex justify-center gap-3 bg-[#1e2024]">
         {/* Social Icons Placeholder */}
         <div className="w-6 h-6 bg-[#333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#555]">f</div>
         <div className="w-6 h-6 bg-[#333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#555]">IG</div>
         <div className="w-6 h-6 bg-[#333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#555]">X</div>
         <div className="w-6 h-6 bg-[#333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#555]">YT</div>
      </div>

      <div className="bg-[#1a3b68] text-white text-center font-bold py-1 border-y border-[#2b2d31]">
        Achievements
      </div>
      <div className="p-3 bg-[#1e2024] flex flex-col items-center gap-2 text-center">
         <div className="text-white text-xs font-semibold">
            Rookie of the Season (MDL Philippines Season 4)
         </div>
         <div className="text-[#ffd700] text-xs font-bold">
            Finals MVP (MDL Philippines Season 5)
         </div>
      </div>

      <div className="bg-[#1a3b68] text-white text-center font-bold py-1 border-y border-[#2b2d31]">
        History
      </div>
      <div className="p-3 bg-[#1e2024] flex flex-col gap-1 font-mono text-[11px]">
         <div className="flex"><span className="w-32 text-gray-400">2025</span> <span className="liqui-link">Team Liquid Academy PH</span></div>
         <div className="flex"><span className="w-32 text-gray-400">2025 — 2026</span> <span className="liqui-link">Team Liquid ID</span></div>
         <div className="flex"><span className="w-32 text-gray-400">2026</span> <span className="liqui-link">Team Liquid Academy PH</span></div>
         <div className="flex"><span className="w-32 text-white font-bold">2026 — Present</span> <span className="liqui-link font-bold">Team Falcons PH</span></div>
      </div>

    </div>
  );
};

export default LiquiInfobox;
