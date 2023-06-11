import React from 'react';
import { Container, Typography, } from '@mui/material';
import natureVid from '../../assets/explore.mp4';



const ProductHero = () => {


    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <video
                src={natureVid}
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
            <Container
                sx={{
                    mt: 85,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Typography variant="h4" style={{ color: 'rgba(255,255,255,0.6)' }} textAlign="center" sx={{ mt: 2 }}>
                    Nothin' Matas in Gorda, Rediscover Life's Simple Pleasures Away from the Daily Grind
                </Typography>
            </Container>
        </div>
    );
}
export default ProductHero;