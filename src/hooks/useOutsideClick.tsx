import { useEffect, useRef } from "react";

export const useOutsideClick = (isOpen: boolean, callback: () => void) => {
  const ref = useRef<any>();

  useEffect(() => {
    const handleClick = (event: any) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleScapeKey = (event: any) => {
      if (isOpen && event.code === "Escape") {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleScapeKey);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleScapeKey);
    };
  }, [isOpen]);

  return ref;
};
