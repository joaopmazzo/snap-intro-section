import styled, { createGlobalStyle, css, keyframes } from "styled-components";

interface DropdownContentWrapperProps {
  isDropdownOpen: boolean;
}

export const NavigationItemWithDropdown = styled.div`
  color: var(--medium-gray);
  font-size: var(--body-small);
`;

export const DropdownContentWrapper = styled.div<DropdownContentWrapperProps>`
  position: absolute;
  display: none;
  z-index: 1;

  ${(props) =>
    props.isDropdownOpen &&
    `
    padding-top: 1.25rem;
    
    display: block;
    `}

  @media screen and (max-width: 845px) {
    ${(props) =>
      props.isDropdownOpen &&
      `
      padding-top: 1.25rem;
      
      display: block;
      position: unset;
  `}
  }
`;

export const DropdownContent = styled.div`
  padding: 1.5rem 1.563rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--pure-white);
  border-radius: 10px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.14);

  @media screen and (max-width: 845px) {
    border-radius: 0;
    box-shadow: none;
  }
`;

export const NavigationItems = styled.a`
  display: flex;
  align-items: center;
  gap: 9px;

  color: var(--medium-gray);
  font-size: var(--body-small);

  ${NavigationItemWithDropdown}:hover & {
    color: var(--almost-black);
  }
`;

export const ArrowIcon = styled.img<DropdownContentWrapperProps>`
  transition: 0.2s;

  ${(props) =>
    props.isDropdownOpen &&
    `
    transform: rotateX(3.142rad);
  `}
`;

export const DropdownItem = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  &:hover {
    color: var(--almost-black);
  }
`;

export const IconDropdownItem = styled.img`
  width: 18px;
  height: 18px;
`;
