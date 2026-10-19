import React, { useState } from 'react';
import { Heart, Music, VolumeX, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export const Header: React.FC = () => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleMusic = () => {
    const isPlaying = romanticAudio.toggleMusic();
    setIsPlayingMusic(isPlaying);
  };

  return (
    <header className="relative w-full pt-8 pb-4 px-4 text-center z-10">
      {/* Top Floating Music Controller */}
      <div className="max-w-4xl mx-auto flex justify-end mb-4">
        <button
          onClick={toggleMusic}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 border transition-all cursor-pointer backdrop-blur-md ${
            isPlayingMusic
              ? 'bg-[#dfbe65] text-[#19040a] border-[#fff3cc] shadow-md shadow-[#dfbe65]/30'
              : 'bg-[#290712]/80 text-[#ebd28d] border-[#dfbe65]/40 hover:bg-[#3d0b1b]'
          }`}
          title="Toggle soft romantic melody"
        >
          {isPlayingMusic ? (
            <>
              <Music className="w-3.5 h-3.5 animate-bounce" />
              <span>Playing Romantic Melody 🎶</span>
            </>
          ) : (
            <>
              <Music className="w-3.5 h-3.5" />
              <span>Play Romantic Music 🎵</span>
            </>
          )}
        </button>
      </div>

      {/* Main Title Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#360917]/90 border border-[#dfbe65]/50 text-[#ffd778] text-xs uppercase tracking-widest font-semibold mb-4 shadow-lg">
        <Sparkles className="w-3.5 h-3.5 text-[#ffd778]" />
        <span>A Sacred Love Declaration</span>
        <Sparkles className="w-3.5 h-3.5 text-[#ffd778]" />
      </div>

      {/* The Requested Glowing Header: "I Love You Samavia" */}
      <div className="relative inline-block my-2">
        {/* Soft Golden Backlight Halo */}
        <div className="absolute inset-0 bg-[#ffd778]/20 blur-2xl rounded-full pointer-events-none" />

        <h1 className="relative font-script text-5xl sm:text-7xl md:text-8xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8a3] via-[#ffcf5c] to-[#dfbe65] drop-shadow-[0_5px_15px_rgba(223,190,101,0.4)] tracking-wide">
          I Love You Samavia
        </h1>
      </div>

      {/* Romantic Golden Heart Icon with Beating Animation */}
      <div className="flex items-center justify-center gap-3 mt-1 mb-2">
        <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#dfbe65]" />
        <div className="relative">
          <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#dfbe65] fill-[#dfbe65] animate-pulse" />
          <span className="absolute -inset-1 rounded-full bg-[#dfbe65]/30 blur-sm pointer-events-none" />
        </div>
        <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#dfbe65]" />
      </div>

      {/* Subtitle */}
      <p className="font-serif-luxury text-base sm:text-xl text-[#f3dec0] max-w-xl mx-auto italic font-light tracking-wide px-4">
        “My past, my present, and the forever I have always prayed for.”
      </p>
    </header>
  );
};
