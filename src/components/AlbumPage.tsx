import { ScrollRestoration, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { photosBasedAlbum } from "../assets/photos";
import PhotoGrid from "./PhotoGrid";
import { useContext, useEffect } from "react";
import HomeContext from "../state-management/Contexts/HomeContext";

const AlbumPage = () => {
  const context = useContext(HomeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  if (!params.id) return null;

  const handleClickHome = () => {
    context.setActive("home");
    window.location.href = "/";
  };

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
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage color="#176734">
            Album
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <PhotoGrid
        heading={photosBasedAlbum[+params.id].name}
        subHeading="Click on a photo to see it in full size"
        photos={photosBasedAlbum[+params.id].photos}
      />
    </>
  );
};

export default AlbumPage;
