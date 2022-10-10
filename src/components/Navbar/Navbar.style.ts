import styled from "styled-components";
import { device } from "../../utils/deviceScreenSize";

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavigationItems = styled.a`
  color: var(--medium-gray);
  font-size: var(--body-small);

  &:hover {
    color: var(--almost-black);
  }
`;
