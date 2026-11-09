import { 
  Camera, 
  MessageSquare, 
  Globe, 
  Image as ImageIcon, 
  Settings, 
  Phone, 
  Mail, 
  Map, 
  Calendar, 
  Clock, 
  Music,
  Calculator,
  PlaySquare,
  FileText
} from 'lucide-react';

export const mockApps = [
  { id: 'app-phone', name: 'Phone', icon: Phone, color: '#34d399', isDock: true },
  { id: 'app-messages', name: 'Messages', icon: MessageSquare, color: '#3b82f6', isDock: true },
  { id: 'app-browser', name: 'Browser', icon: Globe, color: '#ef4444', isDock: true },
  { id: 'app-camera', name: 'Camera', icon: Camera, color: '#f59e0b', isDock: true },
  
  { id: 'app-gallery', name: 'Gallery', icon: ImageIcon, color: '#a855f7' },
  { id: 'app-settings', name: 'Settings', icon: Settings, color: '#6b7280' },
  { id: 'app-mail', name: 'Mail', icon: Mail, color: '#ef4444' },
  { id: 'app-maps', name: 'Maps', icon: Map, color: '#10b981' },
  { id: 'app-calendar', name: 'Calendar', icon: Calendar, color: '#3b82f6' },
  { id: 'app-clock', name: 'Clock', icon: Clock, color: '#f97316' },
  { id: 'app-music', name: 'Music', icon: Music, color: '#ec4899' },
  { id: 'app-calc', name: 'Calculator', icon: Calculator, color: '#8b5cf6' },
  { id: 'app-video', name: 'Videos', icon: PlaySquare, color: '#ef4444' },
  { id: 'app-notes', name: 'Notes', icon: FileText, color: '#eab308' },
];
