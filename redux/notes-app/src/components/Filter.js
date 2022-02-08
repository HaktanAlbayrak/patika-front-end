import { Box, Center, filter, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/noteSlice';
import "../style.css"

export const Filter = () => {

    const dispatch = useDispatch();

    const [textSearch, setSearchText] = useState("")

    useEffect(() => {

        console.log(textSearch)
        dispatch(setFilter(textSearch))


    }, [textSearch]);

    return (
        <Center >
            <Box className="Filter">
                <Input onChange={(e) => setSearchText(e.target.value)} placeholder='Search...' size='md' borderRadius='20' background={"white"} />
            </Box>
        </Center>
    );
};
