import React from 'react';
import styled from 'styled-components/native';

const Logo = styled.Image`
  width: 60px;
  height: 20px;
`;

const LogoTitle = () => <Logo source={require('~/Assets/Images/logo.png')} />;

export default LogoTitle;
