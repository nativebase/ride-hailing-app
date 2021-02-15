import * as React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Row,
  Input,
  Divider,
} from 'native-base';
import { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import Bottom from './Bottom';

export default function BottomBar() {
  return (
    <Box width='100%' bg='white' zIndex={2} bottom={0} position='absolute'>
      <Box width='100%' bg='primaryDark' borderRadius='5px' py={5} px={5}>
        <VStack space={2}>
          <Text py={1} color='white' fontSize={24} fontWeight={600}>
            Book UberGo Sedan
          </Text>
          <Text color='white' fontSize={18} fontWeight={500}>
            Enjoy a comfortable affordable ride with UberGo Sedan
          </Text>
          <Row justifyContent='space-between' alignItems='center'>
            <HStack space={2} alignItems={'center'}>
              <Text color='white' fontSize={20} fontWeight={600}>
                Book now
              </Text>

              <Icon viewBox='0 0 268.832 268.832' color='white' mt={1}>
                <Path d='M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5   c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678   c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z' />
              </Icon>
            </HStack>
            <Icon viewBox='1 -172 575.96023 575' color='white' size={10}>
              <Path d='M 240 86.890625 L 278.398438 86.890625 L 278.398438 106.09375 L 240 106.09375 Z M 240 86.890625 ' />
              <Path d='M 567.761719 58.1875 L 502.550781 48.875 C 490.660156 41.570312 478.320312 35.03125 465.597656 29.292969 C 423.582031 10.261719 377.980469 0.441406 331.851562 0.492188 L 320.523438 0.492188 C 266.085938 0.53125 212.519531 14.191406 164.707031 40.226562 L 131.796875 58.179688 C 93.273438 58.613281 55.492188 68.859375 22.023438 87.9375 C 8.421875 95.738281 0.0234375 110.210938 0 125.886719 L 0 182.890625 C 0 188.195312 4.296875 192.492188 9.601562 192.492188 L 41.835938 192.492188 C 52.320312 222.402344 85.066406 238.152344 114.976562 227.667969 C 131.441406 221.898438 144.382812 208.953125 150.152344 192.492188 L 406.636719 192.492188 C 417.121094 222.402344 449.867188 238.152344 479.777344 227.667969 C 496.238281 221.898438 509.183594 208.953125 514.953125 192.492188 L 518.398438 192.492188 C 519.621094 192.492188 520.832031 192.261719 521.96875 191.808594 L 553.0625 179.332031 C 566.953125 173.832031 576.050781 160.386719 576 145.453125 L 576 67.691406 C 576 62.917969 572.488281 58.867188 567.761719 58.1875 Z M 133.621094 180.972656 C 129.375 201.75 109.089844 215.152344 88.3125 210.90625 C 67.53125 206.660156 54.128906 186.375 58.375 165.59375 C 62.625 144.816406 82.910156 131.414062 103.6875 135.660156 C 121.566406 139.3125 134.402344 155.042969 134.398438 173.292969 C 134.398438 175.871094 134.136719 178.445312 133.621094 180.972656 Z M 307.199219 173.292969 L 153.597656 173.292969 C 153.597656 141.480469 127.8125 115.691406 96 115.691406 C 64.1875 115.691406 38.398438 141.480469 38.398438 173.292969 L 19.199219 173.292969 L 19.199219 125.886719 C 19.210938 117.09375 23.921875 108.972656 31.554688 104.605469 C 62.882812 86.71875 98.328125 77.304688 134.398438 77.292969 L 307.199219 77.292969 Z M 307.199219 58.09375 L 172.050781 58.09375 L 173.902344 57.082031 C 214.945312 34.777344 260.535156 22.132812 307.199219 20.113281 Z M 326.398438 19.691406 L 331.832031 19.691406 C 370.519531 19.648438 408.855469 26.992188 444.789062 41.332031 L 428.027344 58.09375 L 326.398438 58.09375 Z M 498.421875 180.972656 C 494.175781 201.75 473.890625 215.152344 453.109375 210.90625 C 432.332031 206.660156 418.929688 186.375 423.175781 165.59375 C 427.421875 144.816406 447.710938 131.414062 468.488281 135.660156 C 486.367188 139.3125 499.203125 155.042969 499.199219 173.292969 C 499.199219 175.871094 498.9375 178.445312 498.421875 180.972656 Z M 556.800781 86.890625 L 528 86.890625 L 528 106.09375 L 556.800781 106.09375 L 556.800781 145.453125 C 556.824219 152.527344 552.511719 158.894531 545.933594 161.492188 L 518.398438 172.550781 C 518.398438 171.667969 518.285156 170.792969 518.226562 169.910156 C 518.167969 169.027344 518.148438 167.992188 518.054688 167.03125 C 517.957031 166.070312 517.765625 165.109375 517.613281 164.152344 C 517.457031 163.191406 517.34375 162.230469 517.152344 161.359375 C 516.960938 160.484375 516.679688 159.515625 516.429688 158.601562 C 516.179688 157.691406 515.988281 156.769531 515.699219 155.875 C 515.414062 154.984375 515.066406 154.128906 514.742188 153.253906 C 514.414062 152.382812 514.117188 151.480469 513.78125 150.613281 C 513.445312 149.75 512.992188 148.964844 512.589844 148.148438 C 512.1875 147.332031 511.792969 146.4375 511.34375 145.613281 C 510.890625 144.789062 510.382812 144.085938 509.949219 143.320312 C 509.519531 142.550781 508.992188 141.675781 508.445312 140.890625 C 507.894531 140.101562 507.386719 139.480469 506.859375 138.769531 C 506.332031 138.058594 505.734375 137.222656 505.121094 136.484375 C 504.507812 135.746094 503.933594 135.167969 503.335938 134.5625 C 502.742188 133.960938 502.078125 133.144531 501.417969 132.472656 C 500.753906 131.800781 500.101562 131.269531 499.441406 130.675781 C 498.777344 130.082031 498.066406 129.378906 497.335938 128.753906 C 496.609375 128.132812 495.867188 127.652344 495.140625 127.105469 C 494.410156 126.558594 493.679688 125.972656 492.914062 125.460938 C 492.144531 124.953125 491.28125 124.503906 490.457031 123.964844 C 489.628906 123.425781 488.957031 123.003906 488.179688 122.59375 C 487.402344 122.179688 486.433594 121.746094 485.550781 121.324219 C 484.667969 120.902344 483.976562 120.527344 483.160156 120.183594 C 482.34375 119.835938 481.238281 119.472656 480.28125 119.128906 C 479.320312 118.78125 478.695312 118.511719 477.878906 118.253906 C 476.785156 117.917969 475.664062 117.675781 474.546875 117.398438 C 473.816406 117.226562 473.117188 116.996094 472.378906 116.84375 C 471.199219 116.601562 469.988281 116.46875 468.789062 116.292969 C 468.078125 116.199219 467.398438 116.042969 466.6875 115.976562 C 464.765625 115.785156 462.847656 115.679688 460.832031 115.679688 C 429.03125 115.710938 403.261719 141.480469 403.230469 173.28125 L 326.402344 173.28125 L 326.402344 77.289062 L 432 77.289062 C 434.546875 77.289062 436.988281 76.277344 438.785156 74.476562 L 463.679688 49.582031 C 474.128906 54.554688 484.289062 60.113281 494.113281 66.230469 C 495.246094 66.9375 496.511719 67.402344 497.835938 67.59375 L 556.800781 76.011719 Z M 556.800781 86.890625 ' />
            </Icon>
          </Row>
        </VStack>
      </Box>
      <Box bg='white' p={5}>
        <VStack space={3}>
          <InputComponent />
          <Row bg='white' p={3}>
            <Icon viewBox='0 0 277.329 277.329' color='gray.500' size={8}>
              <Path d='M78.399,161.33l-2.46,66.344l62.726-28.34l62.728,28.34l-2.462-66.344l41.116-54.091l-64.46-17.191l-36.569-56.027    L98.172,90.048l-60.755,17.367L78.399,161.33z M107.615,103.578l30.691-42.109l27.479,42.109l47.764,12.741l-30.417,40.014    l1.731,46.759l-46.199-20.871l-46.208,20.881l1.732-46.758L63.64,116.146L107.615,103.578z' />
              <Path d='M138.665,277.326c76.459,0,138.664-62.2,138.664-138.659S215.124,0.003,138.665,0.003C62.205,0.003,0,62.208,0,138.667    S62.205,277.326,138.665,277.326z M138.665,15.603c67.856,0,123.064,55.208,123.064,123.064    c0,67.857-55.208,123.06-123.064,123.06c-67.857,0-123.065-55.202-123.065-123.06C15.6,70.811,70.807,15.603,138.665,15.603z' />
            </Icon>

            <Box pl={4} pt={1}>
              <Text fontWeight={600} fontSize={18}>
                Saved places
              </Text>
            </Box>
          </Row>
          <Divider borderWidth={0.35} borderColor='gray.400' />
          <Row bg='white' p={2}>
            <Icon viewBox='0 0 512 512' color='gray.500' size={8}>
              <Path d='M341.476,338.285c54.483-85.493,47.634-74.827,49.204-77.056C410.516,233.251,421,200.322,421,166    C421,74.98,347.139,0,256,0C165.158,0,91,74.832,91,166c0,34.3,10.704,68.091,31.19,96.446l48.332,75.84    C118.847,346.227,31,369.892,31,422c0,18.995,12.398,46.065,71.462,67.159C143.704,503.888,198.231,512,256,512    c108.025,0,225-30.472,225-90C481,369.883,393.256,346.243,341.476,338.285z M147.249,245.945    c-0.165-0.258-0.337-0.51-0.517-0.758C129.685,221.735,121,193.941,121,166c0-75.018,60.406-136,135-136    c74.439,0,135,61.009,135,136c0,27.986-8.521,54.837-24.646,77.671c-1.445,1.906,6.094-9.806-110.354,172.918L147.249,245.945z     M256,482c-117.994,0-195-34.683-195-60c0-17.016,39.568-44.995,127.248-55.901l55.102,86.463    c2.754,4.322,7.524,6.938,12.649,6.938s9.896-2.617,12.649-6.938l55.101-86.463C411.431,377.005,451,404.984,451,422    C451,447.102,374.687,482,256,482z' />
              <Path d='M256,91c-41.355,0-75,33.645-75,75s33.645,75,75,75c41.355,0,75-33.645,75-75S297.355,91,256,91z M256,211    c-24.813,0-45-20.187-45-45s20.187-45,45-45s45,20.187,45,45S280.813,211,256,211z' />
            </Icon>

            <Box pl={4} pt={1}>
              <Text fontWeight={600} fontSize={18}>
                Set location on map
              </Text>
            </Box>
          </Row>
        </VStack>
      </Box>
      <Bottom />
    </Box>
  );
}

function InputComponent() {
  let navigation = useNavigation();
  return (
    <Input
      p={4}
      size='lg'
      variant='unstyled'
      w='100%'
      placeholder='Where to?'
      fontWeight={500}
      fontSize={20}
      placeholderTextColor='black'
      bg='primaryLight'
      InputRightElement={
        <Box bg='white' borderRadius='50px' p={2} px={3} mr={3}>
          <HStack space={2}>
            <Icon viewBox='0 0 24 24' color='black' size={5}>
              <Path d='M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M14.586,16l-3.293-3.293 C11.105,12.519,11,12.265,11,12V7c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v4.586l3,3c0.39,0.39,0.39,1.024,0,1.414l0,0 C15.61,16.39,14.976,16.39,14.586,16z' />
            </Icon>
            <Text fontWeight={600} fontSize={16}>
              Now
            </Text>
            <Icon viewBox='0 0 32 32' color='black' size={4} mt='2px'>
              <Path d='M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585  c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z' />
            </Icon>
          </HStack>
        </Box>
      }
      onFocus={() => {
        navigation.navigate('WhereTo');
      }}
    />
  );
}
