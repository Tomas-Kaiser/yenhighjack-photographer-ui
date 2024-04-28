import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const About = () => {
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
                        About
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <div style={{ padding: '100px' }}>Under the construction</div>
        </>
    )
}

export default About