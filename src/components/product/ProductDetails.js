import React from 'react';
import { Typography, Paper, Box, Rating } from '@mui/material';

const ProductReviews = () => {
    const reviews = [
        { id: 1, rating: 4.5, testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, rating: 5, testimonial: 'Sed in sapien aliquet, faucibus augue nec, semper purus.' },
        { id: 3, rating: 3.8, testimonial: 'Duis posuere libero vel augue ullamcorper.' },
        { id: 4, rating: 4.2, testimonial: 'Vestibulum lobortis metus id semper sagittis.' },
        { id: 5, rating: 4.9, testimonial: 'Nullam ut felis id massa lobortis cursus.' },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(128, 158, 174)', paddingTop: '250px', paddingBottom: '200px' }}>
            {reviews.map((review, index) => (
                <Paper
                    key={review.id}
                    elevation={3}
                    sx={{
                        padding: '20px',
                        marginTop: `${index * -50}px`,
                        marginLeft: '20px',
                        width: '200px',
                        height: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Rating value={review.rating} precision={0.5} readOnly />
                    <Typography variant="body1" sx={{ mt: 1, textAlign: 'center' }}>
                        "{review.testimonial}"
                    </Typography>
                </Paper>
            ))}
        </div>
    );
};

export default ProductReviews;

