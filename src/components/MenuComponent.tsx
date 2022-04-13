import { Box, Grid, ButtonBase, Breadcrumbs, Link, Typography } from '@mui/material';
import React, { Component } from 'react';
import { DishDetail } from './DishDetailCompnent';
import { TData } from '../shared/dishes';
import ButtonCount from './ButtonComponent';
import { CommentData } from '../shared/comments';

export type DishesProps = {
    dishes: TData[],
    comments: CommentData[],
}

export class Menu extends Component<DishesProps, { selectedDish: TData | null }> {
    constructor(props: DishesProps) {
        super(props);
        this.state = { selectedDish: null }
    }

    onDishSelect(dish: TData) {
        this.setState({ selectedDish: dish });
    }
    // gotoDishMenu() {
    //     return(

    //     );
    // }

    render() {

        const menu = this.props.dishes.map((dish: TData) => {

            return (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <ButtonBase style={{ height: "100%", width: '100%' }}
                                href={`/menu/${dish.id}`}
                            >
                                {/* add button with pic */}
                                <img src={dish.image} style={{ height: "100%", width: '100%' }} alt="" />

                            </ButtonBase>


                        </Grid>
                        <Grid item xs={8}>
                            {/* right handside word */}
                            <DishDetail dish={dish} />
                            <ButtonCount />
                        </Grid>
                    </Grid>
                </Box >
            );
        });
        return (
            <div>
                <div>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/home"
                        >
                            Home
                        </Link>
                        <Typography color="text.primary">Menu</Typography>
                    </Breadcrumbs>
                </div>
                <div>
                    {menu}
                </div >
            </div>

        );
    }
}
