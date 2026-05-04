import React from 'react';

const LiquiContent = () => {
  return (
    <div className="flex-1 min-w-0 pb-20">
      {/* Title */}
      <div className="border-b border-[#3b3d41] pb-2 mb-4">
        <h1 className="text-3xl font-serif text-white tracking-wide">VanTzy</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-4 text-[13px]">
        <div className="px-3 py-1 bg-[#1a3b68] text-white rounded-t-sm border border-b-0 border-[#2b2d31]">Overview</div>
        <div className="px-3 py-1 bg-[#212327] text-[#5a9cd6] hover:bg-[#2a2d32] cursor-pointer rounded-t-sm border border-b-0 border-[#2b2d31]">Results</div>
      </div>

      {/* Upcoming Matches Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          Upcoming Matches 
          <span className="text-[11px] text-[#5a9cd6] font-normal cursor-pointer hover:underline">[edit]</span>
        </h2>
        <div className="flex items-center gap-2 mb-3 text-[13px]">
          <div className="w-8 h-4 bg-[#5a9cd6] rounded-full relative cursor-pointer">
            <div className="absolute right-1 top-0.5 w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span>Show countdown</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[1,2,3,4].map((i) => (
            <div key={i} className="liqui-bg-panel liqui-border rounded-sm p-2 text-[12px]">
              <div className="flex justify-between text-gray-400 border-b border-[#3b3d41] pb-1 mb-2">
                <span>May {i + 1} - 14:00 SST</span>
                <span>1w {i}d</span>
              </div>
              <div className="text-gray-400 text-[10px] mb-2 truncate">MPL Philippines Season 1... - Day {i}</div>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-1"><span className="w-4 h-4 bg-blue-800 inline-block"></span> FCPH</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1"><span className="w-4 h-4 bg-orange-600 inline-block"></span> FLCP</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro Text */}
      <div className="text-[14px] leading-relaxed mb-6">
        Van <b>"VanTzy"</b> Navarez (born August 11, 2003) is a <span className="liqui-link">Filipino</span> player who is currently playing as a Jungler for <span className="liqui-link font-bold text-white">Team Falcons PH</span>.<br/><br/>
        Following his dominant victory at the <span className="liqui-link">MPL ASEAN Champions Cup 2026</span>, he is widely recognized as the number one top-tier Jungler in the world. <sup className="liqui-link">[1]</sup>
      </div>

      {/* Trivia Section */}
      <div className="mb-6">
        <div className="border-b border-[#3b3d41] pb-1 mb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Trivia 
            <span className="text-[11px] text-[#5a9cd6] font-normal cursor-pointer hover:underline">[edit]</span>
          </h2>
        </div>
        <ul className="list-disc pl-6 text-[14px] space-y-2">
          <li>Holds the historic record as the first-ever player to achieve a flawless <b>16/0/3</b> KDA on <span className="liqui-link">Fanny</span> and a dominant <b>20/1/8</b> KDA on <span className="liqui-link">Suyou</span> in <span className="liqui-link">MPL Philippines Season 17</span>.</li>
          <li>Maintained an unprecedented <b>100% winrate</b> using his signature hero <span className="liqui-link">Lancelot</span> throughout the entirety of the <span className="liqui-link">2026 MPL ASEAN Champions Cup</span>.</li>
          <li>Often referred to as <b>"The New Sky GOAT"</b> due to his aggressive playstyle and unparalleled mechanical mastery of high-difficulty jungle heroes.</li>
          <li>Frequently compared to the legendary <span className="liqui-link">KarlTzy</span> because of their strikingly similar, highly mechanical playstyles and overall mastery of the jungle role.</li>
          <li>Known for his intense training regimen, sometimes practicing mechanical combinations in custom games for over 12 hours straight before major grand finals.</li>
          <li>His signature move, the "VanTzy Cable," is a famous <span className="liqui-link">Fanny</span> advanced multi-cable maneuvering technique known for its incredibly accurate placements and perfect timing with his cables, which has been studied and replicated by aspiring junglers worldwide.</li>
        </ul>
      </div>

      {/* Statistics Section */}
      <div className="mb-6">
        <div className="border-b border-[#3b3d41] pb-1 mb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Statistics 
            <span className="text-[11px] text-[#5a9cd6] font-normal cursor-pointer hover:underline">[edit]</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1 border-l-2 border-[#1a3b68]">Player Stats</h3>
            <ul className="list-disc pl-6 text-[14px] space-y-2 text-gray-300">
              <li>Had the most kills in <span className="liqui-link">MPL Philippines Season 17</span> (<b>254</b>).</li>
              <li>Recorded the second highest KDA (<b>9.85</b>), just behind <span className="liqui-link">Teddy</span> (10.15) in <span className="liqui-link">MPL Philippines Season 17</span>.</li>
              <li>Achieved a career-high <b>Maniac</b> using <span className="liqui-link">Suyou</span> against Team Liquid PH.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1 border-l-2 border-[#1a3b68]">Recent Match Performance</h3>
            <div className="space-y-2">
              {[
                { hero: 'Suyou', img: '/Suyou.webp', kda: '8/0/2', vs: 'Team Liquid PH', highlight: 'MANIAC', color: 'text-purple-400' },
                { hero: 'Lancelot', img: '/Lancelot.webp', kda: '3/0/6', vs: 'ONIC PH' },
                { hero: 'Fanny', img: '/Fanny.webp', kda: '16/0/3', vs: 'Aurora PH' },
                { hero: 'Hayabusa', img: '/Hayabusa.webp', kda: '7/2/5', vs: 'Omega Esports' },
                { hero: 'Fredrinn', img: '/Fredrinn.webp', kda: '2/1/12', vs: 'Omega Esports' },
                { hero: 'Suyou', img: '/Suyou.webp', kda: '20/1/8', vs: 'Twisted Minds' }
              ].map((match, idx) => (
                <div key={idx} className="flex items-center justify-between bg-[#1e2024] p-2 rounded border border-[#2b2d31] hover:bg-[#2a2d32] transition-colors">
                  <div className="flex items-center gap-2">
                    <img src={match.img} alt={match.hero} className="w-8 h-8 rounded-sm object-cover border border-[#3b3d41]" />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-white">{match.hero}</span>
                      {match.highlight && <span className={`text-[9px] font-black tracking-tighter ${match.color}`}>{match.highlight}</span>}
                    </div>
                  </div>
                  <div className="text-[12px] font-mono font-bold text-[#5a9cd6]">{match.kda}</div>
                  <div className="text-[10px] text-gray-500">vs <span className="text-gray-300 font-semibold">{match.vs}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-6">
        <div className="border-b border-[#3b3d41] pb-1 mb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Achievements 
            <span className="text-[11px] text-[#5a9cd6] font-normal cursor-pointer hover:underline">[edit]</span>
          </h2>
        </div>
        
        <div className="overflow-x-auto liqui-border rounded-sm">
          <table className="w-full text-[13px] text-left border-collapse">
            <thead>
              <tr className="bg-[#1a3b68] text-white">
                <th className="p-2 border-r border-[#2b2d31]">Date</th>
                <th className="p-2 border-r border-[#2b2d31]">Place</th>
                <th className="p-2 border-r border-[#2b2d31]">Tier</th>
                <th className="p-2 border-r border-[#2b2d31]">Tournament</th>
                <th className="p-2 border-r border-[#2b2d31]">Team</th>
                <th className="p-2 border-r border-[#2b2d31]">Result</th>
                <th className="p-2">Prize</th>
              </tr>
            </thead>
            <tbody className="liqui-bg-panel text-gray-300">
              <tr className="border-t border-[#2b2d31] hover:bg-[#2a2d32]">
                <td className="p-2 border-r border-[#2b2d31]">2026-01-15</td>
                <td className="p-2 border-r border-[#2b2d31] font-bold text-[#ffd700] bg-[#ffd700]/10">1st</td>
                <td className="p-2 border-r border-[#2b2d31]">S-Tier</td>
                <td className="p-2 border-r border-[#2b2d31] liqui-link text-white">MPL ASEAN Champions Cup</td>
                <td className="p-2 border-r border-[#2b2d31]">TLID</td>
                <td className="p-2 border-r border-[#2b2d31] text-center">4 : 1</td>
                <td className="p-2 text-right font-mono">$100,000</td>
              </tr>
              <tr className="border-t border-[#2b2d31] hover:bg-[#2a2d32]">
                <td className="p-2 border-r border-[#2b2d31]">2025-12-23</td>
                <td className="p-2 border-r border-[#2b2d31] font-bold text-[#ffd700] bg-[#ffd700]/10">1st</td>
                <td className="p-2 border-r border-[#2b2d31]">S-Tier</td>
                <td className="p-2 border-r border-[#2b2d31] liqui-link text-white">Games of the Future 2025</td>
                <td className="p-2 border-r border-[#2b2d31]">TLID</td>
                <td className="p-2 border-r border-[#2b2d31] text-center">3 : 0</td>
                <td className="p-2 text-right font-mono">$1,000,000</td>
              </tr>
              <tr className="border-t border-[#2b2d31] hover:bg-[#2a2d32]">
                <td className="p-2 border-r border-[#2b2d31]">2025-09-07</td>
                <td className="p-2 border-r border-[#2b2d31] font-bold text-[#ffd700] bg-[#ffd700]/10">1st</td>
                <td className="p-2 border-r border-[#2b2d31]">A-Tier</td>
                <td className="p-2 border-r border-[#2b2d31] liqui-link text-white">APAC Predator MLBB Cup 2025</td>
                <td className="p-2 border-r border-[#2b2d31]">TLID</td>
                <td className="p-2 border-r border-[#2b2d31] text-center">3 : 2</td>
                <td className="p-2 text-right font-mono">$65,000</td>
              </tr>
              <tr className="border-t border-[#2b2d31] hover:bg-[#2a2d32]">
                <td className="p-2 border-r border-[#2b2d31]">2025-05-18</td>
                <td className="p-2 border-r border-[#2b2d31] font-bold text-[#ffd700] bg-[#ffd700]/10">1st</td>
                <td className="p-2 border-r border-[#2b2d31]">B-Tier</td>
                <td className="p-2 border-r border-[#2b2d31] liqui-link text-white">MDL Philippines Season 5</td>
                <td className="p-2 border-r border-[#2b2d31]">TLAC</td>
                <td className="p-2 border-r border-[#2b2d31] text-center">4 : 0</td>
                <td className="p-2 text-right font-mono">$20,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LiquiContent;
