import React from 'react';

import { Icon, IconButton } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Map from './Map';
import RentalsBottomBar from './RentalsBottomBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Rentals() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Back />
      <Map />
      <RentalsBottomBar />
    </SafeAreaView>
  );
}

function Back() {
  let navigation = useNavigation();
  return (
    <IconButton
      onPress={() => {
        navigation.goBack();
      }}
      bg='white'
      borderRadius={50}
      size='xs'
      mt={5}
      p={3}
      pb={2}
      ml={3}
      width={20}
      icon={<Icon name={'arrow-back'} color='black' size={8} />}
    ></IconButton>
  );
}
