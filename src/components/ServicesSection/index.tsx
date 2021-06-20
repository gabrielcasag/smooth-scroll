import React from 'react';

import ServicesCard from '@/components/ServicesCard';

import * as S from './styles';

const ServicesSection: React.FC = () => (
  <S.Container id="services">
    <h1>Our Services</h1>

    <S.Wrapper>
      <ServicesCard
        imgSrc="/premium-benefits.svg"
        title="Titulo"
        phrase="Testando o componente Service Card"
      />
      <ServicesCard
        imgSrc="/reduce-expenses.svg"
        title="Titulo"
        phrase="Testando o componente Service Card"
      />
      <ServicesCard
        imgSrc="/virtual-offices.svg"
        title="Titulo"
        phrase="Testando o componente Service Card"
      />
    </S.Wrapper>
  </S.Container>
);
export default ServicesSection;
