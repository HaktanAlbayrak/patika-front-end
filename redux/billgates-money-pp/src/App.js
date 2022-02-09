import './App.css';
import { Box, Center, ChakraProvider, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import { Card } from './components/Card';
import { useSelector } from 'react-redux';

function App() {

  const shoppingItem = useSelector(state => state.shopp.items)
  const mainCash = useSelector(state => state.shopp.mainCash)
  const totalExp = useSelector(state => state.shopp.totalExp)


  return (
    <div className="App">
      <ChakraProvider>


        <Center>
          <Box w="1000px" background={"#D0D0D0"}>

            <Center mt="20px" >
              <Box w="950px" bg="white" >
                <Center mt="20px" p="10px">
                  <Image borderRadius='full' boxSize='100px' src='https://shortest.link/2ZlT' />
                </Center>

                <Center mt="20px" p="10px">
                  <Heading > Spend Bill Gates' Money </Heading>
                </Center>
              </Box>
            </Center>

            <Center >
              <Box w="950px" h="70px" bg="green" color={"white"} mt="20px" >
                <Center >
                  <Heading mt="15px" > ${mainCash} </Heading>
                </Center>
              </Box>
            </Center>

            <Center >

              <Grid mt="10px" templateColumns='repeat(3, 1fr)' gap={6} p="10px">

                {
                  shoppingItem.map((item, index) => (
                    <Card key={index} item={item} />
                  ))
                }

              </Grid>
            </Center>

            <Center >
              <Box w="950px" h="300px" bg="white" mt="20px" mb="20px">
                <Center >
                  <Heading mt="15px" > Your Receipt </Heading>
                </Center>

                {
                  shoppingItem.map((item, index) => (
                    <Center >

                      <Flex>

                        <Box w="250px">
                          <Heading mt="15px" as='h6' size='xs'> {item.name} </Heading>
                        </Box>
                        <Box w="100px">
                          <Heading mt="15px" as='h6' size='xs'> x{item.buyNbr} </Heading>
                        </Box>
                        <Box w="25px">
                          <Heading mt="15px" as='h6' size='xs' color={"green"}> ${item.buyNbr * item.price} </Heading>
                        </Box>

                      </Flex>


                    </Center>

                  ))
                }

                <Center >

                  <Flex>

                    <Box w="350px">
                      <Heading mt="15px" as='h1' size='lg'> Total </Heading>
                    </Box>

                    <Box w="50px">
                    <Heading mt="15px" as='h1' size='lg'> ${totalExp} </Heading>
                    </Box>

                  </Flex>


                </Center>



              </Box>
            </Center>


          </Box>
        </Center>
      </ChakraProvider>
    </div>
  );
}

export default App;
