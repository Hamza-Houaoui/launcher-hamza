import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import Dock from './Dock';
import AppDrawer from './AppDrawer';

export default function Launcher() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #3b82f6 0%, #a855f7 50%, #f43f5e 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientBG 15s ease infinite'
      }}
    >
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      {/* Top Status Bar (Mock) */}
      <div className="absolute top-0 w-full h-8 flex justify-between items-center px-4 z-10 text-white font-medium text-sm drop-shadow-md">
        <span>10:24</span>
        <div className="flex gap-2 items-center">
          <span className="text-xs">5G</span>
          <div className="w-6 h-3 border border-white rounded-sm relative">
            <div className="absolute top-[1px] left-[1px] bottom-[1px] bg-white w-4 rounded-[1px]"></div>
          </div>
        </div>
      </div>

      <HomeScreen />
      <Dock onOpenDrawer={() => setIsDrawerOpen(true)} />
      <AppDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
