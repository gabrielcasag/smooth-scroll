import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

interface IButtonProps {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  fontBold?: boolean;
}

export const Button = styled(LinkS)<IButtonProps>`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '1rem 3rem' : '.8rem 2.2rem')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '1.5rem' : '1rem')};
  font-weight: ${({ fontBold }) => (fontBold ? 700 : 500)};
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    color: #010606;
    filter: brightness(150%);
  }
`;
