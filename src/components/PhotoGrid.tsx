import { Image, Box, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react"
import { useState } from "react"

const photos = [
    {
        path: '/IMG_5130.webp'
    },
    {
        path: '/IMG_5131.webp'
    },
    {
        path: '/IMG_5132.webp'
    },
    {
        path: '/IMG_5133.webp'
    },
    {
        path: '/IMG_5134.webp'
    },
    // {
    //     path: '/IMG_5135.webp'
    // },
    {
        path: '/IMG_5136.webp'
    },
    {
        path: '/IMG_5137.webp'
    },
    {
        path: '/IMG_5138.webp'
    },
]

const outerBoxStyle = {
    columnCount: { base: '2', lg: '3', xl: 4 },
    columnGap: '1rem',
    width: '100%',
    background: 'grey'
}

const innerBoxStyle = {
    display: 'inline-block',
    width: '100%',
    marginBottom: '1rem',
}

const PhotoGrid = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [photoPath, setPhotoPath] = useState('');

    const handleBoxClick = (photoPath: string) => {

        console.log('Test: ', photoPath)
        setPhotoPath(photoPath);

        // Open the modal
        onOpen();
    };

    return (
        <>
            <Box p={3} sx={outerBoxStyle}>
                {photos.map((photo) => (
                    <Box key={photo.path} id={photo.path} style={innerBoxStyle} onClick={() => handleBoxClick(photo.path)}>
                        <Image src={photo.path}></Image>
                    </Box>
                ))}
            </Box>

            {/* MODAL opens when user click on a photo */}
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'} isCentered>
                <ModalContent>
                    <ModalHeader>{photoPath}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody justifyContent='center'>
                        <Image maxW='100%' src={photoPath}></Image>
                    </ModalBody>

                    <ModalFooter justifyContent='center'>
                        <Button colorScheme='green' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default PhotoGrid