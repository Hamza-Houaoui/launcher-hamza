import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppIcon from './AppIcon';
import { mockApps } from '../data/mockApps';
import { Search, X } from 'lucide-react';

export default function AppDrawer({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredApps = mockApps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{ 
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)'
          }}
        >
          {/* Header / Search bar */}
          <div className="pt-12 px-6 pb-4 flex items-center gap-4">
            <div className="flex-1 glass-panel rounded-full flex items-center px-4 py-3 bg-white/10">
              <Search size={20} className="text-white/60 mr-3" />
              <input 
                type="text" 
                placeholder="Search apps..." 
                className="bg-transparent border-none outline-none text-white w-full placeholder-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
            <button 
              onClick={onClose}
              className="p-3 rounded-full glass-panel flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
          </div>

          {/* App Grid */}
          <div className="flex-1 overflow-y-auto px-6 pb-12">
            <div className="grid grid-cols-4 gap-y-8 gap-x-4 mt-6">
              {filteredApps.map(app => (
                <div key={app.id} className="h-24">
                  <AppIcon app={app} onClick={() => {
                    console.log(`Opening ${app.name}`);
                    onClose();
                  }} />
                </div>
              ))}
            </div>
            
            {filteredApps.length === 0 && (
              <div className="mt-20 text-center text-white/50 flex flex-col items-center">
                <Search size={48} className="mb-4 opacity-50" />
                <p>No apps found</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
