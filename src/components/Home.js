import {Flex,Container,Heading,Stack,Text,Button,} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ListUser from './ListUsers';

const Home=()=> {
    return (
        
      <Container maxW={'5xl'}>
        <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
           Discover our{' '}
            <Text as={'span'} color={'orange.400'}>
            Users
            </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
            Never miss a user. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read his
            description every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
            <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            <Link id="link"  to='/users/'>Go to Users List </Link>
            </Button>
            
        </Stack>
        <Flex w={'full'}>
            
          </Flex>
        </Stack>
      </Container>
    );
  }

  export default Home