import React, { useEffect } from 'react';
import LiquiHeader from './components/LiquiHeader';
import LiquiSidebar from './components/LiquiSidebar';
import LiquiContent from './components/LiquiContent';
import LiquiInfobox from './components/LiquiInfobox';

function App() {
  useEffect(() => {
    document.title = "VanTzy - Liquipedia Mobile Legends Wiki";
  }, []);

  return (
    <div className="min-h-screen bg-[#141517] text-[#c8ccd1] font-sans">
      <LiquiHeader />
      
      <div className="flex justify-center w-full mt-4 pb-12">
        <div className="w-full max-w-[1400px] flex px-4">
          <LiquiSidebar />
          
          <div className="flex-1 flex px-6 gap-6">
            <LiquiContent />
            <LiquiInfobox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
