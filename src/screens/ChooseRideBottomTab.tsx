import * as React from "react";
import {
  Box,
  HStack,
  Icon,
  Path,
  Text,
  VStack,
  Row,
  Image,
  Input,
  Divider,
  Button,
  IconButton,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function ChooseRideBottomTab() {
  let navigation = useNavigation();
  return (
    <ScrollView>
      <Box width="100%" bg="white" height="100%">
        <Box bg="white">
          <VStack space={4} mb={32}>
            <Row justifyContent="center">
              <Text fontSize={16} fontWeight={400}>
                Choose a ride, swipe up for more
              </Text>
            </Row>
            <Box px={5}>
              <Text fontSize={24} fontWeight={500}>
                Economy
              </Text>
            </Box>
            <Row bg="white" px={1} py={3}>
              <Image
                alt="car-image"
                size={20}
                source={{
                  uri:
                    "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c4ca70eada901c083e41a6c10adcdc3b.png",
                }}
              />
              <VStack>
                <Row
                  justifyContent="space-between"
                  width="82%"
                  space={5}
                  pl={3}
                >
                  <HStack space={3}>
                    <Text fontWeight={500} fontSize={22}>
                      UberGo
                    </Text>
                    <HStack space={1}>
                      <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                        <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                      </Icon>
                      <Text fontSize={16} fontWeight={500} mt={1}>
                        4
                      </Text>
                    </HStack>
                  </HStack>
                  <Box ml="2"></Box>
                  <Text fontWeight={500} fontSize={20}>
                    ₹75.00
                  </Text>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400}>4:42pm</Text>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400} color="gray.600">
                    Affordable, compact rides
                  </Text>
                </Row>
              </VStack>
            </Row>
            {/*new row*/}
            <Row bg="white" px={1} py={3}>
              <Image
                alt="car-image"
                size={20}
                source={{
                  uri:
                    "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c4ca70eada901c083e41a6c10adcdc3b.png",
                }}
              />
              <VStack>
                <Row
                  justifyContent="space-between"
                  width="82%"
                  space={5}
                  pl={3}
                >
                  <HStack space={3}>
                    <Text fontWeight={500} fontSize={22}>
                      Premier
                    </Text>
                    <HStack space={1}>
                      <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                        <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                      </Icon>
                      <Text fontSize={16} fontWeight={500} mt={1}>
                        4
                      </Text>
                    </HStack>
                  </HStack>
                  <Box ml="2"></Box>
                  <Text fontWeight={500} fontSize={20}>
                    ₹90.00
                  </Text>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400}>5:20pm</Text>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400} color="gray.600">
                    Comfortable sedans, top quality drivers
                  </Text>
                </Row>
              </VStack>
            </Row>
            {/*new row*/}
            <Row bg="white" px={1} py={3}>
              <Image
                alt="car-image"
                size={20}
                source={{
                  uri:
                    "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c8ff0639c81e66d0c581c7229c91496c.png",
                }}
              />
              <VStack>
                <Row
                  justifyContent="space-between"
                  width="75%"
                  space={5}
                  pl={3}
                >
                  <HStack space={3}>
                    <Text fontWeight={500} fontSize={22}>
                      Moto
                    </Text>
                    <HStack space={1}>
                      <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                        <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                      </Icon>
                      <Text fontSize={16} fontWeight={500} mt={1}>
                        1
                      </Text>
                    </HStack>
                  </HStack>
                  <Box pl={1}>
                    <Text fontWeight={500} fontSize={20}>
                      ₹38.00
                    </Text>
                  </Box>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400}>5:03pm</Text>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400} color="gray.600">
                    Affordable motorcycles rides
                  </Text>
                </Row>
              </VStack>
            </Row>
            {/*new row*/}
            <Row bg="white" px={1} py={3}>
              <Image
                alt="car-image"
                size={20}
                source={{
                  uri:
                    "https://d3i4yxtzktqr9n.cloudfront.net/hulk/b2db7c6ff6a547d9bb6e700d177760af.png",
                }}
              />
              <VStack>
                <Row
                  justifyContent="space-between"
                  width="78%"
                  space={5}
                  pl={3}
                >
                  <HStack space={3}>
                    <Text fontWeight={500} fontSize={22}>
                      UberAuto
                    </Text>
                    <HStack space={1}>
                      <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                        <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                      </Icon>
                      <Text fontSize={16} fontWeight={500} mt={1}>
                        3
                      </Text>
                    </HStack>
                  </HStack>
                  <Box pl={1}>
                    <Text fontWeight={500} fontSize={20}>
                      ₹51.00
                    </Text>
                  </Box>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400}>5:07pm</Text>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400} color="gray.600">
                    Auto rikshaws at the tap of a button
                  </Text>
                </Row>
              </VStack>
            </Row>
            {/*new row*/}
            <Row bg="white" px={1} py={3} width="100%">
              <Image
                alt="car-image"
                size={20}
                source={{
                  uri:
                    "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c4ca70eada901c083e41a6c10adcdc3b.png",
                }}
              />
              <VStack pt={3}>
                <Row justifyContent="space-between" width="81%" pl={3}>
                  <HStack space={3}>
                    <Text fontWeight={500} fontSize={22}>
                      UberGo Rentals
                    </Text>
                    <HStack space={1}>
                      <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                        <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                      </Icon>
                      <Text fontSize={16} fontWeight={500} mt={1}>
                        4
                      </Text>
                    </HStack>
                  </HStack>
                  <Box>
                    <Text fontWeight={500} fontSize={20}>
                      ₹75.00
                    </Text>
                  </Box>
                </Row>
                <Row space={5} pl={3} pt={1} justifyContent="space-between">
                  <Text fontWeight={400}>One car for many stops</Text>
                </Row>
              </VStack>
            </Row>
            {/*new row*/}
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
}
