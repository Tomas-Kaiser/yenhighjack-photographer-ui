import { Button, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { GrMenu } from "react-icons/gr"
import { MdMailOutline, MdOutlineWorkHistory } from "react-icons/md"

import { Link } from "react-router-dom"

const NavBar = () => {
    const [hamburgerActive, setHamburgerActive] = useState(false);
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

            {width <= 900 ? <Menu>
                <MenuButton style={{ color: 'white' }}
                    as={IconButton}
                    aria-label='Options'
                    icon={<GrMenu />}
                    _hover={{ bg: '#235c41' }}
                    _expanded={{ bg: '#42b37e' }}
                    variant='outline'
                    onClick={() => setHamburgerActive(!hamburgerActive)}
                />
                <MenuList style={{ background: '#276749', color: 'white' }}>
                    <MenuItem bg='#276749' _hover={{ bg: '#235c41' }} as={Link} to='/about' icon={<MdOutlineWorkHistory />}>About</MenuItem>
                    <MenuItem bg='#276749' _hover={{ bg: '#235c41' }} as={Link} to='/contact' icon={<MdMailOutline />}>Contact</MenuItem>
                </MenuList>
            </Menu> : <div style={{ padding: '5px' }}>
                <Link to='/about' style={{ padding: '20px', color: 'white' }}>About</Link>
                <Link to='/contact' style={{ color: 'white' }}>Contact</Link>
            </div>}
        </HStack>
    )
}

export default NavBar