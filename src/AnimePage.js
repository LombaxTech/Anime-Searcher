import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMedia from "@material-ui/core/CardMedia";
import AnimeCard from "./AnimeCard";

const base_url = "https://api.jikan.moe/v3/anime/";

export default function AnimePage({ match }) {
    const animeId = match.params.animeId;
    const [anime, setAnime] = useState({});

    async function init() {
        try {
            let response = await axios.get(`${base_url}${animeId}`);
            console.log(response.data);
            setAnime(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => init(), []);

    return (
        <div>
            <h1>
                {anime.title} {anime.title_japanese}
                {/* <iframes */}
                <CardMedia src={anime.trailer_url} />
                <AnimeCard />
            </h1>
        </div>
    );
}
