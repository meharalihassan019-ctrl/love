import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-8 text-center text-xs text-[#dfbe65]/70 border-t border-[#dfbe65]/20 mt-12 z-10">
      <div className="flex items-center justify-center gap-1.5 text-sm text-[#f5e1a4] mb-1">
        <span>Written with all my heart for</span>
        <strong className="text-[#ffd778] font-serif-luxury tracking-wide">Samavia</strong>
        <Heart className="w-4 h-4 text-[#dfbe65] fill-[#dfbe65] inline ml-1" />
      </div>
      <p className="text-[11px] text-[#ebd28d]/60 font-sans">
        Dark Maroon & Royal Gold Proposal • Forever & Always
      </p>
    </footer>
  );
};
