import { useEffect, useRef } from "react";

interface OutsideClickDetectorProps {
  onOutsideClick: () => void;
}

export const useOutsideClickDetector = ({
  onOutsideClick,
}: OutsideClickDetectorProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount and cleans up on unmount

  return ref;
};
