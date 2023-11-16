import { ReactNode } from "react";
import { useOutsideClickDetector } from "./useOutisdeClick";

export const OutsideClickDetector: React.FC<{
  children: ReactNode;
  onOutsideClick: () => void;
}> = ({ children, onOutsideClick }) => {
  const ref = useOutsideClickDetector({ onOutsideClick });

  return <div ref={ref}>{children}</div>;
};
