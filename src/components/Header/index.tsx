import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../static/logo.svg';
import { HeaderStyle, LogoStyle, LinkWrapperStyle, LinkStyle } from './style';

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle src="images/frame-10.png" alt="logo" />
      <LinkWrapperStyle>
        <LinkStyle to="/">Форма</LinkStyle>
        <LinkStyle to="/preview">Превью</LinkStyle>
      </LinkWrapperStyle>
    </HeaderStyle>
  );
};

export default Header;
