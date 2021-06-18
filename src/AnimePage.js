import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

import "./AnimePage.scss";

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
        <div className="anime-page">
            <div className="bg"></div>
            <div className="anime-page-content">
                <div className="video-info">
                    <div className="title">
                        <Typography variant="h4">{anime.title}</Typography>
                    </div>
                    <div className="video-section">
                        <iframe src={anime.trailer_url} className="video" />
                    </div>
                    <div className="about">
                        <Typography variant="body1">
                            {anime.synopsis}
                        </Typography>
                    </div>
                </div>
                <div className="img-extra-info">
                    <div className="image">
                        <img src={anime.image_url} alt="" />
                    </div>
                    <div className="eng-title">
                        <Typography variant="h6">
                            EN Title: {anime.title_english}
                        </Typography>
                    </div>
                    <div className="jp-title">
                        <Typography variant="h6">
                            JP Title: {anime.title_japanese}
                        </Typography>
                    </div>
                    <div className="no-ep">
                        <Typography variant="h6">
                            No of Episodes: {anime.episodes}
                        </Typography>
                    </div>
                    <div className="finished">
                        <Typography variant="h6">
                            Finished: {anime.airing ? "No" : "Yes"}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
