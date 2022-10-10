import useWindowDimensions from "../../hooks/useWindowSize";

import {
  ButtonLink,
  ContentBody,
  ContentHeading,
  ContentSection,
  ImageDesktop,
  ImageClientContainer,
  ImageSection,
  MainContainer,
  ImageMobile,
  ImageClient,
} from "./Main.style";

import ImageHeroDesktop from "../../assets/image-hero-desktop.png";
import ImageHeroMobile from "../../assets/image-hero-mobile.png";

import ClientDatabiz from "../../assets/client-databiz.svg";
import ClientAudiophile from "../../assets/client-audiophile.svg";
import ClientMeet from "../../assets/client-meet.svg";
import ClientMaker from "../../assets/client-maker.svg";

const Main = () => {
  const { width } = useWindowDimensions();

  let imageComponent;
  if (width > 950) {
    imageComponent = (
      <ImageDesktop
        src={ImageHeroDesktop}
        alt="Abstract art with a guy holding a notebook"
      />
    );
  } else {
    imageComponent = <ImageMobile path={ImageHeroMobile} />;
  }

  return (
    <MainContainer>
      <ContentSection>
        <ContentHeading>
          Make {width > 950 && <br />} remote work
        </ContentHeading>
        <ContentBody>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </ContentBody>
        <ButtonLink>Learn more</ButtonLink>
        <ImageClientContainer>
          <ImageClient src={ClientDatabiz} alt="Client Databiz" />
          <ImageClient src={ClientAudiophile} alt="Client Audiophile" />
          <ImageClient src={ClientMeet} alt="Client Meet" />
          <ImageClient src={ClientMaker} alt="Client Maker" />
        </ImageClientContainer>
      </ContentSection>
      <ImageSection>{imageComponent}</ImageSection>
    </MainContainer>
  );
};

export default Main;
