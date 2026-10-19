import React, { useState, useRef } from 'react';
import { Heart, Sparkles, Image as ImageIcon, Upload, ZoomIn } from 'lucide-react';

interface CouplePhotoSectionProps {
  onPhotoClick?: () => void;
}

// Exactly the 2 requested romantic couple photos provided by user
export const REAL_COUPLE_PHOTOS = [
  {
    id: 'beach-wedding-kiss',
    title: 'Beach Romance Kiss',
    url: '/beach_wedding_kiss.jpg',
    caption: '“Two souls, one heartbeat. You are my forever and my whole world, Samavia.”',
    description: 'Pure romantic moment on the beach with faces clear and true.',
  },
  {
    id: 'bride-groom-kiss',
    title: 'Wedding Romance Kiss',
    url: '/bride_groom_kiss_beach.jpg',
    caption: '“From this day forward, every sunrise and sunset belongs to you.”',
    description: 'Romantic wedding kiss with faces clear and loving.',
  },
];

export const CouplePhotoSection: React.FC<CouplePhotoSectionProps> = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentPhoto = customPhotoUrl
    ? {
        id: 'custom',
        url: customPhotoUrl,
        caption: '“You & Me — Our Beautiful Real Story, Samavia.”',
        title: 'Our Personal Memory',
        description: 'Uploaded with all our love',
      }
    : REAL_COUPLE_PHOTOS[selectedPhotoIndex];

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-6">
      {/* Golden Ornate Frame Container */}
      <div className="relative group">
        {/* Ambient Outer Gold Halo Glow */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#dfbe65] via-[#ffd778] to-[#931b3b] rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

        {/* Velvet Maroon Card Base */}
        <div className="relative bg-[#1d040c] rounded-2xl border-2 border-[#dfbe65] p-3 sm:p-6 shadow-2xl overflow-hidden box-gold-glow">
          
          {/* Traditional Golden Corner Accents */}
          <div className="absolute top-2 left-2 text-[#dfbe65] pointer-events-none text-xl">✦</div>
          <div className="absolute top-2 right-2 text-[#dfbe65] pointer-events-none text-xl">✦</div>
          <div className="absolute bottom-2 left-2 text-[#dfbe65] pointer-events-none text-xl">✦</div>
          <div className="absolute bottom-2 right-2 text-[#dfbe65] pointer-events-none text-xl">✦</div>

          {/* Subtitle / Header ribbon */}
          <div className="flex items-center justify-center gap-2 mb-3 text-[#e6c875] text-xs sm:text-sm tracking-widest uppercase font-semibold">
            <Sparkles className="w-4 h-4 text-[#ffd778]" />
            <span>Our Endless Love & Passion</span>
            <Sparkles className="w-4 h-4 text-[#ffd778]" />
          </div>

          {/* Main Photo Frame - Clear face display */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="relative cursor-pointer overflow-hidden rounded-xl border border-[#dfbe65]/60 shadow-2xl group/img bg-[#0e0206] flex items-center justify-center min-h-[360px] sm:min-h-[480px] max-h-[580px]"
          >
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="w-full h-full max-h-[560px] object-contain sm:object-cover sm:object-[center_20%] transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
              loading="eager"
            />

            {/* Subtle romantic bottom gradient for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#150208]/90 via-transparent to-transparent pointer-events-none" />

            {/* Zoom Hint Button */}
            <div className="absolute top-3 right-3 bg-[#150308]/85 backdrop-blur-md border border-[#dfbe65]/70 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs text-[#ffd778] shadow-lg opacity-90 group-hover/img:opacity-100 transition-opacity">
              <ZoomIn className="w-3.5 h-3.5 text-[#ffd778]" />
              <span>Full View</span>
            </div>

            {/* Caption on Photo */}
            <div className="absolute bottom-3 left-4 right-4 text-center pointer-events-none">
              <p className="font-serif-luxury italic text-[#fdedc9] text-base sm:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {currentPhoto.caption}
              </p>
            </div>
          </div>

          {/* Photo Selector Bar (Strictly the 2 requested photos) */}
          <div className="mt-4 pt-3 border-t border-[#dfbe65]/30 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#ecd38d]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#c7a752] flex items-center gap-1 font-semibold text-xs">
                <ImageIcon className="w-3.5 h-3.5" /> Couple Photos:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {REAL_COUPLE_PHOTOS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setCustomPhotoUrl(null);
                      setSelectedPhotoIndex(idx);
                    }}
                    className={`px-3 py-1 rounded-md transition-all text-xs cursor-pointer ${
                      !customPhotoUrl && selectedPhotoIndex === idx
                        ? 'bg-[#dfbe65] text-[#19050b] font-bold shadow-md shadow-[#dfbe65]/30 border border-[#fff3cc]'
                        : 'bg-[#2b0712] text-[#ebd28d] hover:bg-[#3d0b1b] border border-[#dfbe65]/30'
                    }`}
                  >
                    Photo {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Option to Upload Another Personal Photo */}
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleCustomUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#380b18] hover:bg-[#4d0f22] border border-[#dfbe65]/60 text-[#ffd778] transition-all hover:scale-105 text-xs font-medium cursor-pointer"
                title="Upload custom photo"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Custom Photo</span>
              </button>
              {customPhotoUrl && (
                <button
                  onClick={() => setCustomPhotoUrl(null)}
                  className="text-xs text-[#f4a0b5] hover:underline cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Full Clarity */}
      {isLightboxOpen && (
        <div 
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[92vh] p-2 bg-[#25050f] border-2 border-[#dfbe65] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <p className="text-center font-serif-luxury text-[#fceec9] text-base sm:text-lg mt-3 mb-1 italic px-4">
              {currentPhoto.caption}
            </p>
            <p className="text-center text-xs text-[#dfbe65]/80">Tap anywhere to close</p>
          </div>
        </div>
      )}
    </section>
  );
};
