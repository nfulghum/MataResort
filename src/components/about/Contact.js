import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div style={{ backgroundColor: 'rgb(128, 158, 174)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container maxWidth="sm">
                <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '4px' }}>
                    <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                        Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField label="Name" fullWidth margin="normal" />
                        <TextField label="Email" fullWidth margin="normal" />
                        <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
                        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2, backgroundColor: 'rgb(128, 158, 174)' }}>
                            Send Message
                        </Button>
                    </form>
                    <div style={{ marginTop: '24px' }}>
                        <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
                            Contact Information
                        </Typography>
                        <Typography variant="body1" align="center" color="textPrimary">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body1" align="center" color="textPrimary">
                            Phone: 123-456-7890
                        </Typography>
                        <Typography variant="body1" align="center" color="textPrimary">
                            Address: 123 Street, City, State, Zip Code
                        </Typography>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
