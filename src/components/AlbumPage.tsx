import { Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

const AlbumPage = () => {
    const params = useParams();
    console.log(params);

    return (
        <Heading mt={20} as='h1'>{`This is an Album page for ${params.id}!`}</Heading>
    )
}

export default AlbumPage