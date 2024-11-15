import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { useContext, useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { MdMailOutline, MdOutlineWorkHistory } from "react-icons/md";
import {
  FaCamera,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBarActiveContext from "../state-management/Contexts/NavBarActiveContext";

const NavBar = () => {
  const navBarActiveContext = useContext(NavBarActiveContext);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [fbHover, setFbHover] = useState(false);
  const [instHover, setInstaHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [albumsHover, setAlbumsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [fixedNavBar, setFixedNavBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t, i18n } = useTranslation();
  const [navBg, setNavBg] = useState<string>("#f7fafcbf");
  const darkGreen = "#176734";
  const location = useLocation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const controlNavbar = () => {
    // Apply only when user is on the landing page
    if (location.pathname !== "/") {
      setNavBg("#f7fafc");
      return;
    }

    if (window.scrollY < 800) {
      // BG with opacity 75%
      setNavBg("#f7fafcbf");
    } else {
      setNavBg("#f7fafc");
    }

    if (window.scrollY > lastScrollY && window.scrollY > 500) {
      // If scrolling down, hide the navbar
      setShowNavBar(false);
      // setShowHeader(false);
      setFixedNavBar(true);
    } else {
      // If scrolling up, show the navbar
      setShowNavBar(true);
    }
    if (window.scrollY < 500) {
      setFixedNavBar(false);
      // setShowHeader(true);
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
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    navBarActiveContext.setActive("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAlbum = () => {
    navBarActiveContext.setActive("albums");
  };

  const socIconStyle = (socHover: boolean, hoverColor: string) => {
    return {
      fontSize: "23px",
      cursor: "pointer",
      borderRadius: "10px",
      color: socHover ? hoverColor : "#176734",
    };
  };

  const homeStyle = {
    padding: "12px",
    color:
      navBarActiveContext.active === "home" || homeHover
        ? "#06150c"
        : darkGreen,
  };

  const hoverMenuItemStyle = (pageName: string, hover: boolean) => {
    return {
      padding: "11px",
      borderRadius: "8px",
      color: darkGreen,
      background:
        navBarActiveContext.active === pageName || hover
          ? "#E2E8F0"
          : "inherit",
      fontWeight: "bold",
    };
  };

  return (
    <VStack bgColor={navBg}>
      {/* Helper box when navbar changes from fixed to relative to avoing skipping */}
      <Box
        height={"50px"}
        position={`${!fixedNavBar ? "fixed" : "relative"}`}
      ></Box>
      <HStack
        h={width <= 950 ? "50px" : "100px"}
        bgColor={navBg}
        justify="space-between"
        pl={10}
        pr={10}
        style={{
          position: `${fixedNavBar ? "fixed" : "relative"}`,
          width: "100%",
          zIndex: "2",
          top: `${showNavBar ? "0" : "-200px"}`,
          transition: `${showNavBar ? "top 1s" : "top 0s"}`,
        }}
      >
        {/* Left icons in navbar */}
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
              <FaFacebook style={socIconStyle(fbHover, "#1877F2")} />
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
              <FaInstagram style={socIconStyle(instHover, "#d6249f")} />
            </Box>
          </Flex>
        </Flex>
        {width > 950 && (
          <Box justifyItems={"center"}>
            <Heading
              as="h1"
              color="#176734"
              fontSize={{ base: "2.0rem", md: "2.5rem" }}
              letterSpacing={{ base: "4px", md: "7px" }}
            >
              {t("name")}
            </Heading>
            <Text
              color="#176734"
              fontSize={{ base: "1.0rem", md: "1.0rem" }}
              letterSpacing={{ base: "1.5px", md: "2px" }}
            >
              {t("welcomeSlogan")}
            </Text>
          </Box>
        )}
        {/* Hamburger menu  */}
        {width <= 766 ? (
          <Menu>
            <MenuButton
              style={{ color: darkGreen }}
              as={IconButton}
              aria-label="Options"
              icon={<GrMenu />}
              borderColor={darkGreen}
              _hover={{ bg: "gray.200" }}
              _expanded={{ bg: "gray.200" }}
              _focusVisible={{ boxShadow: "none" }}
              variant="outline"
              onClick={() => setHamburgerActive(!hamburgerActive)}
            />
            <MenuList style={{ background: "#F7FAFC", color: darkGreen }}>
              <MenuItem
                bg={
                  navBarActiveContext.active === "home" ? "#E2E8F0" : "#F7FAFC"
                }
                _hover={{ bg: "#E2E8F0" }}
                as={Link}
                to="/"
                icon={<FaHome />}
                onClick={() => navBarActiveContext.setActive("home")}
              >
                {t("home")}
              </MenuItem>
              <MenuItem
                bg={
                  navBarActiveContext.active === "albums"
                    ? "#E2E8F0"
                    : "#F7FAFC"
                }
                _hover={{ bg: "#E2E8F0" }}
                as={HashLink}
                to="/albums"
                icon={<FaCamera />}
                onClick={() => scrollToAlbum()}
              >
                {t("albums")}
              </MenuItem>
              <MenuItem
                bg={
                  navBarActiveContext.active === "about" ? "#E2E8F0" : "#F7FAFC"
                }
                _hover={{ bg: "#E2E8F0" }}
                as={Link}
                to="/about"
                icon={<MdOutlineWorkHistory />}
                onClick={() => navBarActiveContext.setActive("about")}
              >
                {t("about")}
              </MenuItem>
              <MenuItem
                bg={
                  navBarActiveContext.active === "contact"
                    ? "#E2E8F0"
                    : "#F7FAFC"
                }
                _hover={{ bg: "#E2E8F0" }}
                as={Link}
                to="/contact"
                icon={<MdMailOutline />}
                onClick={() => navBarActiveContext.setActive("contact")}
              >
                {t("contact")}
              </MenuItem>
              <MenuDivider />
              <MenuOptionGroup
                defaultValue={i18n.resolvedLanguage as string}
                title="Language"
                type="radio"
              >
                <MenuItemOption
                  bg={"#F7FAFC"}
                  _hover={{ bg: "#E2E8F0" }}
                  value="cz"
                  onClick={() => handleLanguageChange("cz")}
                >
                  Czech
                </MenuItemOption>
                <MenuItemOption
                  bg={"#F7FAFC"}
                  _hover={{ bg: "#E2E8F0" }}
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
              style={hoverMenuItemStyle("albums", albumsHover)}
              onClick={() => scrollToAlbum()}
              onMouseEnter={() => setAlbumsHover(true)}
              onMouseLeave={() => setAlbumsHover(false)}
            >
              {t("albums")}
            </HashLink>
            <Link
              to="/about"
              style={hoverMenuItemStyle("about", aboutHover)}
              onClick={() => navBarActiveContext.setActive("about")}
              onMouseEnter={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              style={hoverMenuItemStyle("contact", contactHover)}
              onClick={() => navBarActiveContext.setActive("contact")}
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              {t("contact")}
            </Link>
            <Menu>
              <MenuButton
                style={{ color: darkGreen }}
                mb="4px"
                as={IconButton}
                aria-label="Options"
                icon={<FaGlobe />}
                _hover={{ bg: "gray.200" }}
                _expanded={{ bg: "gray.200" }}
                _focusVisible={{ boxShadow: "none" }}
                variant="ghost"
                onClick={() => setHamburgerActive(!hamburgerActive)}
              />
              <MenuList style={{ background: "#F7FAFC", color: darkGreen }}>
                <MenuOptionGroup
                  defaultValue={i18n.resolvedLanguage as string}
                  title="Language"
                  type="radio"
                >
                  <MenuItemOption
                    value="cz"
                    onClick={() => handleLanguageChange("cz")}
                  >
                    {" "}
                    Czech
                  </MenuItemOption>
                  <MenuItemOption
                    value="en"
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>
        )}
      </HStack>
      {width <= 950 && (
        <Box
          style={{
            position: "relative",
            background: `${navBg}`,
            width: "100%",
            zIndex: "1",
            top: "50px",
            transition: "top 1s",
            textAlign: "center",
          }}
          pt={1}
          pb={5}
        >
          <Heading
            as="h1"
            color="#176734"
            fontSize={{ base: "2.0rem", md: "3.1rem" }}
            letterSpacing={{ base: "4px", md: "7px" }}
          >
            {t("name")}
          </Heading>
          <Text
            color="#176734"
            fontSize={{ base: "1.0rem", md: "1.1rem" }}
            letterSpacing={{ base: "1.5px", md: "2px" }}
          >
            {t("welcomeSlogan")}
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default NavBar;
