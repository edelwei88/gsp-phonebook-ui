'use client';
import { useState } from 'react';

import { CircleHelp } from 'lucide-react';
import HelpModal from '@/components/help-modal/help-modal';

export default function BtnHelp() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const openHelpModal = () => setIsHelpModalOpen(true);
  const closeHelpModal = () => setIsHelpModalOpen(false);

  return (
    <>
      <button onClick={openHelpModal} className='cursor-pointer'>
        <CircleHelp />
      </button>
      <HelpModal isOpen={isHelpModalOpen} onClose={closeHelpModal} />
    </>
  );
}
