import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const HeaderStyle = styled.div`
  width: 100%;
  height: 76px;
  position: fixed;
  top: 0;
  border: 1px solid #f1f1f1;
  background: white;
`;

export const LogoStyle = styled.img`
  width: 93px;
  height: 29px;
  margin-left: 92px;
  margin-top: 24px;
`;

export const LinkWrapperStyle = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 76px;
  justify-content: center;
  align-items: center;
`;

export const LinkStyle = styled(Link)`
  margin: 24px;
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
`;
