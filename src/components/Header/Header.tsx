import { useOutsideClick } from "../../hooks/useOutsideClick";

import {
  BlackOverlay,
  Button,
  CloseIcon,
  HeaderContainer,
  LoginContainer,
  LogoImg,
  MenuIconComponent,
  ResponsiveHeader,
  Wrapper,
} from "./Header.style";

import logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-menu.svg";
import CloseMenuIcon from "../../assets/icon-close-menu.svg";

import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openSidePanel() {
    setIsOpen(true);
  }

  function closeSidePanel() {
    setIsOpen(false);
  }

  function handleClickOutsideSidePanel() {
    setIsOpen(false);
  }

  const ref = useOutsideClick(isOpen, handleClickOutsideSidePanel);

  return (
    <>
      <ResponsiveHeader isActive={isOpen} />
      <BlackOverlay />
      <HeaderContainer ref={ref}>
        <LogoImg src={logo} alt="Snap logo image" />
        <Wrapper>
          <CloseIcon src={CloseMenuIcon} onClick={closeSidePanel} />
          <Navbar />
          <LoginContainer>
            <Button>Login</Button>
            <Button primary={true}>Register</Button>
          </LoginContainer>
        </Wrapper>
        <MenuIconComponent
          src={MenuIcon}
          alt="Open menu icon"
          onClick={openSidePanel}
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
