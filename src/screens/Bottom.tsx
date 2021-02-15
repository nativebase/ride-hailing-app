import { Box, HStack, Icon, IconButton, VStack, Path } from "native-base";
import React from "react";
import { Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function Bottom() {
  let navigation = useNavigation();
  return (
    <Box bg="primary" py={3} px={8}>
      <HStack space={32} mt={1} ml={20}>
        <IconButton
          variant="ghost"
          icon={
            <VStack space={1}>
              <Icon
                viewBox="0 0 394.648 394.648"
                color="black"
                size={6}
                ml="2px"
              >
                <Path d="M391.909,145.036  c-0.938-2.731-4.263-4.855-7.039-4.855c-12.021,0-24.04,0-36.061,0c-2.775,0-6.101,2.124-7.04,4.855  c-0.918,2.673-1.604,5.058-2.06,7.301l-24.088-66.641c-3.973-10.989-14.495-18.372-26.179-18.372H105.209  c-11.685,0-22.205,7.383-26.18,18.374l-24.089,66.647c-0.457-2.245-1.143-4.633-2.062-7.309c-0.938-2.731-4.264-4.855-7.039-4.855  c-12.02,0-24.04,0-36.061,0c-2.775,0-6.101,2.124-7.039,4.855c-3.652,10.633-3.65,16.72,0.001,27.354  c0.938,2.731,4.264,4.855,7.039,4.855c12.021,0,24.041,0,36.061,0c0.034,0,0.07-0.009,0.105-0.01l-0.544,1.507  c-7.353,2.443-12.662,9.365-12.662,17.539v55.805v4.599v61.752c0,4.909,3.978,8.887,8.887,8.887h44.727  c4.908,0,8.887-3.978,8.887-8.887v-43.262H299.41v43.262c0,4.909,3.979,8.887,8.887,8.887h44.727c4.909,0,8.887-3.978,8.887-8.887  v-61.752v-4.599v-55.805c0-8.172-5.307-15.093-12.657-17.538l-0.545-1.508c0.033,0.001,0.068,0.009,0.101,0.009  c12.021,0,24.04,0,36.061,0c2.776,0,6.101-2.124,7.039-4.855C395.561,161.756,395.559,155.669,391.909,145.036z M108.612,100.028  h177.402l28.108,77.762H80.505L108.612,100.028z M113.56,232.571H76.142c-8.028,0-14.535-6.507-14.535-14.535  c0-8.027,6.506-14.535,14.535-14.535h37.418c8.027,0,14.535,6.507,14.535,14.535C128.096,226.064,121.587,232.571,113.56,232.571z   M318.505,232.571h-37.418c-8.027,0-14.535-6.507-14.535-14.535c0-8.027,6.508-14.535,14.535-14.535h37.418  c8.028,0,14.535,6.507,14.535,14.535C333.04,226.064,326.533,232.571,318.505,232.571z" />
              </Icon>
              <Text color="black" fontWeight={600}>
                Ride
              </Text>
            </VStack>
          }
        />

        <IconButton
          onPress={() => {
            navigation.navigate("Rentals");
          }}
          variant="ghost"
          icon={
            <VStack space={1}>
              <Icon
                viewBox="0 0 394.648 394.648"
                color="gray.500"
                size={6}
                ml={3}
              >
                <Path d="M380.403,376.871c-2.757-31.648-12.31-64.136-27.596-93.218c-14.283-27.175-32.848-49.858-53.594-65.816    c20.746-15.958,39.31-38.641,53.594-65.816c12.162-23.138,20.694-48.433,25.065-73.745c16.417-4.983,28.367-20.231,28.367-38.276    c0-22.091-17.908-40-40-40H88.043c-22.092,0-40,17.909-40,40c0,18.045,11.95,33.293,28.367,38.276    c4.37,25.312,12.902,50.607,25.064,73.745c14.283,27.175,32.848,49.858,53.594,65.816c-20.746,15.958-39.31,38.641-53.594,65.816    c-15.286,29.082-24.84,61.57-27.596,93.218c-15.098,5.72-25.835,20.308-25.835,37.411c0,22.091,17.908,40,40,40h278.195    c22.092,0,40-17.909,40-40C406.238,397.179,395.501,382.591,380.403,376.871z M242.563,296.411    c19.129,9.909,32.907,36.941,32.907,61.79h-96.659c0-24.849,13.778-51.881,32.907-61.79c-0.018-0.009,0.141-0.113,0.422-0.272    v-75.947c-3.435-1.189-5.649-2.314-5.571-2.355c-25.515-13.217-43.893-49.273-43.893-82.417h128.927    c0,33.144-18.378,69.2-43.893,82.417c0.078,0.04-2.136,1.166-5.571,2.355v75.947C242.422,296.298,242.581,296.401,242.563,296.411    z" />
              </Icon>
              <Text color="gray.500" fontWeight={600}>
                Rentals
              </Text>
            </VStack>
          }
        />
      </HStack>
    </Box>
  );
}