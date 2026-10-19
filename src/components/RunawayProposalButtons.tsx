import React, { useState, useRef, useEffect } from 'react';
import { Heart, Sparkles, Smile, ShieldAlert } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface RunawayProposalButtonsProps {
  onAccept: () => void;
}

const NO_BUTTON_TEXTS = [
  'No',
  'No? Are you sure? 🥺',
  'Wrong button, jaan! 😂',
  'Oops, too slow! 💨',
  'Try the golden YES button! 😉',
  'System Error: "No" not permitted! 🚫',
  'You can’t escape my love, Samavia! 💕',
  'Did your finger slip? 🤭',
  'Nice try, sweetheart! Look at YES 👉',
  'Only YES is meant for us! 💍',
];

export const RunawayProposalButtons: React.FC<RunawayProposalButtonsProps> = ({ onAccept }) => {
  const [dodgeCount, setDodgeCount] = useState(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDodgeActive, setIsDodgeActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Growth factor for YES button: scales up slightly on every dodge attempt!
  const yesScale = Math.min(1 + dodgeCount * 0.08, 1.6);

  const moveNoButton = () => {
    romanticAudio.playDodgeSound();
    setDodgeCount((prev) => prev + 1);
    setIsDodgeActive(true);

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Calculate boundary within container (or relative viewport)
    const padding = 20;
    const buttonWidth = 160;
    const buttonHeight = 60;

    const maxX = Math.max(rect.width - buttonWidth - padding, 40);
    const maxY = Math.max(rect.height - buttonHeight - padding, 40);

    const randomX = Math.floor(Math.random() * maxX) + padding;
    const randomY = Math.floor(Math.random() * maxY) + padding;

    setNoPosition({ x: randomX, y: randomY });
  };

  const currentNoText = NO_BUTTON_TEXTS[dodgeCount % NO_BUTTON_TEXTS.length];

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-8 mb-12">
      <div 
        ref={containerRef}
        className="relative bg-gradient-to-b from-[#22050e] to-[#150308] border-2 border-[#dfbe65]/50 rounded-3xl p-6 sm:p-10 shadow-2xl min-h-[320px] sm:min-h-[350px] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Subtle decorative glowing badge */}
        <div className="text-center mb-6 z-10 pointer-events-none">
          <span className="text-[#ffd778] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#ffd778]" />
            Your Answer to My Heart
            <Sparkles className="w-4 h-4 text-[#ffd778]" />
          </span>
          <p className="font-serif-luxury text-xl sm:text-2xl text-[#f7e7ce] mt-2 font-medium">
            Choose with all your heart, Samavia...
          </p>
          {dodgeCount > 0 && (
            <p className="text-xs sm:text-sm text-[#dfbe65] mt-1 font-script text-xl italic animate-bounce">
              {dodgeCount >= 3 ? "Destiny has already chosen YES! 💍✨" : "I know you want to press YES! 🥰"}
            </p>
          )}
        </div>

        {/* Buttons Playground Area */}
        <div className="relative w-full flex-1 flex items-center justify-center gap-6 sm:gap-10 min-h-[160px]">
          
          {/* YES BUTTON - Always Prominent & Glorious */}
          <div className="z-10 flex flex-col items-center">
            <button
              onClick={() => {
                romanticAudio.playCelebrationChimes();
                onAccept();
              }}
              style={{
                transform: `scale(${yesScale})`,
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              className="group relative cursor-pointer px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-full bg-gradient-to-r from-[#ffd778] via-[#f5cb5c] to-[#dfbe65] text-[#19040a] font-bold text-lg sm:text-2xl shadow-xl shadow-[#dfbe65]/40 hover:shadow-2xl hover:shadow-[#dfbe65]/70 active:scale-95 transition-all flex items-center gap-3 border-2 border-[#fff3cc]"
            >
              {/* Pulsing glow ring */}
              <span className="absolute -inset-1 rounded-full bg-[#dfbe65] opacity-50 blur-sm group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />

              <Heart className="w-6 h-6 text-[#931b3b] fill-[#931b3b] group-hover:scale-125 transition-transform" />
              <span className="tracking-wide">YES! I Will Marry You! 💍</span>
            </button>
            <span className="text-[11px] text-[#ebd28d] mt-2 font-sans tracking-wider opacity-80">
              (The only true choice ❤️)
            </span>
          </div>

          {/* NO BUTTON - The Runaway Escape Button */}
          {!isDodgeActive ? (
            // Initial position side-by-side with YES
            <div className="z-10">
              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                onTouchStart={moveNoButton}
                className="cursor-pointer px-6 sm:px-8 py-3 rounded-full bg-[#360917] hover:bg-[#4d0c20] text-[#c9a061] border border-[#dfbe65]/40 text-base sm:text-lg font-medium transition-all shadow-md select-none"
              >
                No
              </button>
            </div>
          ) : (
            // Escaped teleporting position
            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              onTouchStart={moveNoButton}
              style={{
                position: 'absolute',
                left: noPosition ? `${noPosition.x}px` : 'auto',
                top: noPosition ? `${noPosition.y}px` : 'auto',
                transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                zIndex: 20,
              }}
              className="cursor-pointer px-4 sm:px-6 py-2 rounded-full bg-[#3d091a] hover:bg-[#570d25] text-[#e890a8] border border-[#e890a8]/40 text-xs sm:text-sm font-semibold shadow-lg shadow-black/60 select-none animate-pulse whitespace-nowrap"
            >
              {currentNoText}
            </button>
          )}

        </div>

        {/* Counter of escape attempts */}
        {dodgeCount > 0 && (
          <div className="mt-4 text-center z-10">
            <span className="text-[11px] text-[#dfbe65]/70 bg-[#25050f] px-3 py-1 rounded-full border border-[#dfbe65]/20">
              Playful escape attempts: <strong className="text-[#ffd778]">{dodgeCount}</strong> times. But love always wins!
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
