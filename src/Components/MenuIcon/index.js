import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Icon = styled.Image`
  width: 40px;
  height: 20px;
`;

const MenuIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon source={require('~/Assets/Images/menu.png')} />
    </TouchableOpacity>
  );
};

export default MenuIcon;
