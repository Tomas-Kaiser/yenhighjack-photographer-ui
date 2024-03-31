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
            <Box
                as={Link}
                to='/'
                style={{ padding: '15px', color: 'white', background: active === 'home' ? '#42b37e' : 'inherit' }}
                onClick={() => setActive('home')}
            ><FaHome style={{ color: 'white', fontSize: '20px' }} /></Box>

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
                    <MenuItem bg={active === 'home' ? '#42b37e' : '#276749'} _hover={{ bg: '#235c41' }} as={Link} to='/' icon={<FaHome />} onClick={() => setActive('home')}>Home</MenuItem>
                    <MenuItem bg={active === 'about' ? '#42b37e' : '#276749'} _hover={{ bg: '#235c41' }} as={Link} to='/about' icon={<MdOutlineWorkHistory />} onClick={() => setActive('about')}>About</MenuItem>
                    <MenuItem bg={active === 'contact' ? '#42b37e' : '#276749'} _hover={{ bg: '#235c41' }} as={Link} to='/contact' icon={<MdMailOutline />} onClick={() => setActive('contact')}>Contact</MenuItem>
                </MenuList>
            </Menu> : <div style={{ padding: '5px' }}>
                <Link to='/about' style={{ padding: '15px', color: 'white', background: active === 'about' ? '#42b37e' : 'inherit' }} onClick={() => setActive('about')}>About</Link>
                <Link to='/contact' style={{ padding: '15px', color: 'white', background: active === 'contact' ? '#42b37e' : 'inherit' }} onClick={() => setActive('contact')}>Contact</Link>
            </div>}
        </HStack >
    )
}

export default NavBar