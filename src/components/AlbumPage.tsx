import { Box, Heading, Image } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { photosBasedAlbum } from "../assets/photos";

const outerBoxStyle = {
    columnCount: { base: '2', lg: '3', xl: 4 },
    columnGap: '5px',
    padding: '0 12px',
    width: '100%',
    background: '#fff'
}

const innerBoxStyle = {
    display: 'inline-block',
    width: '100%',
    cursor: 'pointer'
}


const AlbumPage = () => {
    const params = useParams();
    console.log('params: ', params.id);

    const handlePhotoClick = (index: number) => {
        console.log('clicked photo', index);
    }

    if (!params.id) return null;
    photosBasedAlbum[+params.id].photos.map(photo => console.log(photo));

    return (
        <>
            <Heading mt={20} as='h1'>{`This is an Album page for ${params.id}!`}</Heading>
            <Box sx={outerBoxStyle}>
                {photosBasedAlbum[+params.id].photos.map((photoPath, index) => (
                    <Box key={index} style={innerBoxStyle} onClick={() => handlePhotoClick(index)}>
                        <Image src={photoPath}></Image>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default AlbumPage