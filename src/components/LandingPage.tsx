import { Center, VStack, Text, Button, Heading, Box } from "@chakra-ui/react";
import { useRef } from "react";

// import logo from "../assets/logo.webp"
import { FaArrowDown } from "react-icons/fa";
import PhotoGrid from "./PhotoGrid";
import AlbumMenu from "./AlbumMenu";
import { topPhotos } from "../assets/photos";
import { useTranslation } from "react-i18next";
import img from "./landingPhotoJanWide.jpg";
import Arrow from "./common/Arrow";

const LandingPage = () => {
  const { t } = useTranslation();
  // Used to scroll to top of photos section
  const topPhotosRef = useRef<null | HTMLDivElement>(null);

  return (
    <Box
      style={{
        scrollBehavior: "smooth",
        overflowY: "scroll",
      }}
    >
      <Center
        style={{
          background: `url(${img})`,
          height: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "65% 64%",
          backgroundSize: "cover",
        }}
      >
        <VStack pb="10px">
          {/* <Image src={logo} alt='logo' boxSize='150px' /> */}
          <VStack
            spacing={0}
            p={3}
            position={"relative"}
            top={{ base: "-10rem", "2xl": "0rem" }}
            left={{ "2xl": "-30rem" }}
            bg={"#ffffffbd"}
            style={{ fontFamily: "Ivar Text" }}
          >
            <Heading
              as="h1"
              color="#176734"
              fontSize={{ base: "2.6rem", md: "4.6rem" }}
              letterSpacing={{ base: "4px", md: "7px" }}
            >
              Yen Highjack
            </Heading>
            <Text
              color="#176734"
              fontSize={{ base: "1.2rem", md: "1.6rem" }}
              letterSpacing={{ base: "1.5px", md: "2px" }}
            >
              {t("welcomeSlogan")}
            </Text>
          </VStack>
          <VStack p={1} position={"relative"} top={"230px"}>
            <Button
              as="a"
              onClick={() =>
                topPhotosRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              bg={"white"}
              color="#176734"
              cursor="pointer"
              borderColor="#176734"
              size="lg"
              variant="outline"
              // _hover={{ shadow: "1px 1px gray" }}
              _hover={{ background: "#176734", color: "white" }}
            >
              {t("ctaBtn")}
            </Button>
            <Box
              cursor="pointer"
              pt={10}
              onClick={() =>
                topPhotosRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <Arrow />
            </Box>
          </VStack>
        </VStack>
      </Center>
      <PhotoGrid
        scrollDown={topPhotosRef}
        heading={t("heading")}
        subHeading={t("subHeading")}
        photos={topPhotos.photos}
      />
      <AlbumMenu />
    </Box>
  );
};

export default LandingPage;
