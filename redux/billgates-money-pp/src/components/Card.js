import { Box, Button, Center, Flex, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShopping } from '../redux/shoppingSlice'

export const Card = ({ item }) => {

    const dispatch = useDispatch()

    const BuyFcn = () => {
        dispatch(setShopping([item,-1])); 
    }

    const SellFcn = () => {
        dispatch(setShopping([item,+1])); 
    }

    return (
        <div>
            <GridItem w='300px' h='310px' bg='white' >

                <Box>
                    <Center >
                        <Image mt="15px" width={"150px"} src={item.image} />
                    </Center>

                    <Center>
                        <Heading as='h5' size='sm'> {item.name} </Heading>
                    </Center>
                </Box>

                <Center>
                    <Heading color={'green'} > ${item.price} </Heading>
                </Center>

                <Center>
                    <Flex mt="15px">
                        <Button  disabled={item.buyNbr > 0 ? false:true} onClick={()=>SellFcn()} width='80px' mr="5px"> Sell </Button>
                        <Box border={"2px"} borderColor="green" borderRadius={"10px"} width='80px' mr="5px" bg='white'>
                            <Center mt="5px">
                                {item.number}
                            </Center>
                        </Box>
                        <Button onClick={()=>BuyFcn()} width='80px' bg='green.500' color='white'> Buy </Button>
                    </Flex>
                </Center>

            </GridItem>
        </div>
    )
}
