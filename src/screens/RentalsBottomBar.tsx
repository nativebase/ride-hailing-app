import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Box, Icon, Text, Row, Image, Divider, Button } from 'native-base';
import { Path } from 'react-native-svg';
import BottomSheet from '@gorhom/bottom-sheet';

import ChooseRide from './ChooseRide';

export default function RentalsBottomBar() {
  const [bottom, setBottom] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '90%'], []);

  const handleSheetChanges = useCallback((index: number) => {
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
        <ChooseRide bottom={bottom} />
      </BottomSheet>
      <Box bottom={0} position='absolute' left={0} right={0}>
        <Divider borderColor='gray.500' borderWidth={0.5} />
        <Row bg='gray.500' px={6} py={3}>
          <Image
            alt='car-image'
            size={12}
            source={require('../../assets/cash.png')}
          />
          <Row
            justifyContent='space-between'
            width='90%'
            space={5}
            pl={5}
            pt={1}
          >
            <Text fontWeight={500} fontSize={16} pt={3}>
              Cash
            </Text>
            <Icon viewBox='0 0 16 16' mt='5px' size={3} color='black'>
              <Path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z' />
            </Icon>
          </Row>
        </Row>
        <Box bg='black'>
          <Button
            color='white'
            px={4}
            height={20}
            fontSize={18}
            variant='solid'
            bg='black'
          >
            Confirm UberGo Rentals
          </Button>
        </Box>
      </Box>
    </>
  );
}
