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

interface Props {
  scrollDown?: React.RefObject<HTMLDivElement>;
}

const AlbumMenu = ({ scrollDown }: Props) => {
  const { t } = useTranslation();
  const context = useContext(NavBarActiveContext);

  const hanlderClick = (urlName: string) => {
    context.setActive("albums");
    window.location.href = `/albums/${getAlbumUrlNameBasedLang(urlName)}`;
  };

  function getAlbumUrlNameBasedLang(urlName: string) {
    if (urlName === "wedding") return t("wedding").toLowerCase();
    if (urlName === "portraits") return t("portraits").toLowerCase();
    return urlName;
  }

  return (
    <>
      <Box id="albums" ref={scrollDown}></Box>
      <Heading headingText={t("albums").toUpperCase()} />
      <Box sx={outerBoxStyle}>
        {photoCoverAlbums.map(({ path, name, subName, urlName }) => (
          <Box
            key={path}
            display="inline-flex"
            flexGrow={1}
            justifyContent={"center"}
          >
            <Link
              as="button"
              width={{ base: "100%" }}
              onClick={() => hanlderClick(urlName)}
            >
              <Box
                id={path}
                position="relative"
                _hover={{
                  "> div": {
                    opacity: 0.8,
                  },
                  cursor: "pointer",
                }}
              >
                <Image
                  src={path}
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
                  <Box>
                    {name === "Wedding" && (
                      <Text color="white">
                        - {t("wedding").toUpperCase()} -
                      </Text>
                    )}

                    {name === "Portraits" && (
                      <Text color="white">
                        - {t("portraits").toUpperCase()} -
                      </Text>
                    )}

                    {name !== "Wedding" && name !== "Portraits" && (
                      <Text color="white">- {name.toUpperCase()} -</Text>
                    )}
                    {subName && (
                      <Text color="white" fontSize={".8rem"}>
                        {subName.toUpperCase()}
                      </Text>
                    )}
                  </Box>
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
