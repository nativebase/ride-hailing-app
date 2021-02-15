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
import { ScrollView } from "react-native-gesture-handler";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import ChooseRide from "./ChooseRide";
import { useNavigation } from "@react-navigation/native";
import ChooseRideBottomTab from "./ChooseRideBottomTab";

export default function RentalsBottomBar() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();
  // variables
  const snapPoints = useMemo(() => ["40%", "100%"], []);
  const [bottom, setBottom] = useState(0);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // if (index == 1) {
    //   setBottom(0);
    //   navigation.navigate("ChooseRide");
    // }
    setBottom(index);
  }, []);

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={bottom}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View>
          {/* <ChooseRideBottomTab /> */}
          {bottom == 1 ? <ChooseRide /> : <ChooseRideBottomTab />}

          {/* <Box width="100%" bg="white" zIndex={2}>
          <Box bg="white" py={5} p={0}>
            <VStack space={3}>
               <Row justifyContent="center">
                <Text fontSize={16} fontWeight={500}>
                  Choose a ride, swipe up for more
                </Text>
              </Row>
            </VStack>

              <Row bg="white" px={6}>
                <Image
                  alt="car-image"
                  size={12}
                  source={require("../../assets/cash.png")}
                />
                <Row
                  justifyContent="space-between"
                  width="90%"
                  space={5}
                  pl={5}
                  pt={2}
                >
                  <Text fontWeight={500} fontSize={20}>
                    Cash
                  </Text>
                  <Icon viewBox="0 0 16 16" mt={1} size={5} color="black">
                    <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </Icon>
                </Row>
              </Row>
              <Box px={4} mt={2}>
                <Button
                  color="white"
                  p={4}
                  fontSize={18}
                  borderRadius={0}
                  variant="solid"
                  bg="black"
                >
                  Confirm UberGo Rentals
                </Button>
              </Box>
            </VStack>
          </Box>
        </Box> */}
        </View>
      </BottomSheet>
      <Box bottom={0} position="absolute">
        <Divider borderColor="gray.500" borderWidth={0.4} />
        <Row bg="white" px={6} py={3}>
          <Image
            alt="car-image"
            size={12}
            source={require("../../assets/cash.png")}
          />
          <Row
            justifyContent="space-between"
            width="90%"
            space={5}
            pl={5}
            pt={1}
          >
            <Text fontWeight={500} fontSize={16} pt={3}>
              Cash
            </Text>
            <Icon viewBox="0 0 16 16" mt="5px" size={3} color="black">
              <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </Icon>
          </Row>
        </Row>
        <Box px={4}>
          <Button
            color="white"
            p={4}
            fontSize={18}
            borderRadius={0}
            variant="solid"
            bg="black"
          >
            Confirm UberGo Rentals
          </Button>
        </Box>
      </Box>
    </>
  );
}
