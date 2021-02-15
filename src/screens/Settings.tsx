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
  Link,
  Path,
  Row,
  Text,
  View,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function Settings() {
  let navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <Box>
          <Row px={4} pt={2}>
            <IconButton
              variant="ghost"
              onPress={() => navigation.goBack()}
              icon={
                <Icon viewBox="0 0 329.26933 329" color="black" size={4}>
                  <Path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
                </Icon>
              }
            />
          </Row>
          <VStack space={2}>
            <Row px={4}>
              <Text fontSize={30} fontWeight={500}>
                Settings
              </Text>
            </Row>
            <Row alignItems="center" px={2}>
              <Image
                alt="image"
                size={70}
                source={{
                  uri:
                    "https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1609289856&Signature=Rau9a8JQaw43o9XcoCk2pDh7IwyicujZLbYJS2Y-uzDokR43BZJnavT~Nr3B9rrg86FHXNB4BE-5ImQE86iJbrS0KTYpwvAavi0H2Hya3wEyDF0SVq1lrMc1iZGAeoozpwLrjnu12iKxzMUL9kyrM6jOgn00rug86NrISQz9lcxo9ZqtnJMGFYepkiQBgLQRaajtnPYzWBg5VZeEqy9-WHzGfMRZEXPW2DT-ZeEeu~FWBCIxx6aNcQMyEikZp-s2IHSpLLGTAfPp~MtLu3TrkNowN7nB74y6S5NjsKv~WXDVzW4g63QshelEUUe91a4R6XtKYUtY3ZdRay3zsamVVA__&Key-Pair-Id=APKAJSDH2OZQQSA64LQQ",
                }}
                rounded="50"
              />
              <VStack pl={4} space={1} width="75%">
                <Text>meenu makkar</Text>
                <Text>081688 07235</Text>
                <Text isTruncated="true">
                  phone-only-user-f6324e72-8aaf-4f33-a5b4-c96ae7fdfe44@fake.uber.com
                </Text>
              </VStack>
              <Icon viewBox="0 0 16 16" color="grey" size={4} pl={8}>
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
            <Divider borderColor="gray.300" borderWidth="0.3" />
            <Row px={4} pl={4} py={1}>
              <Text color="orange.600">
                For added security, please verify your email address
              </Text>
            </Row>
            <Box>
              <Divider borderColor="gray.400" borderWidth="0.3" />
              <Row pt={8} pb={3} px={2} bg="gray.200" pl={4}>
                <Text>Favourites</Text>
              </Row>
              <Divider borderColor="gray.400" borderWidth="0.3" pt={0.5} />
            </Box>
            <Row
              px={4}
              justifyContent="space-between"
              py={2}
              alignItems="center"
            >
              <Row alignItems="center">
                <Icon viewBox="0 0 53.24 53.24" color="blue.500" size={6}>
                  <Path d="M26.62,0C11.919,0,0,11.918,0,26.62s11.919,26.62,26.62,26.62s26.62-11.918,26.62-26.62S41.321,0,26.62,0z M42.93,42.161    c0,0.386-0.313,0.698-0.699,0.698H11.01c-0.386,0-0.699-0.313-0.699-0.698V22.417c0-0.201,0.087-0.394,0.238-0.525l15.61-13.687    c0.264-0.23,0.658-0.23,0.922,0l15.61,13.687c0.15,0.132,0.236,0.324,0.236,0.525v19.744H42.93z M47.303,22.543    c-0.244,0-0.49-0.085-0.689-0.26L26.62,4.758L6.628,22.284c-0.436,0.383-1.097,0.338-1.479-0.097    c-0.381-0.436-0.338-1.099,0.097-1.479L25.93,2.576c0.396-0.347,0.987-0.347,1.382,0l20.685,18.132    c0.435,0.381,0.478,1.044,0.097,1.479C47.885,22.423,47.594,22.543,47.303,22.543z" />
                  <Path d="M27.559,29.875c1.181-0.404,1.973-1.505,1.973-2.738c0-1.604-1.307-2.91-2.911-2.91c-1.605,0-2.911,1.305-2.911,2.91    c0,1.233,0.792,2.334,1.972,2.738c0.176,0.061,0.32,0.188,0.401,0.354c0.081,0.168,0.094,0.358,0.034,0.535l-2.127,6.201h5.262    l-2.127-6.201c-0.06-0.177-0.048-0.367,0.034-0.535C27.239,30.062,27.385,29.936,27.559,29.875z" />
                </Icon>
                <Text pl={4} fontWeight={500}>
                  Add home
                </Text>
              </Row>
              <Icon viewBox="0 0 16 16" color="grey" size={4}>
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
            <Divider borderWidth="0.3" borderColor="gray.400" />
            <Row
              px={4}
              justifyContent="space-between"
              py={2}
              alignItems="center"
            >
              <Row alignItems="center">
                <Icon viewBox="0 0 80 80" color="blue.500" size={6}>
                  <Path d="M40,80c22.092,0,40-17.909,40-40C80,17.908,62.092,0,40,0C17.909,0,0,17.908,0,40C0,62.091,17.909,80,40,80z     M57.334,26.164c0-0.553,0.448-1,1-1h0.588c2.219,0,4.023,1.805,4.023,4.023v21.594c0,2.22-1.805,4.024-4.023,4.024h-0.588    c-0.552,0-1-0.446-1-1V26.164z M35.739,20.123h11.215c2.22,0,4.024,1.806,4.024,4.024c0,0.553-0.448,1-1,1c-0.553,0-1-0.447-1-1    c0-1.116-0.908-2.024-2.024-2.024H35.739c-1.116,0-2.024,0.908-2.024,2.024c0,0.553-0.448,1-1,1c-0.552,0-1-0.447-1-1    C31.715,21.929,33.52,20.123,35.739,20.123z M27.489,26.164c0-0.553,0.448-1,1-1h25.389c0.552,0,1,0.447,1,1v27.643    c0,0.553-0.448,1-1,1H28.489c-0.552,0-1-0.447-1-1V26.164z M19.368,29.188c0-2.219,1.805-4.023,4.024-4.023h0.641    c0.552,0,1,0.447,1,1v27.643c0,0.554-0.448,1-1,1h-0.641c-2.219,0-4.024-1.806-4.024-4.024V29.188z" />
                </Icon>
                <Text pl={4} fontWeight={500}>
                  Add work
                </Text>
              </Row>
              <Icon viewBox="0 0 16 16" color="grey" size={4}>
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
            <Divider borderColor="gray.500" borderWidth="0.2" />
            <Row px={4} py={1}>
              <Text color="blue.500" fontWeight="400">
                More saved places.
              </Text>
            </Row>
            <Box>
              <Divider borderColor="gray.500" borderWidth="0.2" />
              <Row pt={8} pb={3} px={2} bg="gray.200" pl={4}>
                <Text>Trusted Contacts</Text>
              </Row>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
            </Box>
            <Row
              px={4}
              justifyContent="space-between"
              py={2}
              alignItems="center"
            >
              <Row alignItems="center">
                <Icon viewBox="0 0 352.644 352.644" color="black" size={6}>
                  <Path d="M324.478,51.943L177.985,0.285c-1.076-0.38-2.25-0.38-3.326,0L28.166,51.943c-1.999,0.705-3.337,2.595-3.337,4.715  c0,52.278,13.834,112.711,37.955,165.805c19.567,43.069,54.751,100.519,111.248,129.625c0.719,0.37,1.504,0.555,2.29,0.555  c0.786,0,1.571-0.185,2.29-0.555c56.497-29.106,91.681-86.556,111.248-129.625c24.121-53.094,37.955-113.527,37.955-165.805  C327.815,54.538,326.477,52.648,324.478,51.943z M236.322,222.07h-120c-2.549,0-4.615-2.066-4.615-4.615  c0-31.84,22.326-41.677,34.321-46.961c2.31-1.018,5.394-2.376,6.478-3.226c0.269-3.704-1.259-5.735-4.534-9.705  c-4.518-5.476-10.703-12.974-10.703-29.501c0-28.058,14.965-45.487,39.054-45.487c24.089,0,39.053,17.429,39.053,45.487  c0,16.527-6.186,24.026-10.702,29.501c-3.276,3.971-4.804,6.001-4.535,9.705c1.084,0.85,4.168,2.208,6.479,3.225  c11.994,5.285,34.321,15.121,34.321,46.962C240.937,220.003,238.871,222.07,236.322,222.07z" />
                </Icon>
                <Text pl={4} fontWeight={400}>
                  Manage trusted contacts
                </Text>
              </Row>
              <Icon viewBox="0 0 16 16" color="grey" size={4}>
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
            <Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
              <Row pt={3} pb={8} px={2} bg="gray.200" pl={4}>
                <Text fontSize={12}>
                  Share your trip status with family and friends in a single tap
                </Text>
              </Row>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
            </Box>
            <Row
              px={4}
              justifyContent="space-between"
              py={2}
              alignItems="center"
            >
              <Box>
                <Text fontWeight={400} mb={1}>
                  Safety
                </Text>
                <Text color="gray.700" pr={2}>
                  Control your safety settings including RideCheck notifications
                </Text>
              </Box>
              <Icon viewBox="0 0 16 16" color="grey" size={4}>
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
            <Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
              <Box py={4} bg="gray.200"></Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
            </Box>
            <Row
              px={4}
              justifyContent="space-between"
              py={2}
              alignItems="center"
            >
              <Box>
                <Text fontWeight={400} mb={1}>
                  Privacy
                </Text>
                <Text color="gray.700">Manage the data you share with us.</Text>
              </Box>
              <Icon viewBox="0 0 16 16" color="grey" size={4}>
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
            <Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
              <Box py={4} bg="gray.200"></Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
            </Box>
            <Row
              px={4}
              justifyContent="space-between"
              py={2}
              alignItems="center"
            >
              <Box>
                <Text fontWeight={400} mb={1}>
                  Security
                </Text>
                <Text color="gray.700" pr={2}>
                  Control your account security with 2-step verification and
                  more
                </Text>
              </Box>
              <Icon viewBox="0 0 16 16" color="grey" size={4}>
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
            <Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
              <Box py={4} bg="gray.200"></Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
            </Box>
            <Row px={4} py={2}>
              <Text color="red.600">Sign out</Text>
            </Row>
            <Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
              <Box py={8} bg="gray.200"></Box>
              <Divider borderColor="gray.500" borderWidth="0.2" pt={0.5} />
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </>
  );
}
