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
    cursor: 'pointer'
}

const PhotoGrid = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePhotoClick = (index: number) => {
        setCurrentIndex(index);
        // Open the modal
        onOpen();
    };

    const handleNextClick = () => {
        let isLastPhotoIndex = currentIndex === photos.length - 1;
        let newIndex = isLastPhotoIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <Box p={3} sx={outerBoxStyle}>
                {photos.map((photo, index) => (
                    <Box key={photo.path} id={photo.path} style={innerBoxStyle} onClick={() => handlePhotoClick(index)}>
                        <Image src={photo.path}></Image>
                    </Box>
                ))}
            </Box>

            {/* MODAL opens when user click on a photo */}
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'} isCentered>
                <ModalContent>
                    {/* <ModalHeader></ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody pt={12} justifyContent='center'>
                        <Image maxW='100%' src={photos[currentIndex].path}></Image>
                    </ModalBody>
                    <ModalFooter justifyContent='center'>
                        <Button colorScheme='green' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='green' mr={3} onClick={handleNextClick}>
                            Next
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default PhotoGrid