import { HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { GrMenu } from "react-icons/gr"
import { MdMailOutline, MdOutlineWorkHistory } from "react-icons/md"

import { Link } from "react-router-dom"

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <HStack style={{ position: 'absolute', width: '100%' }} h='50px' bgColor={'green.700'} justify='space-between' pl={10} pr={10}>
            {/* <Text>Toggle</Text> */}
            <div style={{ padding: '5px' }}>
                <Link to='/' style={{ color: 'white' }}>Home</Link>
            </div>

            {width <= 550 ? <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<GrMenu />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem as={Link} to='/about' icon={<MdOutlineWorkHistory />}>About</MenuItem>
                    <MenuItem as={Link} to='/contact' icon={<MdMailOutline />}>Contact</MenuItem>
                </MenuList>
            </Menu> : <div style={{ padding: '5px' }}>
                <Link to='/about' style={{ padding: '20px', color: 'white' }}>About</Link>
                <Link to='/contact' style={{ color: 'white' }}>Contact</Link>
            </div>}
        </HStack>
    )
}

export default NavBar