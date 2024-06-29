import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { MdMailOutline, MdOutlineWorkHistory } from "react-icons/md";
import { FaCamera, FaFacebook, FaHome, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [active, setActive] = useState("home");
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [fbHover, setFbHover] = useState(false);
  const [instHover, setInstaHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [albumsHover, setAlbumsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t, i18n } = useTranslation();
  const darkGreen = "#176734";

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 500) {
      // If scrolling down, hide the navbar
      setShow(false);
    } else {
      // If scrolling up, show the navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  // Listen to window resize events in order to change the navbar layout
  useEffect(() => {
    const handleResize = () => {
      console.log("window.innerWidth: ", window.innerWidth);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    setActive("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAlbum = () => {
    setActive("albums");
    // window.scrollTo({ top: albumPositon, behavior: 'smooth' });
  };

  const fbIconStyle = {
    fontSize: "23px",
    cursor: "pointer",
    borderRadius: "10px",
    color: fbHover ? "#1877F2" : "#176734",
  };

  const instaIconStyle = {
    fontSize: "23px",
    cursor: "pointer",
    borderRadius: "10px",
    color: instHover ? "#d6249f" : "#176734",
  };

  const homeStyle = {
    padding: "12px",
    color: darkGreen,
    background: active === "home" || homeHover ? "#E2E8F0" : "inherit",
  };

  const aboutStyle = {
    padding: "15px",
    color: darkGreen,
    background: active === "about" || aboutHover ? "#E2E8F0" : "inherit",
  };

  const albumsStyle = {
    padding: "15px",
    color: darkGreen,
    background: active === "albums" || albumsHover ? "#E2E8F0" : "inherit",
  };

  const contactStyle = {
    padding: "15px",
    color: darkGreen,
    background: active === "contact" || contactHover ? "#E2E8F0" : "inherit",
  };

  return (
    <HStack
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "1",
        top: `${show ? "0" : "-50px"}`,
        transition: "top 1s",
      }}
      h="50px"
      bgColor={"gray.50"}
      justify="space-between"
      pl={10}
      pr={10}
    >
      <Flex>
        <Flex w="50px" justifyContent="center" alignItems="center">
          <Box
            as={Link}
            to="/"
            style={homeStyle}
            onClick={() => scrollToTop()}
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
          >
            <FaHome style={{ fontSize: "25px" }} />
          </Box>
        </Flex>
        <Flex w="20px" justifyContent="center" alignItems="center">
          <Text color={darkGreen}>|</Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Box
            as="a"
            p="10px"
            cursor="pointer"
            href="https://www.facebook.com/share/jpVp8s9n6sw2aGfd"
            target="_blank"
            onMouseEnter={() => setFbHover(true)}
            onMouseLeave={() => setFbHover(false)}
          >
            <FaFacebook style={fbIconStyle} />
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Box
            as="a"
            p="10px"
            cursor="pointer"
            href="https://www.instagram.com/yenhighjack/?igsh=Yzl0eW1wMGkxN3po&utm_source=qr"
            target="_blank"
            onMouseEnter={() => setInstaHover(true)}
            onMouseLeave={() => setInstaHover(false)}
          >
            <FaInstagram style={instaIconStyle} />
          </Box>
        </Flex>
      </Flex>
      {width <= 900 ? (
        <Menu>
          <MenuButton
            style={{ color: darkGreen }}
            as={IconButton}
            aria-label="Options"
            icon={<GrMenu />}
            _hover={{ bg: "gray.200" }}
            _expanded={{ bg: "gray.200" }}
            _focusVisible={{ boxShadow: "none" }}
            variant="outline"
            onClick={() => setHamburgerActive(!hamburgerActive)}
          />
          <MenuList style={{ background: "#F7FAFC", color: darkGreen }}>
            <MenuItem
              bg={active === "home" ? "#E2E8F0" : "#F7FAFC"}
              _hover={{ bg: "#E2E8F0" }}
              as={Link}
              to="/"
              icon={<FaHome />}
              onClick={() => setActive("home")}
            >
              {t("home")}
            </MenuItem>
            <MenuItem
              bg={active === "albums" ? "#E2E8F0" : "#F7FAFC"}
              _hover={{ bg: "#E2E8F0" }}
              as={HashLink}
              to="/albums"
              icon={<FaCamera />}
              onClick={() => scrollToAlbum()}
            >
              {t("albums")}
            </MenuItem>
            <MenuItem
              bg={active === "about" ? "#E2E8F0" : "#F7FAFC"}
              _hover={{ bg: "#E2E8F0" }}
              as={Link}
              to="/about"
              icon={<MdOutlineWorkHistory />}
              onClick={() => setActive("about")}
            >
              {t("about")}
            </MenuItem>
            <MenuItem
              bg={active === "contact" ? "#E2E8F0" : "#F7FAFC"}
              _hover={{ bg: "#E2E8F0" }}
              as={Link}
              to="/contact"
              icon={<MdMailOutline />}
              onClick={() => setActive("contact")}
            >
              {t("contact")}
            </MenuItem>
            <MenuDivider />
            <MenuOptionGroup defaultValue="cz" title="Language" type="radio">
              <MenuItemOption
                closeOnSelect={false}
                value="cz"
                onClick={() => handleLanguageChange("cz")}
              >
                {" "}
                Czech
              </MenuItemOption>
              <MenuItemOption
                closeOnSelect={false}
                value="en"
                onClick={() => handleLanguageChange("en")}
              >
                English
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      ) : (
        <Box style={{ padding: "5px" }}>
          <HashLink
            to="/albums"
            smooth={true}
            style={albumsStyle}
            onClick={() => scrollToAlbum()}
            onMouseEnter={() => setAlbumsHover(true)}
            onMouseLeave={() => setAlbumsHover(false)}
          >
            {t("albums")}
          </HashLink>
          <Link
            to="/about"
            style={aboutStyle}
            onClick={() => setActive("about")}
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
          >
            {t("about")}
          </Link>
          <Link
            to="/contact"
            style={contactStyle}
            onClick={() => setActive("contact")}
            onMouseEnter={() => setContactHover(true)}
            onMouseLeave={() => setContactHover(false)}
          >
            {t("contact")}
          </Link>
        </Box>
      )}
    </HStack>
  );
};

export default NavBar;
