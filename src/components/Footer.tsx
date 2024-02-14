import { VStack, Text } from "@chakra-ui/react"
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const date = new Date();

    return (
        <VStack justifyContent="center" p={3} bg="gray">
            <FaInstagram color="white" size={30} />
            <Text color="white">&copy; {date.getFullYear()} Tomas Kaiser</Text>
        </VStack>
    )
}

export default Footer