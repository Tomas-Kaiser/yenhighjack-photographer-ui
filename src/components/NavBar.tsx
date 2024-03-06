import { HStack } from "@chakra-ui/react"

import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <HStack style={{ position: 'absolute', width: '100%' }} h='50px' bgColor={'green.700'} justify='space-between' pl={10} pr={10}>
            {/* <Text>Toggle</Text> */}
            <div style={{ padding: '5px' }}>
                <Link to='/' style={{ color: 'white' }}>Home</Link>
            </div>
            <div style={{ padding: '5px' }}>
                <Link to='/about' style={{ padding: '20px', color: 'white' }}>About</Link>
                <Link to='/contact' style={{ color: 'white' }}>Contact</Link>
            </div>
        </HStack>
    )
}

export default NavBar