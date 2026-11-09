import React from 'react';
import AppIcon from './AppIcon';
import { mockApps } from '../data/mockApps';

export default function Dock({ onOpenDrawer }) {
  const dockApps = mockApps.filter(app => app.isDock).slice(0, 4);

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md">
      <div 
        className="glass-panel rounded-3xl p-4 flex items-center justify-around shadow-2xl relative"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        {dockApps.map(app => (
          <div key={app.id} className="w-14 h-14">
            <AppIcon app={app} hideName />
          </div>
        ))}
        
        {/* Drawer Handle / Button */}
        <div 
          className="w-14 h-14 flex items-center justify-center cursor-pointer rounded-2xl transition-transform hover:scale-105 active:scale-95"
          onClick={onOpenDrawer}
          title="App Drawer"
        >
          <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shadow-inner backdrop-blur-md">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
