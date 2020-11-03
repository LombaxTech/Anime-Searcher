import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./App.scss";

export default function AnimeCard({ title, imgUrl, synopsis, animeId }) {
    return (
        <Card className="card">
            <CardActionArea>
                <CardMedia className="card-image" image={imgUrl} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {synopsis}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    fullWidth="true"
                    onClick={() => (window.location = `/anime/${animeId}`)}
                >
                    More Info
                </Button>
            </CardActions>
        </Card>
    );
}
