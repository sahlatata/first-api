
import axios from "axios"
import { useEffect, useState } from "react"

import {MdPhone,
    MdEmail,
    MdVideoLabel} from 'react-icons/md'
import { useParams } from "react-router-dom"

import {Box,Spinner, Button,Center, Flex,Heading,Image,Link,Stack,Text, VStack} from '@chakra-ui/react';

const User =()=>{
    
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=> console.log(err))
    },[])
    return(
        <div>
            {
                loading ? 

                <Spinner  m={250} thickness='4px' speed='0.65s' emptyColor='gray.200' color='orange.400' size='xl'/>
                : 
                <div>
<Center py={20}>
<Stack
        borderWidth="2px"
        borderRadius="lg"
        borderColor={'#ed8936'}
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} >
        <Image
            objectFit="cover"
            boxSize="100%"
            src={
            'https://uacosendai-edu.net/wp-content/uploads/2021/05/user-avatar.png'
            } />
        </Flex>

        <Stack
        flex={1}
        flexDirection="column"
        borderWidth="2px"
        borderRadius="lg"
        borderColor={'#ed8936'}
        justifyContent="center"
        alignItems="center"
        p={0}
        pt={2}>
        <Heading  color={'#ed8936'} fontSize={'3xl'} fontFamily={'body'} >
        {user.name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} size="md" mb={0}>
            {user.username}
        </Text>
        <Text
            textAlign={'center'}
            
            px={3}>
            {user.username} lives in the city of <br/>
            <Link href={'#'} color={'blue.400'}>
            #{user.address.city} 
            </Link>
            ,{user.address.street} ,{user.address.suite} 
        </Text>
        <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            justifyContent="center"
            alignItems="center">
                    <VStack pl={0} spacing={0} alignItems="flex-start">
                    <Button
                        size="md"
                        height="38px"
                        width="200px"
                        variant="ghost"
                        color={'gray.500'}
                        _hover={{ border: ' 1px solid #ed8936'  }}
                        leftIcon={<MdPhone color="#ed8936" size="20px" />}>
                        {user.phone}
                    </Button>
                    <Button
                        size="md"
                        height="38px"
                        width="200px"
                        variant="ghost"
                        color={'gray.500'}
                        _hover={{ border: '1px solid #ed8936' }}
                        leftIcon={<MdEmail color="#ed8936" size="20px" />}>
                        {user.email}
                    </Button>
                    <Button
                        size="md"
                        height="38px"
                        width="200px"
                        variant="ghost"
                        color={'gray.500'}
                        _hover={{ border: '1px solid #ed8936' }}
                        leftIcon={<MdVideoLabel color="#ed8936" size="20px" />}>
                     {user.website}
                    </Button>
                    </VStack>
        </Stack>
        </Stack>
</Stack>
    </Center>

                   
                </div>
            }
        </div>
    )
}
export default User 