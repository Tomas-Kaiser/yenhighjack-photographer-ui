import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  const line1 = t("aboutMeText.line1");
  const line2 = t("aboutMeText.line2");
  const line3 = t("aboutMeText.line3");
  const line4 = t("aboutMeText.line4");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb
        mt={20}
        pl={5}
        spacing="8px"
        separator={<FaChevronRight size="12px" color="#176734" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/" color="#176734">
            {t("home")}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage color="#176734">
            {t("about")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        mt={70}
        mb={5}
        color="#176734"
      >
        {t("aboutMe")}
      </Heading>
      <Text style={{ padding: "30px" }}>{line1}</Text>
      <Text style={{ padding: "30px" }}>{line2}</Text>
      <Text style={{ padding: "30px" }}>{line3}</Text>
      <Text style={{ padding: "30px" }}>{line4}</Text>
    </>
  );
};

export default About;
