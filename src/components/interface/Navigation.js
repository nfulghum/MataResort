import React, { useState } from 'react';
import {
    Link,
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material'
import { NavLink } from 'react-router-dom';
import whitelogo from '../../assets/whitelogo.png';

const Navigation = () => {

    const [hovered, setHovered] = useState(false);

    const linkProps = {
        underline: 'hover',
        component: NavLink,
        color: '#ffffff'
    };

    const handleHover = () => {
        setHovered(true);
    }

    const handleLeave = () => {
        setHovered(false);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{
                backgroundColor: hovered ? 'rgba(255, 153, 102, 0.8)' : 'transparent',
                transition: 'background-color 0.3s ease',
                boxShadow: 'none',
            }}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <Toolbar>
                    <Link {...linkProps} to='/'>
                        <img src={whitelogo} alt="logo" style={{ width: '100px', height: '100px', margin: '0px 10px' }} />
                    </Link>
                    <Typography variant="h3" component="div" textAlign="center" color='#ffffff' sx={{ flexGrow: 1 }}>

                    </Typography>
                    <>
                        <Link sx={{ mr: 2 }} {...linkProps} to="reserve">Reservations</Link>
                        <Link sx={{ mr: 2 }} {...linkProps} to="story">Our Story</Link>
                        <Link sx={{ mr: 2 }} {...linkProps} to="contact">Contact</Link>
                    </>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation;