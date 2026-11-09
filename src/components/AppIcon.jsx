import React from 'react';
import { motion } from 'framer-motion';

export default function AppIcon({ app, onClick, hideName = false }) {
  const Icon = app.icon;

  return (
    <motion.div 
      className="flex flex-col items-center justify-center gap-1 cursor-pointer w-full h-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick && onClick(app)}
      title={app.name}
    >
      <div 
        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
        style={{ 
          background: `linear-gradient(135deg, ${app.color}cc, ${app.color})`,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <Icon size={24} color="#ffffff" strokeWidth={2.5} />
      </div>
      {!hideName && (
        <span 
          className="text-xs font-medium tracking-wide drop-shadow-md text-white text-center truncate w-full px-1"
          style={{ textShadow: '0px 1px 3px rgba(0,0,0,0.8)' }}
        >
          {app.name}
        </span>
      )}
    </motion.div>
  );
}
