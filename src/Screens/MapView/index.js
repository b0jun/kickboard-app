import {DrawerActions} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import NaverMapView from 'react-native-nmap';
import styled from 'styled-components/native';
import MenuIcon from '../../Components/MenuIcon';

const MapViewContainer = styled(NaverMapView)`
  width: 100%;
  height: 100%;
`;

const MapView = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuIcon
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ),
    });
  }, [navigation]);

  return <MapViewContainer />;
};

export default MapView;
