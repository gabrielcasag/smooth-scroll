import React from 'react';

import * as S from './styles';

interface IServicesCardProps {
  imgSrc: string;
  title: string;
  phrase: string;
}

const ServicesCard: React.FC<IServicesCardProps> = ({
  imgSrc,
  title,
  phrase,
}) => (
  <S.ServicesCard>
    <S.ServicesIcon src={imgSrc} />
    <h2>{title}</h2>
    <p>{phrase}</p>
  </S.ServicesCard>
);

export default ServicesCard;
