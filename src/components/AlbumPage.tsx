import { useParams } from "react-router-dom"
import { Text } from "@chakra-ui/react"
import { photosBasedAlbum } from "../assets/photos";
import PhotoGrid from "./PhotoGrid";


const AlbumPage = () => {
    const params = useParams();
    console.log('params: ', params.id);

    if (!params.id) return null;

    return (
        <>
            <Text mt={20}></Text>
            <PhotoGrid
                heading={photosBasedAlbum[+params.id].name}
                subHeading='Click on a photo to see it in full size'
                photos={photosBasedAlbum[+params.id].photos} />
        </>
    )
}

export default AlbumPage