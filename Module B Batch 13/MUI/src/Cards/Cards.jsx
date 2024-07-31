import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Cards = ({ label, image, className }) => {
  return (
    <Card className={className} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
      <CardMedia component="img" height="180"  image={image} alt={label} />
      <CardContent>
        <Typography  fontSize={"16px"} component="div">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
