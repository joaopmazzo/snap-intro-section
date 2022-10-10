import { useState } from "react";

export const useOpenCloseDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  function handleDropdownOpen() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return { isDropdownOpen, handleDropdownOpen };
};
