import { Center, VStack, Button, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import PhotoGrid from "./PhotoGrid";
import AlbumMenu from "./AlbumMenu";
import { photosBasedAlbum, topPhotos } from "../assets/photos";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  // Used to scroll to top of photos section
  const topPhotosRef = useRef<null | HTMLDivElement>(null);

  const [width, setWidth] = useState(window.innerWidth);
  const imgUrlSmallScreen = photosBasedAlbum[0].photos[0].path;
  const imgUrlBigScreen =
    "https://imagedelivery.net/nGg_6H5MpzveW4sWn4-OFg/bfe5d970-7db5-4a5d-f28a-6413cd365500/full";
  const imgSelected = width > 900 ? imgUrlBigScreen : imgUrlSmallScreen;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [imgSelected]);

  return (
    <Box
      style={{
        scrollBehavior: "smooth",
        overflowY: "scroll",
      }}
    >
      <Center
        key={imgSelected}
        style={{
          background: `url(${imgSelected})`,
          height: `${width <= 950 ? "94vh" : "87vh"}`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 0%",
          backgroundSize: "cover",
        }}
      >
        <VStack pb="10px">
          <VStack p={1} position={"relative"} top={"155px"}>
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
            ></Box>
          </VStack>
        </VStack>
      </Center>
      <PhotoGrid
        scrollDown={topPhotosRef}
        heading={t("heading")}
        photos={topPhotos.photos}
      />
      <AlbumMenu />
    </Box>
  );
};

export default LandingPage;
