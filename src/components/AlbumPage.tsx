import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { photoCoverAlbums, photosBasedAlbum } from "../assets/photos";
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
  });

  const params = useParams();
  // TODO: Instead of returning null, return a default value for the album
  if (!params.id) return null;

  const handleClickHome = () => {
    context.setActive("home");
    window.location.href = "/";
  };

  const getAlbumIndex = (urlName: string) => {
    if (urlName === "svatba" || urlName === "portréty")
      urlName = urlName === "svatba" ? "wedding" : "portraits";
    return photoCoverAlbums.findIndex((album) => album.urlName === urlName);
  };
  const id = getAlbumIndex(params.id);
  const albumName = getAlbumName(id);

  return (
    <>
      <ScrollRestoration />
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
          <BreadcrumbLink as={Link} to="/albums" color="#000">
            {t("albums")}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage color="#000">
            Album
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <PhotoGrid
        heading={albumName}
        subHeading={t("subHeadingAlbumPage")}
        photos={photosBasedAlbum[id].photos}
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
