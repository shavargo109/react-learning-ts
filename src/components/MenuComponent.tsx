import { ConstructionRounded } from '@mui/icons-material';
import { Box, Grid, Typography, ButtonBase } from '@mui/material';
import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { TData } from '../shared/dishes';
export class Menu extends Component<{ dishes: TData[] }, { selectedDish: TData | null }> {
    constructor(props: { dishes: TData[] }) {
        super(props);
        this.state = { selectedDish: null }
    }



    goToURL(URL: string) {
        window.open(URL, "_blank")
    }
    onDishSelect(dish: TData) {
        this.setState({ selectedDish: dish });
    }
    renderDish(dish: TData | null) {
        if (dish != null) {
            return (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Grid
                                container
                                spacing={2}
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <ButtonBase style={{ height: "100%", width: '100%' }}
                                    onClick={() => this.goToURL("https://www.youtube.com/")}
                                >
                                    {/* add button with pic */}
                                    <img src={dish.image} style={{ height: "100%", width: '100%' }} />
                                </ButtonBase>
                                <Grid
                                    container
                                    spacing={2}
                                    direction="column"
                                    justifyContent="space-evenly"
                                    alignItems="center"
                                >
                                    <Grid item xs={12}>
                                        <Typography variant='h3'>
                                            {dish.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='h6'>
                                            {dish.description}
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>



                        </Grid>
                        <Grid item xs={8}>
                            {/* right handside word */}
                            <Grid
                                container
                                spacing={2}
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <div style={{ height: "100%", width: "100%" }}>
                                    {dish.comments.map(comment => (
                                        <div>
                                            <Grid item xs={12}>
                                                <Typography variant='h5'>
                                                    {comment.author}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant='h6'>
                                                    {comment.comment}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant='caption'>
                                                    {comment.date}
                                                </Typography>
                                            </Grid>
                                        </div>
                                    ))}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box >

            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


    render() {

        const menu = this.props.dishes.map((dish: TData) => {

            return (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <ButtonBase style={{ height: "100%", width: '100%' }}
                                onClick={() => this.onDishSelect(dish)}
                            >
                                {/* add button with pic */}
                                <img src={dish.image} style={{ height: "100%", width: '100%' }} />
                            </ButtonBase>


                        </Grid>
                        <Grid item xs={8}>
                            {/* right handside word */}
                            <Grid
                                container
                                spacing={2}
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <Grid item xs={12}>
                                    <Typography variant='h3'>
                                        {dish.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h4'>
                                        {dish.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box >
            );
        });
        return (
            <div>
                <div>
                    {menu}
                </div >
                <div>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        );
    }
}
