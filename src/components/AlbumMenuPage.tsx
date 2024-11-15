import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import AlbumMenu from "./AlbumMenu";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import NavBarActiveContext from "../state-management/Contexts/NavBarActiveContext";

const AlbumMenuPage = () => {
  const { t } = useTranslation();
  const context = useContext(NavBarActiveContext);

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
        separator={<FaChevronRight size="12px" color="#176734" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as="button" onClick={handleClickHome} color="#176734">
            {t("home")}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage color="#176734">
            {t("albums")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <AlbumMenu />
    </>
  );
};

export default AlbumMenuPage;
