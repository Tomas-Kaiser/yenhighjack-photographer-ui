import { SimpleGrid, Image, Box } from "@chakra-ui/react"
import photo1 from "../../public/IMG_5122.jpg"
import photo2 from "../../public/IMG_5123.jpg"
// import photo3 from "../../public/IMG_5124.jpg"
// import photo4 from "../../public/IMG_5125.jpg"
import photo5 from "../../public/IMG_5126.jpg"
// import photo6 from "../../public/IMG_5127.jpg"
import photo7 from "../../public/IMG_5128.jpg"
import photo8 from "../../public/IMG_5129.jpg"
import photo9 from "../../public/IMG_5130.jpg"
import photo10 from "../../public/IMG_5131.jpg"
import photo11 from "../../public/IMG_5132.jpg"
import photo12 from "../../public/IMG_5133.jpg"
import photo13 from "../../public/IMG_5134.jpg"
import photo14 from "../../public/IMG_5135.jpg"
import photo15 from "../../public/IMG_5136.jpg"
import photo16 from "../../public/IMG_5137.jpg"
import photo17 from "../../public/IMG_5138.jpg"

const photos = [
    {
        path: '../../public/IMG_5122.jpg'
    },
    {
        path: '../../public/IMG_5123.jpg'
    },
    {
        path: '../../public/IMG_5124.jpg'
    },
    // {
    //     path: '../../public/IMG_5125.jpg'
    // },
    {
        path: '../../public/IMG_5126.jpg'
    },
    {
        path: '../../public/IMG_5126.jpg'
    },
    // {
    //     path: '../../public/IMG_5127.jpg'
    // },
    {
        path: '../../public/IMG_5128.jpg'
    },
    {
        path: '../../public/IMG_5129.jpg'
    },
    {
        path: '../../public/IMG_5130.jpg'
    },
    {
        path: '../../public/IMG_5131.jpg'
    },
    {
        path: '../../public/IMG_5132.jpg'
    },
    {
        path: '../../public/IMG_5133.jpg'
    },
    {
        path: '../../public/IMG_5134.jpg'
    },
    {
        path: '../../public/IMG_5135.jpg'
    },
    {
        path: '../../public/IMG_5136.jpg'
    },
    {
        path: '../../public/IMG_5137.jpg'
    },
    {
        path: '../../public/IMG_5138.jpg'
    },
]

const PhotoGrid = () => {
    photos.forEach((photo) => {
        console.log(photo.path)
    })



    console.log(photos)
    return (
        <SimpleGrid columns={3} spacing={2} padding='10px'>

            {photos.map((photo) => (
                <Box >
                    <Image src={photo.path}></Image>
                </Box>
            ))}

        </SimpleGrid>
    )
}

export default PhotoGrid