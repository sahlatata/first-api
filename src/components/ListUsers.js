import axios from "axios"
import { useEffect, useState } from "react"
import { Box, Container,  Spinner,Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { ExternalLinkIcon } from "@chakra-ui/icons"
const ListUser =()=>{
const [users, setUsers]=useState([])
const [load,setLoad]=useState(false)

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>{setUsers(res.data)})
.then(()=>setLoad(true))
.catch((err)=>console.log(err))},[])
    

return(
<div>
<Container maxW='container.xl' >
<Box padding='5' bg='white' maxW='3xl'>
<Text  fontSize='35px' color={'orange.400'} p={2}> List of Users :</Text> 
{
load ? users.map((el)=>
<div>
<Box  borderRadius='md' w='70%'  borderWidth='2px'  borderColor={'orange.400'} p={1} m={1}>
<Text color={'#666666'} fontSize='lg'key={el.id}><Link to={`/users/${el.id}`}>{el.name}<ExternalLinkIcon  color={'orange.400'} mx='8px' /></Link></Text>
</Box>
</div>):
<Spinner  m={50} thickness='4px' speed='0.65s' emptyColor='gray.200' color='orange.400' size='xl'/>
} 
</Box>
    </Container>   
</div>
)
}
export default ListUser




    