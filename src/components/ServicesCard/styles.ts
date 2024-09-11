import styled from 'styled-components';

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: 15px;
  max-height: 340px;
  padding: 1.8rem;

  transition: all 0.2s ease-in-out;

  > h2 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  > span {
    font-size: 1rem;
    text-align: center;
  }

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(255, 255, 255, 2);
  }
`;

export const ServicesIcon = styled.img`
  height: 150px;
  width: 150px;

  margin-bottom: 0.8rem;
`;
