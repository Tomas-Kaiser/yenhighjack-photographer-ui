import { Image, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react"
import { useState } from "react"
import { SiAdafruit } from "react-icons/si"

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
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Box p={3} sx={outerBoxStyle}>
                {photos.map((photo) => (
                    <Box key={photo.path} id={photo.path} style={innerBoxStyle} onClick={() => handleBoxClick(photo.path)}>
                        <Image src={photo.path}></Image>
                    </Box>
                ))}
            </Box>

            {/* MODAL opens when user click on a photo */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{photoPath}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={photoPath}></Image>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default PhotoGrid