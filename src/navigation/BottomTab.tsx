import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Ride from '../screens/Ride';
import Rentals from '../screens/Rentals';
import ChooseRide from '../screens/ChooseRide';
import ChooseDestination from '../components/ChooseDestination';

export default function BottomTab() {
  const BottomTab = createStackNavigator();

  return (
    <BottomTab.Navigator headerMode='none'>
      <BottomTab.Screen name='Ride' component={Ride} />
      <BottomTab.Screen name='Rentals' component={Rentals} />
      <BottomTab.Screen name='WhereTo' component={ChooseDestination} />
      <BottomTab.Screen
        name='ChooseRide'
        component={ChooseRide}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
    </BottomTab.Navigator>
  );
}
