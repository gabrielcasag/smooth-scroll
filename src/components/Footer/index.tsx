import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';
import Link from 'next/link';

import * as S from './styles';
import LinkItem from '../LinkItem';

const Footer: React.FC = () => (
  <S.Container>
    <S.Wrap>
      <S.LinksContainer>
        <S.LinksWrapper>
          <LinkItem />
          <LinkItem />
        </S.LinksWrapper>
        <S.LinksWrapper>
          <LinkItem />
          <LinkItem />
        </S.LinksWrapper>
      </S.LinksContainer>
      <S.SocialMedia>
        <S.SocialMediaWrap>
          <Link href='/'>
            <S.SocialLogo>dolla</S.SocialLogo>
          </Link>
          <S.WebsiteRights>
            dolla © {new Date().getFullYear()}
            <p>All rights reserved.</p>
          </S.WebsiteRights>

        <S.SocialIcons>
            <S.SocialIconLink href="/" target="_blank" aria-label="Facebook" >
              <FaFacebook/>
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" aria-label="Instagram" >
              <FaInstagram/>
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" aria-label="Twitter" >
              <FaTwitter/>
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" aria-label="Twitter" >
              <FaGithub/>
            </S.SocialIconLink>
          </S.SocialIcons>
        </S.SocialMediaWrap>
      </S.SocialMedia>
    </S.Wrap>
  </S.Container>
);

export default Footer;
