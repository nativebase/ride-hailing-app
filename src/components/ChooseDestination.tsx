import * as React from "react";
import {
  Badge,
  Box,
  Button,
  Column,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  Path,
  Row,
  Text,
  View,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { getPermissionsAsync } from "expo-location";

export default function ChooseDestination() {
  let navigation = useNavigation();

  return (
    <>
      <Box>
        <Box p={3} bg="white">
          <Row>
            <IconButton
              onPress={() => navigation.goBack()}
              variant="ghost"
              icon={
                <Icon viewBox="0 0 492 400" color="black">
                  <Path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z"></Path>
                </Icon>
              }
            />

            <Row width="90%" justifyContent="center" alignItems="center">
              <Image
                alt="image"
                size={30}
                source={{
                  uri:
                    "https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1609289856&Signature=Rau9a8JQaw43o9XcoCk2pDh7IwyicujZLbYJS2Y-uzDokR43BZJnavT~Nr3B9rrg86FHXNB4BE-5ImQE86iJbrS0KTYpwvAavi0H2Hya3wEyDF0SVq1lrMc1iZGAeoozpwLrjnu12iKxzMUL9kyrM6jOgn00rug86NrISQz9lcxo9ZqtnJMGFYepkiQBgLQRaajtnPYzWBg5VZeEqy9-WHzGfMRZEXPW2DT-ZeEeu~FWBCIxx6aNcQMyEikZp-s2IHSpLLGTAfPp~MtLu3TrkNowN7nB74y6S5NjsKv~WXDVzW4g63QshelEUUe91a4R6XtKYUtY3ZdRay3zsamVVA__&Key-Pair-Id=APKAJSDH2OZQQSA64LQQ",
                }}
                rounded="50"
              />
              <Text fontWeight={400} px={3}>
                For me
              </Text>
              <Icon viewBox="0 0 800 452" color="black">
                <Path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
              </Icon>
            </Row>
          </Row>
          <Row py={3} px={2}>
            <Box justifyContent="center" width="10%" py={3}>
              <Icon viewBox="0 0 512 512" color="gray.400" size={2}>
                <Path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z" />
              </Icon>

              <Box
                borderWidth="2"
                borderColor="transparent"
                borderLeftColor="gray.400"
                height="50"
                ml={2.5}
              ></Box>
              <Icon viewBox="0 0 512 512" color="black" size={2}>
                <Path d="M497,51H15C6.716,51,0,57.716,0,66v380c0,8.284,6.716,15,15,15h482c8.284,0,15-6.716,15-15V66    C512,57.716,505.284,51,497,51z" />
              </Icon>
            </Box>
            <VStack width="90%" space={2}>
              <Row alignItems="center">
                <Input
                  px={4}
                  size="lg"
                  variant="unstyled"
                  placeholder="Where to?"
                  fontSize={20}
                  placeholderTextColor="gray.300"
                  bg="gray.100"
                  width="90%"
                  py={2}
                  value="222, Sector 51A"
                  fontWeight={300}
                />
              </Row>
              <Row alignItems="center">
                <Input
                  px={4}
                  size="lg"
                  variant="unstyled"
                  placeholder="Where to?"
                  fontSize={20}
                  placeholderTextColor="gray.300"
                  bg="gray.200"
                  width="90%"
                  py={2}
                />
                <Box pl={4}>
                  <Icon
                    viewBox="0 0 426.66667 426.66667"
                    color="black"
                    size={4}
                  >
                    <Path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                  </Icon>
                </Box>
              </Row>
            </VStack>
          </Row>
        </Box>
        <ScrollView>
          <Box py={1} borderTopWidth={2} borderColor="gray.100" shadow={2}>
            <Row py={2} px={5} alignItems="center">
              <Box p={2} bg="gray.400" borderRadius={50}>
                <Icon viewBox="0 0 512.002 512.002" color="white" size={4}>
                  <Path
                    d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
			c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
			c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
			c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
			l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
			C511.56,208.649,513.033,202.688,511.267,197.258z"
                  />
                </Icon>
              </Box>
              <Text pl={5} pr={8} isTruncated={true}>
                Saved Places
              </Text>
            </Row>
          </Box>
          <Divider borderColor="gray.300" borderWidth={2} />
          <VStack>
            <TimerLocation />
            <TimerLocation />
            <TimerLocation />
            <Location />
            <Location />
            <Location />
            <Location />
            <MapLocation />
            <Later />
          </VStack>
        </ScrollView>
      </Box>
    </>
  );
}

function Location() {
  return (
    <Row
      py={2}
      px={5}
      alignItems="center"
      borderBottomWidth={1}
      borderColor="gray.200"
    >
      <Box p={2} bg="gray.400" borderRadius={50}>
        <Icon viewBox="0 0 18 24" color="white" size={4}>
          <Path d="M16.175 2.775C12.475 -0.925 6.475 -0.925 2.775 2.775C-0.925 6.475 -0.925 12.575 2.775 16.275L9.475 22.975L16.175 16.175C19.875 12.575 19.875 6.475 16.175 2.775ZM9.475 11.475C8.375 11.475 7.475 10.575 7.475 9.475C7.475 8.375 8.375 7.475 9.475 7.475C10.575 7.475 11.475 8.375 11.475 9.475C11.475 10.575 10.575 11.475 9.475 11.475Z" />
        </Icon>
      </Box>
      <Address />
    </Row>
  );
}

function TimerLocation() {
  return (
    <Row
      py={2}
      px={5}
      alignItems="center"
      borderBottomWidth={1}
      borderColor="gray.200"
    >
      <Box p={2} bg="gray.400" borderRadius={50}>
        <Icon viewBox="0 0 24 24" color="white" size={4}>
          <Path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M14.586,16l-3.293-3.293 C11.105,12.519,11,12.265,11,12V7c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v4.586l3,3c0.39,0.39,0.39,1.024,0,1.414l0,0 C15.61,16.39,14.976,16.39,14.586,16z" />
        </Icon>
      </Box>
      <Address />
    </Row>
  );
}

function Later() {
  return (
    <Row
      py={2}
      px={5}
      alignItems="center"
      borderBottomWidth={1}
      borderColor="gray.200"
    >
      <Box p={2} bg="gray.400" borderRadius={50}>
        <Icon viewBox="0 0 46 52" color="white" size={4}>
          <Path d="M9.629,44.68c-1.154,1.16-2.895,1.51-4.407,0.885c-1.513-0.623-2.5-2.1-2.5-3.735V4.043c0-1.637,0.987-3.112,2.5-3.736     c1.513-0.625,3.253-0.275,4.407,0.885l17.862,17.951c2.088,2.098,2.088,5.488,0,7.585L9.629,44.68z" />
          <Path d="M38.252,45.975c-2.763,0-5-2.238-5-5V5c0-2.762,2.237-5,5-5c2.762,0,5,2.238,5,5v35.975      C43.252,43.736,41.013,45.975,38.252,45.975z" />
        </Icon>
      </Box>
      <Text pl={5} pr={8} pt={1} isTruncated={true}>
        Enter Destination Later
      </Text>
    </Row>
  );
}
function MapLocation() {
  let navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Row
        py={2}
        px={5}
        alignItems="center"
        borderBottomWidth={1}
        borderColor="gray.200"
      >
        <Box p={2} bg="gray.400" borderRadius={50}>
          <Icon viewBox="0 0 18 24" color="white" size={4}>
            <Path d="M16.175 2.775C12.475 -0.925 6.475 -0.925 2.775 2.775C-0.925 6.475 -0.925 12.575 2.775 16.275L9.475 22.975L16.175 16.175C19.875 12.575 19.875 6.475 16.175 2.775ZM9.475 11.475C8.375 11.475 7.475 10.575 7.475 9.475C7.475 8.375 8.375 7.475 9.475 7.475C10.575 7.475 11.475 8.375 11.475 9.475C11.475 10.575 10.575 11.475 9.475 11.475Z" />
          </Icon>
        </Box>
        <Text pl={5} pr={8} pt={1} isTruncated={true}>
          Set Location On Map
        </Text>
      </Row>
    </TouchableOpacity>
  );
}
function Address() {
  return (
    <Box>
      <Text pl={5} pr={8} isTruncated={true}>
        Laziz Rasoi
      </Text>
      <Text pl={5} pr={8} pt={1} isTruncated={true} color="gray.500">
        SCF 12, Phase 2, Sector 54, Sahibzada Azit Singh Nagar, chandigarh
      </Text>
    </Box>
  );
}
