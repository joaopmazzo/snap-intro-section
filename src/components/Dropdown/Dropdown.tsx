import { useOpenCloseDropdown } from "../../hooks/useOpenCloseDropdown";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import {
  ArrowIcon,
  DropdownContent,
  DropdownContentWrapper,
  DropdownItem,
  IconDropdownItem,
  NavigationItems,
  NavigationItemWithDropdown,
} from "./Dropdown.style";

interface DropdownProps {
  hasIcons?: boolean;
  headItem: string;
  data: DropdownContentProps[];
}

interface DropdownContentProps {
  id: number;
  icon?: string;
  text: string;
}

import ArrowDownIcon from "../../assets/icon-arrow-down.svg";

const Dropdown = ({ hasIcons, headItem, data }: DropdownProps) => {
  const { isDropdownOpen, handleDropdownOpen } = useOpenCloseDropdown();

  function handleClickOutsideDropdown() {
    handleDropdownOpen();
  }

  const ref = useOutsideClick(isDropdownOpen, handleClickOutsideDropdown);

  if (hasIcons) {
    return (
      <NavigationItemWithDropdown ref={ref}>
        <NavigationItems onClick={handleDropdownOpen}>
          {headItem}
          <ArrowIcon
            src={ArrowDownIcon}
            alt="Arrow Icon"
            isDropdownOpen={isDropdownOpen}
          />
        </NavigationItems>
        <DropdownContentWrapper isDropdownOpen={isDropdownOpen}>
          <DropdownContent>
            {data.map((object) => (
              <DropdownItem key={object.id}>
                <IconDropdownItem src={object.icon} />
                {object.text}
              </DropdownItem>
            ))}
          </DropdownContent>
        </DropdownContentWrapper>
      </NavigationItemWithDropdown>
    );
  } else {
    return (
      <NavigationItemWithDropdown ref={ref}>
        <NavigationItems onClick={handleDropdownOpen}>
          {headItem}
          <ArrowIcon
            src={ArrowDownIcon}
            alt="Arrow Icon"
            isDropdownOpen={isDropdownOpen}
          />
        </NavigationItems>
        <DropdownContentWrapper isDropdownOpen={isDropdownOpen}>
          <DropdownContent>
            {data.map((object) => (
              <DropdownItem key={object.id}>{object.text}</DropdownItem>
            ))}
          </DropdownContent>
        </DropdownContentWrapper>
      </NavigationItemWithDropdown>
    );
  }
};

export default Dropdown;
