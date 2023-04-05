import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('no-scroll');
  }
  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  }


  return {
    isOpen,
    openModal,
    closeModal
  };
}