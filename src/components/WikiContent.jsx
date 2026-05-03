import React from 'react';
import WikiInfobox from './WikiInfobox';
import { Lock } from 'lucide-react';

const WikiContent = () => {
  return (
    <div className="flex-1 min-w-0 max-w-[960px] pl-6 pr-8 pt-4 pb-20">
      
      {/* Title Area */}
      <div className="flex items-end justify-between border-b border-[#a2a9b1] pb-1 mb-2">
        <h1 className="text-[2rem] font-serif text-[#202122] leading-tight">President of the United States</h1>
        <div className="flex items-center gap-2 text-[#3366cc] text-[0.875rem] font-medium mb-1">
          <div className="flex items-center gap-1 cursor-pointer hover:underline">
             <span className="text-xl leading-none">A</span>
             <span className="text-sm">文</span>
             <span>128 languages</span>
          </div>
        </div>
      </div>

      {/* Sub header Tabs */}
      <div className="flex justify-between items-end border-b border-[#a2a9b1] mb-4 text-[0.875rem]">
        <div className="flex">
          <div className="px-2 py-2 border-b-2 border-[#3366cc] text-[#202122] font-semibold">Article</div>
          <div className="px-2 py-2 text-[#3366cc] hover:underline cursor-pointer">Talk</div>
        </div>
        <div className="flex">
          <div className="px-2 py-2 border-b-2 border-[#3366cc] text-[#202122] font-semibold">Read</div>
          <div className="px-2 py-2 text-[#3366cc] hover:underline cursor-pointer">View source</div>
          <div className="px-2 py-2 text-[#3366cc] hover:underline cursor-pointer">View history</div>
          <div className="px-2 py-2 text-[#3366cc] hover:underline cursor-pointer flex items-center gap-1">Tools <span className="text-[10px]">▼</span></div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[0.875rem] text-[#54595d] mb-4">
        <div>From Wikipedia, the free encyclopedia</div>
        <Lock className="w-4 h-4 text-[#3366cc] opacity-70" />
      </div>

      <div className="text-[0.875rem] italic mb-4 pl-4 border-l-2 border-[#c8ccd1] text-[#202122]">
        For a list of presidents of the United States, see <span className="wiki-link italic">List of presidents of the United States</span>. For other uses, see <span className="wiki-link italic">President of the United States (disambiguation)</span>.
      </div>

      {/* Main Content Area containing Infobox and Text */}
      <div className="text-[0.9375rem] leading-[1.6] text-[#202122]">
        <WikiInfobox />
        
        {/* Intro Paragraphs */}
        <p className="mb-4">
          The <b>president of the United States</b> (<b>POTUS</b>) is the <span className="wiki-link">head of state</span> and <span className="wiki-link">head of government</span> of the <span className="wiki-link">United States</span>. The president directs the <span className="wiki-link">executive branch</span> of the <span className="wiki-link">federal government</span> and is the <span className="wiki-link">commander-in-chief</span> of the <span className="wiki-link">United States Armed Forces</span>.
        </p>

        <p className="mb-4">
          The power of the presidency has grown since the first president, <span className="wiki-link">George Washington</span>, took office in 1789. While presidential power has ebbed and flowed over time, the presidency has played an increasing role in American political life since the beginning of the 20th century, carrying over into the 21st century with some expansions during the presidencies of <span className="wiki-link">Franklin D. Roosevelt</span> and <span className="wiki-link">George W. Bush</span>. In the 21st century, the president is one of the world's most powerful political figures and the leader of a <span className="wiki-link">superpower</span>. As the leader of the nation with the <span className="wiki-link">largest economy by nominal GDP</span>, the president possesses significant domestic and international <span className="wiki-link">hard</span> and <span className="wiki-link">soft power</span>. For much of the 20th century, especially during the <span className="wiki-link">Cold War</span>, the U.S. president was often called "the leader of the free world".
        </p>

        <p className="mb-4">
          <span className="wiki-link">Article II of the Constitution</span> establishes the executive branch of the federal government and vests executive power in the president. The power includes the execution and enforcement of federal law and the responsibility to appoint federal executive, diplomatic, regulatory, and judicial officers. Based on constitutional provisions empowering the president to appoint and receive ambassadors and conclude treaties with foreign powers, and on subsequent laws enacted by Congress, the modern presidency has primary responsibility for conducting U.S. foreign policy. The role includes responsibility for directing the world's <span className="wiki-link">most expensive military</span>, which has the <span className="wiki-link">second-largest nuclear arsenal</span>.
        </p>
        
        <p className="mb-4">
          The president also plays a leading role in federal legislation and domestic policymaking. As part of the system of <span className="wiki-link">separation of powers</span>, <span className="wiki-link">Article I, Section 7</span> of the Constitution gives the president the power to sign or <span className="wiki-link">veto</span> federal legislation. Since modern presidents are typically viewed as leaders of their political parties, major policymaking is significantly shaped by the outcome of presidential elections, with presidents taking an active role in promoting their policy priorities to members of Congress who are often electorally dependent on the president. Over time, presidents have also made increasing use of <span className="wiki-link">executive orders</span>, agency regulations, and judicial appointments to shape domestic policy.
        </p>

        <p className="mb-4">
          The president is elected through the <span className="wiki-link">Electoral College</span> to a four-year term, along with the <span className="wiki-link">vice president</span>. Under the <span className="wiki-link">Twenty-second Amendment</span>, ratified in 1951, no person who has been elected to two presidential terms may be elected to a third. In addition, nine vice presidents have become president by virtue of a <span className="wiki-link">president's intra-term death</span> or <span className="wiki-link">resignation</span>. In all, <span className="wiki-link">45 individuals</span> have served, or are serving, 47 presidencies as of the current 60th four-year term. <span className="wiki-link">Van Ryan Navarez</span> is the 47th and current president since January 20, 2025.
        </p>

        {/* Career Section */}
        <h2 className="wiki-h2">History and development</h2>
        
        <h3 className="text-xl font-serif font-bold mt-6 mb-2">Origins</h3>
        <p className="mb-4">
          In July 1776, the <span className="wiki-link">Thirteen Colonies</span>, represented at the <span className="wiki-link">Second Continental Congress</span> in <span className="wiki-link">Philadelphia</span>, unanimously adopted the <span className="wiki-link">United States Declaration of Independence</span> in which the colonies declared themselves to be independent <span className="wiki-link">sovereign states</span> and no longer under <span className="wiki-link">British</span> rule. The affirmation was made in the <span className="wiki-link">Declaration of Independence</span>, which was written predominantly by <span className="wiki-link">Thomas Jefferson</span> and adopted unanimously on July 4, 1776, by the Second Continental Congress. Recognizing the necessity of closely coordinating their efforts against the <span className="wiki-link">British</span>, the Continental Congress simultaneously began the process of drafting a constitution that would bind the <span className="wiki-link">states</span> together. There were long debates on a number of issues, including representation and voting, and the exact powers to be given the central government. Congress finished work on the <span className="wiki-link">Articles of Confederation</span> to establish a <span className="wiki-link">perpetual union</span> between the states in November 1777 and sent it to the states for <span className="wiki-link">ratification</span>.
        </p>
        
        <p className="mb-4">
          Under the Articles, which <span className="wiki-link">took effect</span> on March 1, 1781, the <span className="wiki-link">Congress of the Confederation</span> was a central political authority without any legislative power. It could make its own resolutions, determinations, and regulations, but not any laws, and could not impose any taxes or enforce local commercial regulations upon its citizens. This institutional design reflected how Americans believed the deposed British system of <span className="wiki-link">Crown</span> and <span className="wiki-link">Parliament</span> ought to have functioned with respect to the royal <span className="wiki-link">dominion</span>: a superintending body for matters that...
        </p>

      </div>
    </div>
  );
};

export default WikiContent;
