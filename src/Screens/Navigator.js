import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapView from '~/Screens/MapView';
import LogoTitle from '../Components/LogoTitle';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mapview"
        component={MapView}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRightContainerStyle: {paddingRight: 10},
        }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator drawerType="front">
      <Drawer.Screen name="home" component={MainStack} />
    </Drawer.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
