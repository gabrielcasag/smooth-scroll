import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  > h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 1.3rem;
  padding: 0 4rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
