import { Center, VStack, Button, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import AlbumMenu from "./AlbumMenu";
import { photosBasedAlbum } from "../assets/photos";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  // Used to scroll to album section
  const albumsRef = useRef<null | HTMLDivElement>(null);

  const [width, setWidth] = useState(window.innerWidth);
  const imgUrlSmallScreen = photosBasedAlbum[0].photos[0].path;
  const imgUrlBigScreen =
    "https://imagedelivery.net/nGg_6H5MpzveW4sWn4-OFg/5212bdeb-d8d7-4e1f-d97c-d89e0e1f4a00/full";
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
                albumsRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              bg={"white"}
              color="#000"
              cursor="pointer"
              borderColor="#000"
              size="lg"
              variant="outline"
              _hover={{ background: "#000", color: "white" }}
            >
              {t("ctaBtn")}
            </Button>
          </VStack>
        </VStack>
      </Center>
      <AlbumMenu scrollDown={albumsRef} />
    </Box>
  );
};

export default LandingPage;
