import * as React from 'react';

import { Icon, IconButton } from 'native-base';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import Map from './Map';
import BottomBar from './BottomBar';

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
      bg='white'
      borderRadius={50}
      variant='solid'
      size='xs'
      mt={10}
      p={3}
      pb={2}
      ml={3}
      width={20}
      icon={<Icon name={'menu'} size={5} />}
    ></IconButton>
  );
}
