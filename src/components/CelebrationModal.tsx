import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Send, CheckCircle2, RotateCcw, Share2, Award, ZoomIn } from 'lucide-react';
import { REAL_COUPLE_PHOTOS } from './CouplePhotoSection';

interface CelebrationModalProps {
  onClose: () => void;
  onReset: () => void;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({ onClose, onReset }) => {
  const [copied, setCopied] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  useEffect(() => {
    // Launch fireworks and heart confetti bursts!
    const duration = 4.5 * 1000;
    const end = Date.now() + duration;

    // Golden & Maroon luxury colors for confetti
    const colors = ['#dfbe65', '#ffd778', '#fff3cc', '#931b3b', '#e11d48', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Extra center heart explosion
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 130,
        origin: { y: 0.5 },
        colors: colors,
      });
    }, 600);
  }, []);

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      "YES! A thousand times YES! 💍❤️ I love you so much and I can't wait to spend my entire life with you! Forever yours, Samavia."
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLoveNote = () => {
    const text = "YES! I will marry you! 💍❤️ Forever yours, Samavia.";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      {/* Celebration Main Card */}
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#2d0714] via-[#1e040c] to-[#120207] border-2 border-[#dfbe65] rounded-3xl p-5 sm:p-9 shadow-2xl box-gold-glow text-center my-6">
        
        {/* Floating golden sparkle stars */}
        <div className="absolute top-4 left-4 text-[#ffd778] text-2xl animate-spin" style={{ animationDuration: '8s' }}>✧</div>
        <div className="absolute top-4 right-4 text-[#ffd778] text-2xl animate-spin" style={{ animationDuration: '8s' }}>✧</div>

        {/* Animated Diamond Engagement Ring in Velvet Box */}
        <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#dfbe65]/25 rounded-full blur-xl animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#dfbe65] via-[#ffd778] to-[#931b3b] p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-[#1c030b] flex items-center justify-center">
              <span className="text-4xl select-none animate-bounce">💍</span>
            </div>
          </div>
        </div>

        {/* Big Celebration Headline */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#dfbe65]/20 border border-[#dfbe65]/40 text-[#ffd778] text-xs uppercase tracking-widest font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          She Said YES!
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd778] via-[#fff3cc] to-[#dfbe65] drop-shadow-md">
          WE ARE GETTING MARRIED!
        </h2>

        <p className="font-script text-2xl sm:text-4xl text-[#ffc857] mt-1 mb-5">
          Forever Yours, Samavia ❤️
        </p>

        {/* THE 2 REAL COUPLE PHOTOS (Faces Clearly Visible & Guaranteed Loading) */}
        <div className="mb-6 text-left">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs sm:text-sm font-semibold text-[#ffd778] uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#e11d48] fill-[#e11d48]" />
              Our Love Moments:
            </span>
            <span className="text-xs text-[#ebd28d]/80 font-sans">
              Click photo to enlarge
            </span>
          </div>

          {/* Exactly the 2 Photos in Side-by-Side Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REAL_COUPLE_PHOTOS.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxUrl(photo.url)}
                className="group relative rounded-xl overflow-hidden border-2 border-[#dfbe65]/50 hover:border-[#dfbe65] cursor-pointer transition-all duration-300 bg-[#160208] shadow-lg hover:scale-[1.02]"
              >
                {/* Image Container with high clarity for faces */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#0a0104] relative flex items-center justify-center">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75" />
                  
                  {/* Zoom Badge */}
                  <div className="absolute top-2 right-2 bg-black/70 border border-[#dfbe65]/60 rounded-full p-1 opacity-90 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5 text-[#ffd778]" />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <p className="text-xs sm:text-sm font-bold text-[#fef3c7] truncate drop-shadow-md">
                      {photo.title}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 bg-[#20050e] border-t border-[#dfbe65]/30 text-center">
                  <span className="text-xs text-[#dfbe65] font-sans font-medium">
                    Photo {index + 1} • Pure Eternal Love
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marriage Pledge Card */}
        <div className="bg-[#24050f]/90 border border-[#dfbe65]/40 rounded-2xl p-5 text-left mb-6 shadow-inner relative overflow-hidden">
          <div className="flex items-center gap-2 text-[#ffd778] font-serif-luxury font-semibold text-base sm:text-lg border-b border-[#dfbe65]/20 pb-2 mb-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfbe65]" />
            <span>Our Lifetime Sacred Bond</span>
          </div>

          <p className="font-garamond text-[#faecd1] text-base sm:text-lg leading-relaxed mb-3">
            “Today, Samavia said YES. My heart belongs to you, today, tomorrow, and through all of eternity. 
            I promise to honor, cherish, and love you more with every heartbeat.”
          </p>

          <div className="flex justify-between items-end pt-1 text-xs text-[#dfbe65]/80 font-sans">
            <div>
              <p className="font-semibold text-[#ffd778]">Couple:</p>
              <p className="text-[#ffeec2]">Together Forever with Samavia ❤️</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-[#ffd778]">Date:</p>
              <p>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={handleWhatsAppSend}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-600/40 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Tell Him on WhatsApp! 💬</span>
          </button>

          <button
            onClick={handleCopyLoveNote}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#dfbe65] hover:bg-[#ebd28d] text-[#19040a] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#dfbe65]/30 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Copy Love Message</span>
              </>
            )}
          </button>

          <button
            onClick={onReset}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#350715] hover:bg-[#4a0b20] text-[#ecd38d] border border-[#dfbe65]/40 text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Proposal</span>
          </button>
        </div>

      </div>

      {/* Lightbox for zooming any of the 2 photos */}
      {lightboxUrl && (
        <div
          onClick={() => setLightboxUrl(null)}
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[92vh] p-2 bg-[#25050f] border-2 border-[#dfbe65] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center">
            <img
              src={lightboxUrl}
              alt="Romantic kiss full display"
              className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <p className="text-center text-xs text-[#dfbe65] mt-2">
              Tap anywhere to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
