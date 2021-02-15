import * as React from "react";
import BottomBar from "./BottomBar";

import { Box, Icon, IconButton, Path } from "native-base";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Map from "./Map";
import Bottom from "./Bottom";

export default function Ride() {
  return (
    <>
      <HamBurger />
      <Map />
      <BottomBar />
    </>
  );
}

function HamBurger() {
  let navigation = useNavigation();
  return (
    <IconButton
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}
      bg="white"
      position="relative"
      borderRadius={50}
      size="xs"
      mt={5}
      p={3}
      pb={2}
      ml={3}
      width="11%"
      icon={
        <Icon viewBox="0 0 512 512" mt={1} color="black">
          <Path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
          <Path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" />
          <Path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20    C512,404.954,503.046,396,492,396z" />
        </Icon>
      }
    ></IconButton>
  );
}
