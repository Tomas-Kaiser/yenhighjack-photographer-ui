import { Link, useParams } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"
import { photosBasedAlbum } from "../assets/photos";
import PhotoGrid from "./PhotoGrid";


const AlbumPage = () => {
    const params = useParams();
    console.log('params: ', params.id);

    if (!params.id) return null;

    return (
        <>
            <Breadcrumb mt={20} pl={5} spacing='8px' separator={<FaChevronRight size='12px' color='#176734' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/' color='#176734'>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink isCurrentPage color='#176734'>
                        Album
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <PhotoGrid
                heading={photosBasedAlbum[+params.id].name}
                subHeading='Click on a photo to see it in full size'
                photos={photosBasedAlbum[+params.id].photos} />
        </>
    )
}

export default AlbumPage