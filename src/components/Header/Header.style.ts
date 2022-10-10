import styled, { createGlobalStyle } from "styled-components";

interface WrapperProps {
  isActive?: boolean;
}

interface ButtonProps {
  primary?: boolean;
}

export const BlackOverlay = styled.div`
  position: fixed;
  display: none;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const HeaderContainer = styled.header`
  background-color: var(--almost-white);

  width: 100%;
  padding: 1.5rem 2.5rem;

  display: flex;
  align-items: center;
  gap: 60px;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const CloseIcon = styled.img`
  display: none;

  margin-left: auto;

  width: 24px;
  height: 24px;
`;

export const LoginContainer = styled.div`
  display: flex;
  gap: 2.5rem;

  color: var(--medium-gray);
  font-size: var(--body-small);
`;

export const LogoImg = styled.img`
  width: 84px;
  height: 27px;
`;

export const Button = styled.button<ButtonProps>`
  color: var(--medium-gray);
  background-color: transparent;

  padding: 0.813rem 1.375rem;

  border: ${(props) =>
    props.primary ? "0.125rem solid var(--medium-gray)" : "none"};
  border-radius: ${(props) => props.primary && "14px"};

  &:hover {
    color: var(--almost-black);

    border: ${(props) =>
      props.primary ? "0.125rem solid var(--almost-black)" : "none"};
  }
`;

export const MenuIconComponent = styled.img`
  width: 32px;
  height: 18px;

  display: none;
`;

export const ResponsiveHeader = createGlobalStyle<WrapperProps>`
  @media screen and (max-width: 845px) {
    ${Wrapper} {
      /* display: none; */
      visibility: hidden;
      
      position: fixed;
      right: 0;
      top: 0;
      
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 31px;

      width: 0px;
      height: 100vh;

      transition: all 0.25s ;

      background-color: var(--pure-white);

      ${(props) =>
        props.isActive == true &&
        "visibility: visible; width: 240px; padding: 21px 22px;"}
    }

    ${BlackOverlay} {
      ${(props) => props.isActive && "display: block;"}
    }

    ${CloseIcon} {
      ${(props) => props.isActive && "display: block;"}
    }

    ${LoginContainer} {
      flex-direction: column;
      gap: 3px;
    }

    ${HeaderContainer} {
      align-items: center;
      justify-content: space-between;
    }
    
    ${MenuIconComponent} {
      display: block;
    }
  }
`;
