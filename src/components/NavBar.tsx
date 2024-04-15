import { Box, Flex, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { GrMenu } from "react-icons/gr"
import { MdMailOutline, MdOutlineWorkHistory } from "react-icons/md"
import { FaFacebook, FaHome, FaInstagram } from "react-icons/fa"

import { Link } from "react-router-dom"

const NavBar = () => {
    const [active, setActive] = useState('home')
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [fbHover, setFbHover] = useState(false);
    const [instHover, setInstaHover] = useState(false);
    const [homeHover, setHomeHover] = useState(false);
    const [aboutHover, setAboutHover] = useState(false);
    const [contactHover, setContactHover] = useState(false);
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

    const fbIconStyle = {
        fontSize: '20px',
        cursor: 'pointer',
        borderRadius: '10px',
        color: fbHover ? '#1877F2' : '#176734',
    }

    const instaIconStyle = {
        fontSize: '20px',
        cursor: 'pointer',
        borderRadius: '10px',
        color: instHover ? '#d6249f' : '#176734',
    }

    const homeStyle = {
        padding: '15px',
        color: darkGreen,
        background: active === 'home' || homeHover ? '#E2E8F0' : 'inherit' 
    }

    const aboutStyle = {
        padding: '15px',
        color: darkGreen,
        background: (active === 'about' || aboutHover ? '#E2E8F0' : 'inherit') 
    }

    const contactStyle = {
        padding: '15px',
        color: darkGreen,
        background: (active === 'contact' || contactHover ? '#E2E8F0' : 'inherit')
    }

    return (
        <HStack style={{ position: 'absolute', width: '100%' }} h='50px' bgColor={'gray.50'} justify='space-between' pl={10} pr={10}>
            {/* <Text>Toggle</Text> */}
            <Flex>
                <Flex w='50px' justifyContent='center' alignItems='center'>
                    <Box
                        as={Link}
                        to='/'
                        style={homeStyle}
                        onClick={() => setActive('home')}
                        onMouseEnter={() => setHomeHover(true)}
                        onMouseLeave={() => setHomeHover(false)}
                    ><FaHome style={{ fontSize: '20px' }} />
                    </Box>
                </Flex>
                <Flex w='20px' justifyContent='center' alignItems='center'>
                    <Text color={darkGreen}>|</Text>
                </Flex>
                <Flex justifyContent='center' alignItems='center' >
                    <Box as='a' p='10px' cursor='pointer' href="https://www.facebook.com/share/jpVp8s9n6sw2aGfd" target="_blank"
                        onMouseEnter={() => setFbHover(true)}
                        onMouseLeave={() => setFbHover(false)}>
                        <FaFacebook style={fbIconStyle} />
                    </Box>
                </Flex>
                <Flex justifyContent='center' alignItems='center' >
                    <Box as='a' p='10px' cursor='pointer' href="https://www.instagram.com/yenhighjack/?igsh=Yzl0eW1wMGkxN3po&utm_source=qr" target="_blank"
                        onMouseEnter={() => setInstaHover(true)}
                        onMouseLeave={() => setInstaHover(false)}>
                        <FaInstagram style={instaIconStyle} />
                    </Box>
                </Flex>
            </Flex>

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
                <Link to='/about' style={aboutStyle} onClick={() => setActive('about')} onMouseEnter={() => setAboutHover(true)}
                        onMouseLeave={() => setAboutHover(false)}>About</Link>
                <Link to='/contact' style={contactStyle} onClick={() => setActive('contact')} onMouseEnter={() => setContactHover(true)}
                        onMouseLeave={() => setContactHover(false)}>Contact</Link>
            </Box>}
        </HStack >
    )
}

export default NavBar