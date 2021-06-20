import React from 'react';
import Link from 'next/link';

import * as S from './styles';

const LinkItem: React.FC = () => (
  <S.LinkItems>
    <S.LinkTitle>About us</S.LinkTitle>
    <Link href="/signin">
      <S.Link>How it works</S.Link>
    </Link>
    <Link href="/signin">
      <S.Link>Careers</S.Link>
    </Link>
    <Link href="/signin">
      <S.Link>Investors</S.Link>
    </Link>
    <Link href="/signin">
      <S.Link>Terms of Service</S.Link>
    </Link>
  </S.LinkItems>
);

export default LinkItem;
