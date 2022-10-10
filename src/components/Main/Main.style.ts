import styled from "styled-components";
import { device } from "../../utils/deviceScreenSize";

interface ImageMobileProps {
  path: string;
}

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;

  overflow: hidden;

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 3rem;

  margin: 8.75rem auto 0 auto;
  max-width: 33.75rem;

  @media screen and (min-width: 517px) and (max-width: 950px) {
    order: 2;
    margin: 3rem auto;

    max-width: 70vw;

    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 517px) {
    order: 2;

    margin: 3rem 1rem;

    align-items: center;
    justify-content: center;
  }
`;

export const ContentHeading = styled.h1`
  color: var(--almost-black);
  font-size: var(--heading-large);
  font-weight: bold;

  @media screen and (max-width: 1080px) {
    font-size: 64px;
  }

  @media screen and (max-width: 517px) {
    font-size: 36px;
  }
`;

export const ContentBody = styled.p`
  color: var(--medium-gray);
  font-size: var(--body-medium);
  line-height: 28px;

  max-width: 26rem;

  @media screen and (max-width: 950px) {
    text-align: center;

    max-width: 100%;
  }

  @media screen and (max-width: 517px) {
    font-size: 1rem;
  }
`;

export const ButtonLink = styled.button`
  width: fit-content;
  padding: 0.875rem 1.875rem;

  background-color: var(--almost-black);
  border-radius: 15px;
  border-color: var(--almost-black);

  color: var(--almost-white);
  font-size: var(--button);
  font-weight: bold;

  &:hover {
    color: var(--almost-black);
    background-color: var(--almost-white);
  }

  @media screen and (max-width: 517px) {
    padding: 0.75rem 1.5rem;
  }
`;

export const ImageClientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;

  width: 100%;

  @media screen and (min-width: 517px) and (max-width: 1080px) {
    justify-content: space-around;
  }
`;

export const ImageClient = styled.img`
  @media screen and (max-width: 517px) {
    width: 72px;
  }
`;

export const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2.25rem;

  @media screen and (max-width: 950px) {
    order: 1;

    margin-top: 1.5rem;
  }
`;

export const ImageDesktop = styled.img`
  width: 480px;
  height: 640px;
`;

export const ImageMobile = styled.div<ImageMobileProps>`
  background: url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 400px;

  @media screen and (max-width: 517px) {
    height: 281px;
  }
`;
