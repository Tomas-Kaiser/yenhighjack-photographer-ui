import { Box, Text, Image, Link } from "@chakra-ui/react";
import { photoCoverAlbums } from "../assets/photos";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import NavBarActiveContext from "../state-management/Contexts/NavBarActiveContext";
import Heading from "./common/Heading";

const hoverImgStyle = {
  cursor: "pointer",
  background: "rgba(0, 0, 0, 0.9)",
};

const outerBoxStyle = {
  display: "inline-flex",
  flexWrap: "wrap",
  justifyContent: "center",
  columnGap: "0px",
  width: "100%",
  background: "#fff",
};

const AlbumMenu = () => {
  const { t } = useTranslation();
  const context = useContext(NavBarActiveContext);

  const hanlderClick = (index: number) => {
    context.setActive("albums");
    window.location.href = `/albums/${index}`;
  };

  return (
    <>
      <Box id="albums"></Box>
      <Heading headingText={t("albums").toUpperCase()} />
      <Box sx={outerBoxStyle}>
        {photoCoverAlbums.map((photo, index) => (
          <Box
            key={photo.path}
            display="inline-flex"
            flexGrow={1}
            justifyContent={"center"}
          >
            <Link
              as="button"
              width={{ base: "100%" }}
              onClick={() => hanlderClick(index)}
            >
              <Box
                id={photo.path}
                position="relative"
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
                    <Text color="white">- {t("wedding").toUpperCase()} -</Text>
                  )}

                  {photo.name === "Portraits" && (
                    <Text color="white">
                      - {t("portraits").toUpperCase()} -
                    </Text>
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
