import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import NavBarActiveContext from "../state-management/Contexts/NavBarActiveContext";
import Heading from "./common/Heading";

const About = () => {
  const { t } = useTranslation();
  const line1 = t("aboutMeText.line1");
  const line2 = t("aboutMeText.line2");
  const line3 = t("aboutMeText.line3");
  const line4 = t("aboutMeText.line4");
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
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage color="#000">
            {t("about")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading headingText={t("aboutMe")} />
      <Text style={{ padding: "30px", color: "#000" }}>{line1}</Text>
      <Text style={{ padding: "30px", color: "#000" }}>{line2}</Text>
      <Text style={{ padding: "30px", color: "#000" }}>{line3}</Text>
      <Text style={{ padding: "30px", color: "#000" }}>{line4}</Text>
    </>
  );
};

export default About;
