import { DISHES, TData } from "../shared/dishes";
import { Box, Breadcrumbs, ButtonBase, Grid, Link, Typography } from "@mui/material"
import { CommentData, COMMENTS } from "../shared/comments";
import { useParams } from "react-router-dom";
import { useState } from "react";
function goToURL(URL: string) {
    window.open(URL, "_blank")
}

function GetRenderDish() {
    let { dishId } = useParams();
    const [dishes] = useState(DISHES);
    const [comments] = useState(COMMENTS);
    if (dishId !== undefined) {
        return (
            <RenderDish dish={dishes.filter((dish) => dish.id === parseInt(dishId!, 10))[0]} comment={comments.filter((comments) => comments.dishId === parseInt(dishId!, 10))} />
        );
    }
    else {
        return (
            <div />
        );
    }
}
export default GetRenderDish;

export function RenderDish(props: { dish: TData | null, comment: CommentData[] }) {
    let dish = props.dish;
    const comment = props.comment;


    if (dish != null) {
        return (
            <div>

                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/menu"
                    >
                        Menu
                    </Link>
                    <Typography color="text.primary">{dish.name}</Typography>
                </Breadcrumbs>
                <h4/>
                <Box sx={{ flexGrow: 1 }} pt={3}>

                    <Grid container spacing={12}>
                        <Grid item xs={2}>
                            <Grid
                                container
                                spacing={2}
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <ButtonBase style={{ height: "100%", width: '100%' }}
                                    onClick={() => goToURL("https://www.youtube.com/")}
                                >
                                    {/* add button with pic */}
                                    <img src={dish.image} style={{ height: "100%", width: '100%' }} alt="" />
                                </ButtonBase>
                                <DishDetail dish={dish} />

                            </Grid>



                        </Grid>
                        <Grid item xs={8}>
                            {/* right handside word */}
                            <DishComment comment={comment} />
                        </Grid>
                    </Grid>
                </Box >
            </div>


        );
    }
    else {
        return (
            <div></div>
        );
    }
}


export function DishDetail(props: { dish: TData }) {
    const dish = props.dish;
    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start">
            <Grid item >
                <Typography variant='h3'>
                    {dish.name}
                </Typography>
            </Grid>
            <Grid item >
                <Typography variant='h6'>
                    {dish.description}
                </Typography>
            </Grid>

        </Grid>
    );
}
export function DishComment(props: { comment: CommentData[] }) {
    const comment = props.comment;
    return (
        <Grid
            container
            spacing={2}
            justifyContent="space-evenly"
            alignItems="center">


            {comment.map(comment => (
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant='h5' >
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
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                            </Typography>
                        </Grid>
                    </Grid>



                </Grid>
            ))}
        </Grid>

    );
}