import React, { useState } from 'react';
import { Button } from '../ButtonElement';

import * as S from './styles';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(prevState => !prevState);
  };

  return (
    <S.HeroContainer id="hero">
      <S.HeroBg>
        <S.VideoBg autoPlay loop muted src="/video.mp4" />
      </S.HeroBg>

      <S.HeroContent>
        <h1>Virtual Banking Made Easy</h1>
        <span>
          Sign up for a new account today and receive 250 dol in credit towards
          your next payment.
        </span>

        <S.BtnWrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Button to="signup" primary>
            Get Started
            {isHovered ? <S.ArrowForward /> : <S.ArrowRight />}
          </Button>
        </S.BtnWrapper>
      </S.HeroContent>
    </S.HeroContainer>
  );
};

export default HeroSection;
