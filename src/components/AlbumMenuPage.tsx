import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import AlbumMenu from "./AlbumMenu";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AlbumMenuPage = () => {
  const { t } = useTranslation();

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
            {t("albums")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <AlbumMenu />
    </>
  );
};

export default AlbumMenuPage;
