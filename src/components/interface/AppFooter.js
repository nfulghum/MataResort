import React from 'react';
import {
    Box,
    Grid,
    Container,
    Typography,
    IconButton,
    Link
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const AppFooter = () => {
    return (
        <Box
            component="footer"
            sx={{

                left: 0,
                bottom: 0,
                width: '100%',
                bgcolor: '#ff9966',
                padding: '10px',
            }}
        >
            <Container>
                <Grid container alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item>
                        <Link href="https://www.linkedin.com/in/nfulghum/" target="_blank" rel="noopener">
                            <IconButton>
                                <LinkedInIcon style={{ fontSize: 50 }} />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://github.com/nfulghum" target="_blank" rel="noopener">
                            <IconButton>
                                <GitHubIcon style={{ fontSize: 50 }} />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">
                            This is a fake company and its purpose is to show web dev skill set.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AppFooter;