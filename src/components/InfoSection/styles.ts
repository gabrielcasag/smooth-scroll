import styled from 'styled-components';

interface IInfoContainerProps {
  lightBg: boolean;
}

export const InfoContainer = styled.div<IInfoContainerProps>`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  height: calc(100vh - 80px);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.2rem;
  justify-content: center;

  z-index: 1;
`;

interface IInfoRowProps {
  imgStart: boolean;
}

export const InfoRow = styled.div<IInfoRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 1.2rem;
  padding: 0 1.2rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 1.2rem;
  padding: 0 1.2rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

interface IInfoHeadingProps {
  lightText: boolean;
}

export const Heading = styled.h1<IInfoHeadingProps>`
  margin-bottom: 2rem;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
`;

interface IInfoSubtitleProps {
  darkText: boolean;
}

export const Subtitle = styled.p<IInfoSubtitleProps>`
  max-width: 440px;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 1rem 0;
  padding-right: 0;
`;
