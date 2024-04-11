import { Image, Box, useDisclosure, Modal, ModalContent, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import { useState } from "react"
import { useSwipeable } from "react-swipeable"

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
    background: 'linear-gradient(#CBD5E0 80%, #F7FAFC 100%)'
}

const innerBoxStyle = {
    display: 'inline-block',
    width: '100%',
    marginBottom: '1rem',
    cursor: 'pointer'
}

const rightArrowStyles = {
    position: "absolute",
    padding: "25px 0 25px 25px",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  } as React.CSSProperties;
  
  const leftArrowStyles = {
    position: "absolute",
    padding: "25px 25px 25px 0",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  } as React.CSSProperties;

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

    const handlePreviousClick = () => {
        let isFirstPhotoIndex = currentIndex === 0;
        let newIndex = isFirstPhotoIndex ? photos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const handlers = useSwipeable({
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true,
        onSwipedLeft: () => handlePreviousClick(),
        onSwipedRight: () => handleNextClick(),
        onSwipedUp: () => onClose(),
    });

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
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent bg='#0000002b'>
                    <ModalBody {...handlers} pt={12} justifyContent='center'>
                        <Image maxW='100%' src={photos[currentIndex].path}></Image>
                    </ModalBody>
                    <ModalCloseButton style={{boxShadow: '0 0 0 3px rgba(71, 71, 11, 0.6)'}} color='white' />
                    <ModalFooter justifyContent='center'>
                        <Box onClick={handlePreviousClick} style={leftArrowStyles}>
                            ❰
                        </Box>
                        <Box onClick={handleNextClick} style={rightArrowStyles}>
                            ❱
                        </Box>
                        {/* <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PhotoGrid