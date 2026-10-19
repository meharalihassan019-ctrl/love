import React, { useMemo } from 'react';

interface StarParticle {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
}

export const RomanticBackground: React.FC = () => {
  // Generate random floating golden particles
  const stars: StarParticle[] = useMemo(() => {
    return Array.from({ length: 32 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1.5,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 6 + 4}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Maroon Rich Velvet Vignette Background */}
      <div 
        className="absolute inset-0 bg-radial-[circle_at_50%_20%] from-[#2f0613] via-[#190309] to-[#0c0104]"
      />

      {/* Warm Golden Ambient Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[450px] h-[450px] bg-[#931b3b]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[550px] h-[550px] bg-[#c89f38]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Pattern Grid or Starlight */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-[#fde68a]"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `pulse ${star.duration} infinite ease-in-out ${star.delay}`,
            boxShadow: '0 0 8px rgba(253, 230, 138, 0.8)',
          }}
        />
      ))}

      {/* Romantic floating hearts/petals */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-heart text-[#dfbe65]/20 select-none text-xl md:text-2xl"
            style={{
              left: `${15 + i * 16}%`,
              bottom: '-50px',
              animationDelay: `${i * 2.3}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          >
            {i % 2 === 0 ? '♥' : '🌸'}
          </div>
        ))}
      </div>
    </div>
  );
};
