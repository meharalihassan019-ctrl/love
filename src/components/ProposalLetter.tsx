import React, { useState } from 'react';
import { Heart, Sparkles, Feather, Flame, ShieldCheck, Smile, Infinity as InfinityIcon } from 'lucide-react';

export const ProposalLetter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'letter' | 'promises' | 'shayari'>('letter');

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-10">
      {/* Decorative Golden Divider */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-[#dfbe65] to-transparent" />
        <Heart className="w-5 h-5 text-[#dfbe65] fill-[#dfbe65]/40 animate-pulse" />
        <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-[#dfbe65] to-transparent" />
      </div>

      {/* Main Love Letter Container */}
      <div className="relative bg-gradient-to-b from-[#240610] via-[#1c040c] to-[#250611] rounded-3xl border border-[#dfbe65]/40 p-6 sm:p-10 shadow-2xl box-gold-glow">
        
        {/* Soft Golden Corner Decors */}
        <div className="absolute top-4 left-4 text-[#dfbe65]/40">❦</div>
        <div className="absolute top-4 right-4 text-[#dfbe65]/40">❧</div>
        <div className="absolute bottom-4 left-4 text-[#dfbe65]/40">❧</div>
        <div className="absolute bottom-4 right-4 text-[#dfbe65]/40">❦</div>

        {/* Navigation Tabs to Read Different Expressions */}
        <div className="flex justify-center mb-8 gap-2 border-b border-[#dfbe65]/20 pb-4 flex-wrap">
          <button
            onClick={() => setActiveTab('letter')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'letter'
                ? 'bg-[#dfbe65] text-[#19050b] font-bold shadow-lg shadow-[#dfbe65]/25'
                : 'text-[#e6c875] hover:text-[#fff0c2] hover:bg-[#3d0b1a]/50'
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>The Proposal Letter</span>
          </button>
          
          <button
            onClick={() => setActiveTab('promises')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'promises'
                ? 'bg-[#dfbe65] text-[#19050b] font-bold shadow-lg shadow-[#dfbe65]/25'
                : 'text-[#e6c875] hover:text-[#fff0c2] hover:bg-[#3d0b1a]/50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>My 4 Sacred Vows</span>
          </button>

          <button
            onClick={() => setActiveTab('shayari')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'shayari'
                ? 'bg-[#dfbe65] text-[#19050b] font-bold shadow-lg shadow-[#dfbe65]/25'
                : 'text-[#e6c875] hover:text-[#fff0c2] hover:bg-[#3d0b1a]/50'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Dil Ki Shayari</span>
          </button>
        </div>

        {/* Tab 1: Deep Romantic Proposal Letter */}
        {activeTab === 'letter' && (
          <div className="space-y-6 text-[#fbf1db] font-garamond text-lg sm:text-xl leading-relaxed text-left">
            <div className="border-b border-[#dfbe65]/20 pb-4">
              <h3 className="font-script text-3xl sm:text-4xl text-[#ffd778]">
                My Dearest Samavia,
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#d8b056] mt-1 font-sans">
                The Queen of My Heart & Soul
              </p>
            </div>

            <p>
              Before you came into my life, the world was just passing days and routine hours. 
              The day you walked into my world, everything changed. Your laughter became the sweetest melody 
              I had ever heard, your eyes became the mirror of my peace, and your presence turned ordinary moments into pure magic.
            </p>

            <p>
              I have loved you in the quiet moments when nobody was watching, in every silent prayer I made, 
              and in every dream where I pictured the future. With you, I am my truest self. You understand my unspoken 
              thoughts, you soften my hardest days, and your kindness makes me want to become the best man in this universe for you.
            </p>

            <p className="bg-[#2d0714]/80 border-l-4 border-[#dfbe65] p-4 rounded-r-xl italic text-[#ffeec2]">
              “I realized that home is not a place on a map. Home is being wrapped in your arms, 
              looking into your gentle eyes, and knowing that no matter what storms rage outside, I am safe with you.”
            </p>

            <p>
              A boy proposes when he wants to spend his youth with you. 
              A man proposes when he wants to spend his entire life, every silver hair, every wrinkled smile, 
              and every single breath standing proudly by your side through all seasons of life.
            </p>

            <p className="font-semibold text-[#fde49e]">
              I promise to honor your dreams, to wipe your tears before they fall, to celebrate your victories as my own, 
              and to love you more tomorrow than I love you today.
            </p>

            <div className="pt-4 text-right">
              <p className="font-script text-2xl sm:text-3xl text-[#ffd778]">
                Forever and completely yours,
              </p>
              <p className="text-xs text-[#dfbe65]/80 font-sans tracking-wider uppercase mt-1">
                Your Loving Husband-To-Be
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: 4 Sacred Vows / Promises */}
        {activeTab === 'promises' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#2a0713]/70 border border-[#dfbe65]/30 rounded-2xl p-5 hover:border-[#dfbe65] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#dfbe65]/20 flex items-center justify-center mb-3 text-[#ffd778]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-[#ffe6a3] font-semibold text-lg mb-1">
                1. Your Safe Sanctuary
              </h4>
              <p className="text-[#ebd3a0] text-sm leading-relaxed">
                Whenever life feels overwhelming or tiring, my arms will always be your refuge. 
                You will never have to face any storm alone; I will shield you with everything I have.
              </p>
            </div>

            <div className="bg-[#2a0713]/70 border border-[#dfbe65]/30 rounded-2xl p-5 hover:border-[#dfbe65] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#dfbe65]/20 flex items-center justify-center mb-3 text-[#ffd778]">
                <Smile className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-[#ffe6a3] font-semibold text-lg mb-1">
                2. Laughter & Endless Warmth
              </h4>
              <p className="text-[#ebd3a0] text-sm leading-relaxed">
                I promise to keep that beautiful smile glowing on your face. 
                To bring you warmth, to share quiet evening teas, to tell silly jokes when you are tired, and always celebrate you.
              </p>
            </div>

            <div className="bg-[#2a0713]/70 border border-[#dfbe65]/30 rounded-2xl p-5 hover:border-[#dfbe65] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#dfbe65]/20 flex items-center justify-center mb-3 text-[#ffd778]">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-[#ffe6a3] font-semibold text-lg mb-1">
                3. Pure Respect & Devotion
              </h4>
              <p className="text-[#ebd3a0] text-sm leading-relaxed">
                To respect your mind, your thoughts, and your independence. 
                To always listen to your heart with patience and treat you as the precious queen you are.
              </p>
            </div>

            <div className="bg-[#2a0713]/70 border border-[#dfbe65]/30 rounded-2xl p-5 hover:border-[#dfbe65] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#dfbe65]/20 flex items-center justify-center mb-3 text-[#ffd778]">
                <InfinityIcon className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-[#ffe6a3] font-semibold text-lg mb-1">
                4. Growing Old Hand-in-Hand
              </h4>
              <p className="text-[#ebd3a0] text-sm leading-relaxed">
                Through youth and old age, in health and sickness, until our last breaths. 
                I promise that my love for you will grow deeper and richer with every sunrise.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Heartfelt Shayari & Urdu Poetry */}
        {activeTab === 'shayari' && (
          <div className="space-y-6 text-center py-4">
            <div className="p-6 bg-[#2d0714] border border-[#dfbe65]/40 rounded-2xl">
              <p className="font-serif-luxury text-xl sm:text-2xl text-[#ffd778] italic mb-3">
                “تیرے آنے سے زندگی کو اک بہار مل گئی،<br />
                جس کی طلب تھی دل کو، وہ پیار مل گیا۔<br />
                اب ہر دعا میں بس تیرا ہی نام آتا ہے،<br />
                تُو جو ملی تو لگا جیسے سارا سنسار مل گیا۔”
              </p>
              <div className="h-[1px] w-24 bg-[#dfbe65]/40 mx-auto my-4" />
              <p className="text-[#ecd38d] font-garamond text-base sm:text-lg">
                “Tere aane se meri har subah roshan ho gayi Samavia...<br />
                Tujhe paakar laga jaise khuda ne meri har dua sun li ho.”
              </p>
            </div>

            <div className="p-5 bg-[#250510] border border-[#dfbe65]/20 rounded-xl text-[#f5dfb0] font-garamond text-lg">
              <p className="italic">
                “I looked at you in thousands of ways and loved you in each.<br />
                There has never been anyone else, and there will never be anyone after you.”
              </p>
            </div>
          </div>
        )}

        {/* Grand Proposal Question Prompt */}
        <div className="mt-10 pt-8 border-t border-[#dfbe65]/30 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#390b1c] border border-[#dfbe65]/50 text-[#ffd778] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd778]" />
            The Question of a Lifetime
            <Sparkles className="w-3.5 h-3.5 text-[#ffd778]" />
          </div>

          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#fff3cc] font-bold tracking-wide drop-shadow-lg">
            Samavia, Will You Marry Me?
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#ffd778] mt-2">
            And make me the happiest man on this earth?
          </p>
        </div>

      </div>
    </section>
  );
};
