import {
  Image,
  Text,
  Box,
  useDisclosure,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  Heading,
  Divider,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const outerBoxStyle = {
  columnCount: { base: "2", lg: "3", xl: 4 },
  columnGap: "5px",
  padding: "0 12px",
  width: "100%",
  background: "#fff", // linear-gradient(#fff 80%, #F7FAFC 100%)
};

const innerBoxStyle = {
  display: "inline-block",
  width: "100%",
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  padding: "25px 0 25px 25px",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#ffffff7a",
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
  color: "#ffffff7a",
  zIndex: 1,
  cursor: "pointer",
} as React.CSSProperties;

interface Photo {
  path: string;
  name: string;
}

interface Props {
  heading: string;
  subHeading: string;
  photos: Photo[];
  scrollDown?: React.RefObject<HTMLDivElement>;
}

const PhotoGrid = ({ heading, subHeading, photos, scrollDown }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePhotoClick = (index: number) => {
    setCurrentIndex(index);
    // Open the modal
    onOpen();
  };

  const handleNextClick = () => {
    const isLastPhotoIndex = currentIndex === photos.length - 1;
    const newIndex = isLastPhotoIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePreviousClick = () => {
    const isFirstPhotoIndex = currentIndex === 0;
    const newIndex = isFirstPhotoIndex ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handlers = useSwipeable({
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePreviousClick(),
    onSwipedUp: () => onClose(),
  });

  return (
    <>
      <Center ref={scrollDown}>
        <Box w="90%" pb={1}>
          <Divider style={{ borderColor: "#176734" }} />
        </Box>
      </Center>
      <Heading
        id="topPhotos"
        as="h2"
        size="xl"
        textAlign="center"
        mt={5}
        mb={5}
        color="#176734"
        letterSpacing={{ base: "2px", md: "3px" }}
      >
        {heading.toUpperCase()}
      </Heading>
      <Text textAlign="center" color="#176734" mb={3}>
        {subHeading.toUpperCase()}
      </Text>
      <Center>
        <Box w="60%" mt="8px" pb={10}>
          <Divider style={{ borderColor: "#176734" }} />
        </Box>
      </Center>
      <Box sx={outerBoxStyle}>
        {photos.map((photo, index) => (
          <Box
            key={photo.path}
            id={photo.path}
            style={innerBoxStyle}
            onClick={() => handlePhotoClick(index)}
          >
            <Image src={photo.path}></Image>
          </Box>
        ))}
      </Box>

      {/* MODAL opens when user click on a photo */}
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent bg="#0000002b">
          <ModalBody {...handlers} pt={12} justifyContent="center">
            <Image maxW="100%" src={photos[currentIndex].path}></Image>
          </ModalBody>
          <ModalCloseButton
            style={{ boxShadow: "0 0 0 3px #ffffff00" }}
            color="#ffffff7a"
          />
          <ModalFooter justifyContent="center">
            <Box onClick={handlePreviousClick} style={leftArrowStyles}>
              ❰
            </Box>
            <Box onClick={handleNextClick} style={rightArrowStyles}>
              ❱
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PhotoGrid;
