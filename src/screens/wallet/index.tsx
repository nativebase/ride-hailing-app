import React from 'react';
import {
  Icon,
  View,
  Text,
  Row,
  Image,
  Button,
  Box,
  Divider,
  Center,
  VStack,
} from 'native-base';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Wallet() {
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
        <Text color='white' fontSize={34} fontWeight={400} letterSpacing={2}>
          Wallet
        </Text>
      </View>
      <View flex={1} pt={5}>
        <Box px={5}>
          <Row alignItems={'center'}>
            <Image
              alt='car-image'
              size={12}
              source={require('../../../assets/cash.png')}
            />
            <Text pl={5} fontSize={22} fontWeight={'400'}>
              Cash
            </Text>
          </Row>
          <Button variant={'unstyled'} justifyContent={'flex-start'}>
            <Text color={'blue.500'} fontSize={16} fontWeight={'300'}>
              Add payment or redeen gift card
            </Text>
          </Button>
        </Box>
        <Divider borderColor={'headingText.400'} />
        <Box pt={5} px={5}>
          <Text fontSize={16} fontWeight={'600'} color={'headingText.500'}>
            Ride Profiles
          </Text>
          <Row alignItems={'center'} py={4}>
            <Center bg={'black'} width={45} height={45} borderRadius={25}>
              <Icon type={'FontAwesome'} name={'user'} color={'white'} />
            </Center>
            <Text pl={5} fontSize={16} fontWeight={'300'}>
              Personal
            </Text>
          </Row>
          <Row alignItems={'center'} py={4}>
            <Center
              bg={'headingText.500'}
              width={45}
              height={45}
              borderRadius={25}
            >
              <Icon type={'SimpleLineIcons'} name={'bag'} color={'white'} />
            </Center>
            <VStack>
              <Text pl={5} fontSize={15} fontWeight={'400'} color={'blue.500'}>
                Start using Uber for business
              </Text>
              <Text pl={5} fontSize={15} fontWeight={'300'}>
                Turn on business travel features
              </Text>
            </VStack>
          </Row>
        </Box>
        <Divider borderColor={'headingText.400'} />
        <Box px={5} pt={5}>
          <Text
            fontSize={16}
            fontWeight={'600'}
            color={'headingText.500'}
            pb={2}
          >
            Promotions
          </Text>
          <Button variant={'unstyled'} justifyContent={'flex-start'} py={2}>
            <Text color={'blue.600'} fontSize={16} fontWeight={'300'}>
              Add Promo Code
            </Text>
          </Button>
        </Box>
        <Divider borderColor={'headingText.400'} />
        <Box pt={5} px={5}>
          <Text fontSize={16} fontWeight={'600'} color={'headingText.500'}>
            Vouchers
          </Text>
          <Row alignItems={'center'} py={4}>
            <Center bg={'black'} width={45} height={30} borderRadius={2}>
              <Icon
                type={'MaterialCommunityIcons'}
                name={'ticket-confirmation'}
                color={'white'}
              />
            </Center>
            <Text pl={5} fontSize={16} fontWeight={'300'}>
              Vouchers
            </Text>
          </Row>

          <Text fontSize={16} fontWeight={'300'} color={'blue.500'}>
            Add Voucher Code
          </Text>
        </Box>
      </View>
    </SafeAreaView>
  );
}
