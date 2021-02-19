import React from 'react';
import { Icon, View, Text, Button } from 'native-base';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BUTTON_LIST = [
  {
    name: 'Trip Issues and Refunds',
  },
  {
    name: 'Account and Payment Options',
  },
  {
    name: 'More',
  },
  {
    name: 'A Guide to Uber',
  },
  {
    name: 'Signing up',
  },
  {
    name: 'Accessibility',
  },
];

export default function Help() {
  let navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View height={100} bg={'black'} justifyContent={'center'} px={5}>
        <Icon
          name={'arrow-back'}
          color='white'
          size={8}
          onPress={() => navigation.goBack()}
        />
        <Text color='white' fontSize={32} fontWeight={400}>
          Help
        </Text>
      </View>
      <View flex={1} bg={'white'} pt={10} px={5}>
        <Text fontSize={16} color={'gray.700'} pb={2}>
          All Topics
        </Text>
        {BUTTON_LIST.map((item: any, index: number) => (
          <Button
            key={index}
            variant={'unstyled'}
            display={'flex'}
            justifyContent={'flex-start'}
            py={5}
          >
            <Text fontSize={20} color={'black'} fontWeight={'300'}>
              {item.name}
            </Text>
          </Button>
        ))}
      </View>
    </SafeAreaView>
  );
}
