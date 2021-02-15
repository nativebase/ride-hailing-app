import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Rentals from "../screens/Rentals";
import Map from "../screens/Map";
import { Box, Icon, Path } from "native-base";
import Ride from "../screens/Ride";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import ChooseDestination from "../components/ChooseDestination";
import Test from "../screens/ChooseRide";
import ChooseRide from "../screens/ChooseRide";

export default function BottomTab() {
  const BottomTab = createStackNavigator();

  return (
    <BottomTab.Navigator headerMode="none">
      <BottomTab.Screen name="Ride" component={Ride} />
      <BottomTab.Screen name="Rentals" component={Rentals} />
      <BottomTab.Screen name="WhereTo" component={ChooseDestination} />
      <BottomTab.Screen
        name="ChooseRide"
        component={ChooseRide}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
    </BottomTab.Navigator>
  );
}
