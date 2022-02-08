import { CheckIcon } from '@chakra-ui/icons';
import { Box, Heading, Center } from '@chakra-ui/react'
import { Input, Textarea, Button } from '@chakra-ui/react'
import { ChakraProvider, Circle, Flex, Spacer, } from '@chakra-ui/react'
import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { Header } from './components/Header';
import './App.css';
import { NoteList } from './components/NoteList';

function App() {
  return (
    <div className="App">
      <ChakraProvider>

        <Center p="20px">

          <Box background={"#548572"} w='1400px' h="800" >

            <Header />
            <Form />
            <Filter />
            <NoteList />

          </Box>
        </Center>

      </ChakraProvider>
    </div>


  );
}

export default App;
