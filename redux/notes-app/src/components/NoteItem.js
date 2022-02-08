import { Box, Center, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import "../style.css"
import { deleteNote } from '../redux/noteSlice';
import { useDispatch } from 'react-redux';


export const NoteItem = ({ note }) => {

  const [isOpen, setIsOpen] = React.useState(false)
  const dispatch = useDispatch();
  
  const onClose = () => {
    
    dispatch(deleteNote(note.id))
    setIsOpen(false)
  }
  const cancelRef = React.useRef()

  return <div>

    <GridItem w='100%'>
      <Center className='NoteItem' bg={note.color} onClick={() => setIsOpen(true)}>

        {note.tag}

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                {note.tag}
              </AlertDialogHeader>

              <AlertDialogBody>
                {note.text}
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Center>
    </GridItem>

  </div>;
};
