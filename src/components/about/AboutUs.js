import React from 'react'
import { Container, Typography } from '@mui/material';

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: 'rgb(128, 158, 174)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h4" align="center" sx={{ color: '#f7f7f7', mb: 4 }}>
                    Our Story
                </Typography>
                <Typography variant="body1" sx={{ color: '#f7f7f7' }}>
                    At Matagorda Island Inc, our journey began with a vision of creating a vacation-style resort that offers a carefree escape from the hustle and bustle of city life. We wanted to provide a place where guests could immerse themselves in the tranquility of nature and experience the ultimate relaxation.
                </Typography>
                <Typography variant="body1" sx={{ color: '#f7f7f7', mt: 2 }}>
                    Inspired by the captivating beauty of the coastal surroundings, we have meticulously crafted every aspect of our resort to ensure an unforgettable experience for our guests. From the luxurious accommodations to the stunning beachfront views, every detail has been thoughtfully designed to create a haven of relaxation and serenity.
                </Typography>
                <Typography variant="body1" sx={{ color: '#f7f7f7', mt: 2 }}>
                    Our team is dedicated to providing exceptional service and personalized attention to ensure that your stay with us is nothing short of extraordinary. Whether you choose to indulge in jeep cruising on the beach, enjoy bay fishing, lounge on the pristine sands, or pamper yourself at our spa, we are here to make your vacation dreams come true.
                </Typography>
                <Typography variant="body1" sx={{ color: '#f7f7f7', mt: 2 }}>
                    Join us at Matagorda Island Inc and let us be your gateway to an unforgettable vacation experience. Discover the perfect blend of relaxation, adventure, and coastal charm as you create timeless memories in this idyllic paradise.
                </Typography>
                <Typography variant="h6" textAlign='center' sx={{ color: '#f7f7f7', mt: 2 }}>
                    And remember Nothin' Matas in Gorda.
                </Typography>
            </Container>
        </div>
    )
}

export default AboutUs;