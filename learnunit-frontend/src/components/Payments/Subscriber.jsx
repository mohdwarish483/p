import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Subscriber = () => {
  return (
    <Stack width={'100vw'} className="backcolor">
      <Box bg={'rgb(12,120,254)'} width={'100%'} h={'60vh'} zIndex={'10'}>
        <VStack
          spacing={'6'}
          color={'white'}
          justifyContent={'flex-start'}
          width={'100%'}
          h={'100%'}
          pt={'32'}
        >
          <Heading fontWeight={'600'} fontSize={'6xl'}>
            Subscribe For Premium Courses
          </Heading>
          <Text fontSize={'xl'}>
            like a course? you are just one step away from accessing it
          </Text>
        </VStack>
      </Box>
      <Container
        minHeight={'90vh'}
        h={'auto'}
        mt={'-32'}
        zIndex={'200'}
        pb={'16'}
      >
        <VStack
          height={'full'}
          justifyContent={'center'}
          spacing={'2'}
          boxShadow={'xl'}
          width={'100%'}
          p={'16'}
          bg={'white'}
        >
          <VStack
            width={'full'}
            bg={'rgb(12,120,254)'}
            h={'30vh'}
            justifyContent={'center'}
            spacing={'6'}
            __css={{ clipPath: 'circle(30vh at 50% 0%)' }} // Modified clip path
          >
            <Heading textAlign={'center'}>
              Premium Plan
            </Heading>
            <Text
              color={'white'}
              textAlign={'center'}
              fontWeight={'bold'}
              fontSize={'2xl'}
            >
              Pro Pack - ₹399
            </Text>
          </VStack>

          <VStack textAlign={'center'} spacing={'6'} p={'6'}>
            <Text>
              You are just one step away from beginning your skills journey{' '}
              <Text>
                Join pro Pack today and get access to all premium content
              </Text>
            </Text>

            <Heading size={'md'}>{`₹399 Only`}</Heading>
            <Box>
              <Heading
                textTransform={'uppercase'}
                size={'sm'}
              >{`100% refund at cancellation`}</Heading>
              <Text fontSize={'xs'}>*Terms & Condition Apply</Text>
            </Box>
            <Link to={''} className="shady">
              <Button flex={1} size={'md'} colorScheme="messenger">
                Subscribe Now
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Stack>
  );
};

export default Subscriber;