import styled from 'styled-components';

export const Container = styled.footer`
  background: #101522;
  color: #f7f8fa;
`;

export const Wrap = styled.div`
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    //820
    flex-direction: column;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 2rem auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
  letter-spacing: 0.2rem;

  &:hover {
    text-shadow: 0 2px 2px rgba(255, 255, 255, 0.4);
  }
`;

export const WebsiteRights = styled.div`
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0.2rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const SocialIconLink = styled.a`
  color: #01bf71;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.3);
  }
`;
