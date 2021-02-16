import * as React from 'react';
import { Path } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, HStack, Icon, Text, VStack, Row, Image } from 'native-base';

import { RIDE_DATA } from '../utils/dummyRideData';

export default function ChooseRideBottomTab() {
  return (
    <ScrollView>
      <Box width='100%' bg='white' height='100%'>
        <Box bg='white'>
          <VStack space={4} mb={32}>
            <Row justifyContent='center'>
              <Text fontSize={16} fontWeight={400}>
                Choose a ride, swipe up for more
              </Text>
            </Row>
            <Box px={5}>
              <Text fontSize={24} fontWeight={500}>
                Economy
              </Text>
            </Box>

            {RIDE_DATA.map((item: any, index: number) => (
              <Box
                px={1}
                py={3}
                key={index}
                width={'100%'}
                flexDirection={'row'}
              >
                <Box width={'15%'}>
                  <Image
                    alt='car-image'
                    size={20}
                    source={{
                      uri: item.img,
                    }}
                  />
                </Box>
                <Box width={'1%'}></Box>
                <Box width={'79%'}>
                  <VStack>
                    <Row justifyContent='space-between' space={5} pl={3}>
                      <HStack space={3}>
                        <Text fontWeight={500} fontSize={22}>
                          {item.name}
                        </Text>
                        <HStack space={1}>
                          <Icon
                            viewBox='0 0 24 24'
                            color='black'
                            mt={2}
                            size={3}
                          >
                            <Path d='M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z' />
                          </Icon>
                          <Text fontSize={16} fontWeight={500} mt={1}>
                            {item.availability}
                          </Text>
                        </HStack>
                      </HStack>
                      <Text fontWeight={500} fontSize={20}>
                        {item.price}
                      </Text>
                    </Row>
                    <Row space={5} pl={3} pt={1} justifyContent='space-between'>
                      <Text fontWeight={400}>{item.time}</Text>
                    </Row>
                    <Row space={5} pl={3} pt={1} justifyContent='space-between'>
                      <Text fontWeight={400} color='gray.600'>
                        {item.des}
                      </Text>
                    </Row>
                  </VStack>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
}
