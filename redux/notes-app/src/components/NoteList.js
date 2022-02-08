import { Box, Center, Grid, } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { NoteItem } from './NoteItem';
import { useSelector } from 'react-redux';
import "../style.css"

export const NoteList = () => {

    const notes = useSelector(state => state.notes.items);
    const filter = useSelector(state => state.notes.filter);

    return <div>
        <Center>
            <Box className='NoteList'>

                <Grid templateColumns='repeat(5, 1fr)' gap={6}>

                    {
                        notes.map((note, index) => (

                            note.text.search(filter) != -1 || note.tag.search(filter) != -1? (<NoteItem key={index} note={note} />) : null

                        ))
                    }

                </Grid>

            </Box>
        </Center>
    </div>;
};


