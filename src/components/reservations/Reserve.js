import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Reserve = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div style={{ backgroundColor: 'rgb(128, 158, 174)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container maxWidth="sm">
                <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '4px' }}>
                    <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                        Make a Reservation
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField label="Name" fullWidth margin="normal" />
                        <TextField label="Email" fullWidth margin="normal" />
                        <TextField label="Check-in Date" type="date" InputLabelProps={{ shrink: true, required: true }} fullWidth margin="normal" />
                        <TextField label="Check-out Date" type="date" InputLabelProps={{ shrink: true, required: true }} fullWidth margin="normal" />
                        <TextField label="Number of Guests" type="number" fullWidth margin="normal" />
                        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2, backgroundColor: 'rgb(128, 158, 174)' }}>
                            Submit Reservation
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Reserve;

