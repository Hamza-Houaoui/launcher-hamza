import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import AppIcon from './AppIcon';
import { mockApps } from '../data/mockApps';

export default function HomeScreen() {
  const homeApps = mockApps.filter(app => !app.isDock).slice(0, 8); // Just grab a few for home
  
  // Create a 4x6 grid layout
  const [layout, setLayout] = useState(
    homeApps.map((app, i) => ({
      i: app.id,
      x: i % 4,
      y: Math.floor(i / 4),
      w: 1,
      h: 1,
    }))
  );

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className="absolute inset-0 pt-12 pb-28 px-4 pointer-events-none">
      {/* 
        We use pointer-events-none on the container so swipe gestures can pass through to 
        the launcher wrapper (e.g. for opening drawer), but re-enable pointer-events for the grid.
      */}
      <div className="w-full h-full pointer-events-auto">
        <GridLayout
          className="layout h-full"
          layout={layout}
          cols={4}
          rowHeight={90}
          width={window.innerWidth - 32} // Subtracting padding
          onLayoutChange={onLayoutChange}
          isDraggable={true}
          isResizable={false}
          margin={[16, 16]}
          preventCollision={true}
          compactType={null} // Don't compact, leave gaps like a real launcher
        >
          {homeApps.map(app => (
            <div key={app.id} className="flex justify-center items-center">
              <AppIcon app={app} onClick={() => console.log('Clicked', app.name)} />
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
}
