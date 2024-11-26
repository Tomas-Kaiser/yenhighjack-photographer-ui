import {
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import NavBarActiveContext from "../state-management/Contexts/NavBarActiveContext";
import Heading from "./common/Heading";

const ContactPage = () => {
  const { t } = useTranslation();
  const context = useContext(NavBarActiveContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickHome = () => {
    context.setActive("home");
    window.location.href = "/";
  };

  return (
    <>
      <Breadcrumb
        mt={{ base: 100, md: 120, lg: 3 }}
        pl={5}
        spacing="8px"
        separator={<FaChevronRight size="12px" color="#000" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as="button" onClick={handleClickHome} color="#000">
            {t("home")}
          </BreadcrumbLink>
          {/* <BreadcrumbLink as={Link} to="/" color="#000">
            {t("home")}
          </BreadcrumbLink> */}
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage={true} color="#000">
            {t("contact")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading headingText={t("contactMe")} />
      <Flex
        p={{ base: 5, md: 8, lg: 12 }}
        mt={{ base: 5 }}
        direction="column"
        align="center"
        justify="center"
      >
        <Text pb={12} color="#000">
          {t("contactMeSubText")}
        </Text>
        <Box
          as="form"
          w={{ base: "280px", sm: "400px", md: "500px", lg: "750px" }}
          name="contact"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Box mb="3">
            <FormLabel color="#000">{t("yourName")}</FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              focusBorderColor="#000"
              isRequired={true}
            />
          </Box>
          <Box mb="3">
            <FormLabel color="#000">{t("yourEmail")}</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              focusBorderColor="#000"
              isRequired={true}
            />
          </Box>
          <Box mb="3">
            <FormLabel color="#000">{t("message")}</FormLabel>
            <Textarea
              id="message"
              name="message"
              focusBorderColor="#000"
              isRequired={true}
            />
          </Box>
          <Flex justify="center">
            <Button
              type="submit"
              bg="#000"
              _hover={{ bg: "#707070" }}
              style={{ width: "100%", color: "#fff" }}
            >
              Send
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ContactPage;
