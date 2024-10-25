import { Box, Text, Image, Link } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { photoCoverAlbums } from "../assets/photos";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import HomeContext from "../state-management/Contexts/HomeContext";
import Heading from "./common/Heading";

const hoverImgStyle = {
  cursor: "pointer",
  background: "rgba(0, 0, 0, 0.9)",
};

const outerBoxStyle = {
  columnCount: { base: "1", sm: "2" },
  columnGap: "5px",
  padding: { sm: "0 12px" },
  width: "100%",
  background: "#fff",
};

const AlbumMenu = () => {
  const { t } = useTranslation();
  const context = useContext(HomeContext);

  const hanlderClick = (index: number) => {
    context.setActive("albums");
    window.location.href = `/albums/${index}`;
  };

  return (
    <>
      <Box id="albums"></Box>
      {/* <Center>
        <Box w="90%" pb={1} mt={70}>
          <Divider style={{ borderColor: "#176734" }} />
        </Box>
      </Center>
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        mb={5}
        mt="20px"
        color="#176734"
        letterSpacing={{ base: "2px", md: "3px" }}
      >
        {t("albums").toUpperCase()}
      </Heading>
      <Text textAlign="center" color="#176734" mb={3}>
        {t("albumSubText").toUpperCase()}
      </Text>
      <Center>
        <Box w="60%" pb={10} mt="8px">
          <Divider style={{ borderColor: "#176734" }} />
        </Box>
      </Center> */}
      <Heading
        headingText={t("albums").toUpperCase()}
        subHeadingText={t("albumSubText").toUpperCase()}
      />
      <Box sx={outerBoxStyle}>
        {photoCoverAlbums.map((photo, index) => (
          <Box
            key={photo.path}
            p={{ sm: "10px" }}
            display="flex"
            justifyContent={"center"}
          >
            <Link
              as="button"
              width={{ base: "100%", sm: "200px", md: "300px", lg: "350px" }}
              onClick={() => hanlderClick(index)}
            >
              <Box
                id={photo.path}
                position="relative"
                mb={3}
                _hover={{
                  "> div": {
                    opacity: 0.8,
                  },
                  cursor: "pointer",
                }}
              >
                <Image
                  src={photo.path}
                  objectFit="cover"
                  width="100%"
                  height="400px"
                  _hover={hoverImgStyle}
                ></Image>
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  backgroundColor="rgba(0, 0, 0, 0.5)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity="1"
                  transition="opacity 1s"
                >
                  {photo.name === "Wedding" && (
                    <Text color="white">- {t("wedding")} -</Text>
                  )}

                  {photo.name === "Portraits" && (
                    <Text color="white">- {t("portraits")} -</Text>
                  )}

                  {photo.name !== "Wedding" && photo.name !== "Portraits" && (
                    <Text color="white">- {photo.name} -</Text>
                  )}
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default AlbumMenu;
