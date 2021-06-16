import React from 'react';
import { Button } from '../ButtonElement';

import * as S from './styles';

interface IInfoSectionProps {
  id: string;
  description: string;
  topLine: string;
  headLine: string;
  alt: string;
  img: string;
  lightBg: boolean;
  lightText: boolean;
  imgStart: boolean;
  darkText: boolean;
  buttonLabel: string;
  dark: boolean;
  primary: boolean;
}

const InfoSection: React.FC<IInfoSectionProps> = ({
  id,
  description,
  topLine,
  headLine,
  alt,
  img,
  lightBg,
  lightText,
  imgStart,
  darkText,
  buttonLabel,
  dark,
  primary,
}) => (
  <S.InfoContainer lightBg={lightBg} id={id}>
    <S.InfoWrapper>
      <S.InfoRow imgStart={imgStart}>
        <S.Column1>
          <S.TextWrapper>
            <S.TopLine>{topLine}</S.TopLine>
            <S.Heading lightText={lightText}>{headLine}</S.Heading>
            <S.Subtitle darkText={darkText}>{description}</S.Subtitle>
            <S.BtnWrapper>
              <Button
                to="/"
                smooth
                duration={500}
                spy
                // exact="true"
                offset={-80}
                primary={!!primary}
                dark={!!dark}
                // dark2={dark2 ? 1 : 0}
              >
                {buttonLabel}
              </Button>
            </S.BtnWrapper>
          </S.TextWrapper>
        </S.Column1>
        <S.Column2>
          <S.ImgWrap>
            <S.Img src={img} alt={alt} />
          </S.ImgWrap>
        </S.Column2>
      </S.InfoRow>
    </S.InfoWrapper>
  </S.InfoContainer>
);

export default InfoSection;
