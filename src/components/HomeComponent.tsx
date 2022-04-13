
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

import React from 'react';
import { TData } from '../shared/dishes';
import { LeadersData } from '../shared/leders';
import { PromotionsData } from '../shared/promotion';


function renderCard(image: string, name: string, description: string, designation: string | undefined) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                {designation && <Typography variant="body1" color="text.secondary">{designation}</Typography>}
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

function Home(props: { dish: TData, leader: LeadersData, promotion: PromotionsData }) {
    const dish = props.dish;
    const leader = props.leader;
    const promo = props.promotion;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h2'>
                    Home Page
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {renderCard(promo.image, promo.name, promo.description, undefined)}
            </Grid>
            <Grid item xs={4}>
                {renderCard(dish.image, dish.name, dish.description, undefined)}
            </Grid>
            <Grid item xs={4}>
                {renderCard(leader.image, leader.name, leader.description, leader.designation)}
            </Grid>

        </Grid>

    );
}

export default Home;   