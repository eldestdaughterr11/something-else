import React from 'react';

const WikiInfobox = () => {
  return (
    <div className="w-[315px] flex-shrink-0 text-[0.875rem] border border-[#a2a9b1] bg-[#f8f9fa] float-right ml-4 mb-4 mt-2 p-1">
      {/* Header */}
      <div className="text-center font-bold text-[1.1em] mb-2 px-2 bg-[#f8f9fa]">
        President of the United States
      </div>

      {/* Seals and Flags */}
      <div className="w-full flex flex-col items-center justify-center mb-2">
        <div className="flex flex-col items-center mb-2">
          <div className="w-[120px] h-[120px] rounded-full border-4 border-[#1f3a7a] bg-[#eebb22] flex items-center justify-center text-center text-[#1f3a7a] font-bold text-xs p-2 relative">
            <div className="w-full h-full border border-double border-[#1f3a7a] rounded-full flex flex-col items-center justify-center">
              <span>E PLURIBUS</span>
              <span>UNUM</span>
            </div>
          </div>
          <a className="wiki-link text-[0.8em] mt-1">Presidential seal</a>
        </div>
        
        <div className="flex flex-col items-center mb-2">
          <div className="w-[140px] h-[90px] bg-[#1f3a7a] flex items-center justify-center text-white border border-[#a2a9b1] font-bold text-xs">
             Presidential Flag
          </div>
          <a className="wiki-link text-[0.8em] mt-1">Presidential flag</a>
        </div>
      </div>

      {/* Image of Incumbent */}
      <div className="w-full flex flex-col items-center justify-center mb-2 border-t border-[#a2a9b1] pt-2">
        <div className="p-0.5 bg-white mb-1">
           <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&q=80" alt="Van Ryan Navarez" className="w-[280px] h-auto object-cover" />
        </div>
        <div className="text-center">
          <div className="font-bold">Incumbent</div>
          <div className="font-bold wiki-link">Van Ryan Navarez</div>
          <div className="text-[0.8em]">since January 20, 2025</div>
        </div>
      </div>

      <table className="w-full text-left border-collapse text-[0.8em] mt-2 border-t border-[#a2a9b1]">
        <tbody>
          <tr>
            <td colSpan={2} className="text-center py-1">
              <span className="wiki-link">Executive branch of the U.S. government</span><br/>
              <span className="wiki-link">Executive Office of the President</span>
            </td>
          </tr>

          {/* Info Rows */}
          <tr className="align-top">
            <th className="pr-2 py-1 font-bold w-[90px]">Style</th>
            <td className="py-1">
              <span className="wiki-link">Mr. President</span> (informal)<br/>
              <span className="wiki-link">The Honorable</span> (formal)<br/>
              <span className="wiki-link">His Excellency</span> (diplomatic)
            </td>
          </tr>
          
          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Type</th>
            <td className="py-1">
              <span className="wiki-link">Head of state</span><br/>
              <span className="wiki-link">Head of government</span><br/>
              <span className="wiki-link">Commander-in-chief</span>
            </td>
          </tr>

          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Abbreviation</th>
            <td className="py-1">POTUS</td>
          </tr>

          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Member of</th>
            <td className="py-1">
              <span className="wiki-link">Federal Cabinet</span><br/>
              <span className="wiki-link">Domestic Policy Council</span><br/>
              <span className="wiki-link">National Economic Council</span><br/>
              <span className="wiki-link">National Security Council</span>
            </td>
          </tr>

          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Residence</th>
            <td className="py-1 wiki-link">White House</td>
          </tr>

          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Seat</th>
            <td className="py-1 wiki-link">Washington, D.C.</td>
          </tr>

          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Appointer</th>
            <td className="py-1">
               <span className="wiki-link">Electoral College</span> or via succession
            </td>
          </tr>
          
          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Term length</th>
            <td className="py-1">
               Four years<br/>
               <span className="text-[#54595d]">(renewable once)</span>
            </td>
          </tr>
          
          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Constituting<br/>instrument</th>
            <td className="py-1 wiki-link">
               Constitution of the United States (1789)
            </td>
          </tr>
          
          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Formation</th>
            <td className="py-1">
               March 4, 1789<br/>
               <span className="text-[#54595d]">(237 years ago)</span>
            </td>
          </tr>
          
          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">First holder</th>
            <td className="py-1 wiki-link">George Washington</td>
          </tr>
          
          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Succession</th>
            <td className="py-1 wiki-link">Line of succession</td>
          </tr>
          
          <tr className="align-top">
            <th className="pr-2 py-1 font-bold">Salary</th>
            <td className="py-1">$400,000 per year</td>
          </tr>
          
          <tr className="align-top border-b border-[#a2a9b1]">
            <th className="pr-2 py-1 font-bold">Website</th>
            <td className="py-1 wiki-link">whitehouse.gov</td>
          </tr>
        </tbody>
      </table>
      
      {/* Series template */}
      <div className="border border-[#a2a9b1] mt-2 text-center text-[0.85em] bg-[#f8f9fa]">
         <div className="bg-[#1f3a7a] text-white py-1">
            <div className="text-[10px]">This article is part of a series on the</div>
            <div className="font-bold text-base px-2 leading-tight">Politics of the<br/>United States</div>
         </div>
         <div className="py-2 flex justify-center bg-white">
            <div className="w-[80px] h-[80px] rounded-full border-2 border-[#eebb22] flex items-center justify-center">
               <span className="font-bold text-[#eebb22] text-xs">USA</span>
            </div>
         </div>
         <div className="bg-[#cc2222] text-white py-1 font-bold">
            Federal government
         </div>
      </div>
    </div>
  );
};

export default WikiInfobox;
