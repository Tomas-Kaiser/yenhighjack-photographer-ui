import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { photosBasedAlbum } from "../assets/photos";
import PhotoGrid from "./PhotoGrid";
import { useContext, useEffect } from "react";
import NavBarActiveContext from "../state-management/Contexts/NavBarActiveContext";
import { useTranslation } from "react-i18next";

const AlbumPage = () => {
  const { t } = useTranslation();
  const context = useContext(NavBarActiveContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (context.active !== "albums") context.setActive("albums");
  }, []);

  const params = useParams();
  if (!params.id) return null;

  const handleClickHome = () => {
    context.setActive("home");
    window.location.href = "/";
  };

  const albumName = getAlbumName(+params.id);

  return (
    <>
      <ScrollRestoration />
      <Breadcrumb
        mt={20}
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
          <BreadcrumbLink as={Link} to="/albums" color="#176734">
            {t("albums")}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage color="#176734">
            Album
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <PhotoGrid
        heading={albumName}
        subHeading={t("subHeadingAlbumPage")}
        photos={photosBasedAlbum[+params.id].photos}
      />
    </>
  );

  function getAlbumName(id: number) {
    if (photosBasedAlbum[id].name === "Wedding") return t("wedding");
    if (photosBasedAlbum[id].name === "Portraits") return t("portraits");
    return photosBasedAlbum[id].name;
  }
};

export default AlbumPage;
