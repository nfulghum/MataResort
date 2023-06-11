import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import JeepCruisingImage from '../../assets/jeep-cruising.jpg';
import BayFishingImage from '../../assets/bay-fishing.jpg';
import BeachLoungingImage from '../../assets/beach-lounging.jpg';
import SpaImage from '../../assets/spa.jpg';

const InfoSection = () => {
    return (
        <div style={{ backgroundColor: 'rgb(128, 158, 174)', paddingTop: '200px', paddingBottom: '200px' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" sx={{ color: '#f7f7f7', mb: 4 }}>
                    Things to Do
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={3} sx={{
                            backgroundColor: '#f7f7f7', p: 2,
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}>
                            <img src={JeepCruisingImage} alt="Jeep Cruising" style={{ width: '100%' }} />
                            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                                Jeep Cruising on the Beach
                            </Typography>
                            <Typography variant="body2" align="center" sx={{ color: '#555555', mt: 2 }}>
                                Explore the beautiful coastline with a thrilling jeep adventure. Drive along the sandy shores and enjoy the scenic views.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={3} sx={{
                            backgroundColor: '#f7f7f7', p: 2,
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}>
                            <img src={BayFishingImage} alt="Bay Fishing" style={{ width: '100%' }} />
                            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                                Bay Fishing
                            </Typography>
                            <Typography variant="body2" align="center" sx={{ color: '#555555', mt: 2 }}>
                                Cast your line and catch some fish in the tranquil bay. Enjoy a relaxing fishing experience surrounded by nature.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={3} sx={{
                            backgroundColor: '#f7f7f7', p: 2,
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}>
                            <img src={BeachLoungingImage} alt="Beach Lounging" style={{ width: '100%' }} />
                            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                                Lounging on the Beach
                            </Typography>
                            <Typography variant="body2" align="center" sx={{ color: '#555555', mt: 2 }}>
                                Relax and unwind on the sandy beach. Soak up the sun, listen to the gentle waves, and let your worries drift away.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={3} sx={{
                            backgroundColor: '#f7f7f7', p: 2,
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}>
                            <img src={SpaImage} alt="Spa" style={{ width: '100%' }} />
                            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                                Spa
                            </Typography>
                            <Typography variant="body2" align="center" sx={{ color: '#555555', mt: 2 }}>
                                Indulge in a pampering spa experience. Relax your body and mind with rejuvenating treatments, massages, and therapies. Leave feeling refreshed and revitalized.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default InfoSection;
