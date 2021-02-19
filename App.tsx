import 'react-native-gesture-handler';
import React from 'react';
import {
  Box,
  Divider,
  Icon,
  Row,
  Text,
  View,
  NativeBaseProvider,
} from 'native-base';
import { Path } from 'react-native-svg';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import { customTheme } from './src/theme/CustomTheme';

import BottomTab from './src/navigation/BottomTab';
import Settings from './src/screens/Settings';
import Help from './src/screens/help';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home screen</Text>
    </View>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <>
      <View bg='black' p={4} mb={2}>
        <Row mb={4} alignItems='center'>
          <Icon viewBox='0 0 16 16' color='grey' size={10}>
            <Path d='M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z' />
            <Path d='M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
            <Path d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z' />
          </Icon>
          <Text color='white' pl={4} fontSize={18} fontWeight={500}>
            Vidhi Kataria
          </Text>
        </Row>
        <Divider borderColor='gray.500' borderWidth='0.3px' />
        <Row mt={4}>
          <Text color='gray.200'>Do more with your account</Text>
        </Row>
        <Row mt={4}>
          <Text color='white' fontWeight={500}>
            Make money driving
          </Text>
        </Row>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList
          {...props}
          activeTintColor='black'
          activeBackgroundColor='transparent'
          inactiveTintColor='gray'
          labelStyle={{
            fontSize: 20,
            marginTop: -3,
            letterSpacing: 1.2,
          }}
        />
      </DrawerContentScrollView>
      <Divider borderColor='gray.400' borderWidth='0.4px' mb={2} />
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        mx={4}
      >
        <Text>Legal</Text>
        <Text>v-1.4.3</Text>
      </Box>
    </>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          initialRouteName='Your Trips'
        >
          <Drawer.Screen name='Your Trips' component={BottomTab} />
          <Drawer.Screen name='Help' component={Help} />
          <Drawer.Screen name='Wallet' component={HomeScreen} />
          <Drawer.Screen name='Settings' component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
