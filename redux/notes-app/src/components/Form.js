import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Circle, Flex, Spacer, Textarea, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/noteSlice';
import { dispatch } from '@reduxjs/toolkit'

export const Form = () => {

    const [color, setType] = useState("yellow")
    const [tag, setTag] = useState("")
    const [note, setNote] = useState("")
    const dispatch = useDispatch();

    const addNoteObject = () => {

        if (note != "") {
            const newNote = { color: color, tag: tag, text: note };
            dispatch(addNote(newNote))
        }
    }

    return (
        <>
            <Center>
                <Box className='Body'>

                    <Center mt="2">
                        <Box className='InputNote'>
                            <Textarea value={note} onChange={(e) => { setNote(e.target.value) }} focusBorderColor="white.500" resize={"none"} border={"none"} placeholder='Enter Your Note Here...' />
                        </Box>
                    </Center>

                    <Center >
                        <Box className='Footer' display={"flex"}>
                            <Box p="1">
                                <Circle className='Circle' bg='red' onClick={() => setType("red")}>
                                    {color == "red" ? <CheckIcon /> : null}
                                </Circle>
                            </Box>
                            <Box p="1">
                                <Circle className='Circle' bg='yellow' onClick={() => setType("yellow")}>
                                    {color == "yellow" ? <CheckIcon /> : null}
                                </Circle>
                            </Box>
                            <Box p="1">
                                <Circle className='Circle' bg='blue' onClick={() => setType("blue")}>
                                    {color == "blue" ? <CheckIcon /> : null}
                                </Circle>
                            </Box>
                            <Box p="1">
                                <Circle className='Circle' bg='green' onClick={() => setType("green")}>
                                    {color == "green" ? <CheckIcon /> : null}
                                </Circle>
                            </Box>
                            <Box p="1">
                                <Circle className='Circle' bg='orange' onClick={() => setType("orange")}>
                                    {color == "orange" ? <CheckIcon /> : null}
                                </Circle>
                            </Box>

                            <Spacer />

                            <Box className='InputName'>
                                <Input value={tag} onChange={(e) => { setTag(e.target.value) }} placeholder='Tag Name' size='md' borderRadius='20' background={"white"} />
                            </Box>

                            <Box>
                                <Button onClick={() => addNoteObject()} w="100px" colorScheme='cyan' borderRadius={20}> ADD</Button>
                            </Box>

                        </Box>
                    </Center>
                </Box>
            </Center>

        </>
    );
};
