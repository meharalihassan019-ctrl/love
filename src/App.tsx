/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RomanticBackground } from './components/RomanticBackground';
import { Header } from './components/Header';
import { CouplePhotoSection } from './components/CouplePhotoSection';
import { ProposalLetter } from './components/ProposalLetter';
import { RunawayProposalButtons } from './components/RunawayProposalButtons';
import { CelebrationModal } from './components/CelebrationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleAcceptProposal = () => {
    setHasAccepted(true);
  };

  const handleResetProposal = () => {
    setHasAccepted(false);
  };

  return (
    <div className="relative min-h-screen bg-[#140207] text-[#f7e7ce] flex flex-col justify-between selection:bg-[#dfbe65] selection:text-[#19040a]">
      {/* Ambient Animated Romantic Star & Petal Background */}
      <RomanticBackground />

      {/* Main Proposal Page Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center w-full">
        {/* 1. Header with "I Love You Samavia" */}
        <Header />

        {/* 2. Real Couple Kissing Photo in Ornate Gold & Maroon Frame */}
        <CouplePhotoSection />

        {/* 3. Deep Heartfelt Proposal Letter & Vows */}
        <ProposalLetter />

        {/* 4. Interactive Proposal Buttons (Playful Runaway NO & Glowing YES) */}
        <RunawayProposalButtons onAccept={handleAcceptProposal} />
      </div>

      {/* 5. Celebration Modal with Fireworks, Ring & Vow Certificate on "YES" */}
      {hasAccepted && (
        <CelebrationModal
          onClose={() => setHasAccepted(false)}
          onReset={handleResetProposal}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
