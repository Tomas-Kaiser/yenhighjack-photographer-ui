import { Box, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { GrMenu } from "react-icons/gr"
import { MdMailOutline, MdOutlineWorkHistory } from "react-icons/md"
import { FaHome } from "react-icons/fa"

import { Link } from "react-router-dom"

const NavBar = () => {
    const [active, setActive] = useState('home')
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const darkGreen = '#176734';

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
        <HStack style={{ position: 'absolute', width: '100%' }} h='50px' bgColor={'gray.50'} justify='space-between' pl={10} pr={10}>
            {/* <Text>Toggle</Text> */}
            <Box
                as={Link}
                to='/'
                style={{ padding: '15px', color: darkGreen, background: active === 'home' ? '#E2E8F0' : 'inherit' }}
                onClick={() => setActive('home')}
            ><FaHome style={{ fontSize: '20px' }} /></Box>

            {width <= 900 ? <Menu>
                <MenuButton style={{ color: darkGreen }}
                    as={IconButton}
                    aria-label='Options'
                    icon={<GrMenu />}
                    _hover={{ bg: 'gray.200' }}
                    _expanded={{ bg: 'gray.200' }}
                    variant='outline'
                    onClick={() => setHamburgerActive(!hamburgerActive)}
                />
                <MenuList style={{ background: '#F7FAFC', color: darkGreen }}>
                    <MenuItem bg={active === 'home' ? '#E2E8F0' : '#F7FAFC'} _hover={{ bg: '#E2E8F0' }} as={Link} to='/' icon={<FaHome />} onClick={() => setActive('home')}>Home</MenuItem>
                    <MenuItem bg={active === 'about' ? '#E2E8F0' : '#F7FAFC'} _hover={{ bg: '#E2E8F0' }} as={Link} to='/about' icon={<MdOutlineWorkHistory />} onClick={() => setActive('about')}>About</MenuItem>
                    <MenuItem bg={active === 'contact' ? '#E2E8F0' : '#F7FAFC'} _hover={{ bg: '#E2E8F0' }} as={Link} to='/contact' icon={<MdMailOutline />} onClick={() => setActive('contact')}>Contact</MenuItem>
                </MenuList>
            </Menu> : <Box style={{ padding: '5px' }}>
                <Link to='/about' style={{ padding: '15px', color: darkGreen, background: active === 'about' ? '#E2E8F0' : 'inherit' }} onClick={() => setActive('about')}>About</Link>
                <Link to='/contact' style={{ padding: '15px', color: darkGreen, background: active === 'contact' ? '#E2E8F0' : 'inherit' }} onClick={() => setActive('contact')}>Contact</Link>
            </Box>}
        </HStack >
    )
}

export default NavBar