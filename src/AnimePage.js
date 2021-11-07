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
        <div className="anime-page  flex justify-between gap-4 p-8 text-white">
            {/* <div className="anime-page-content"> */}
            <div className="video-info flex flex-col justify-center items-center w-2/3 shadow-xl bg-red-500 bg-opacity-100 text-white font-extrabold p-8 rounded-2xl ">
                <div className="title mb-4 ">
                    <Typography variant="h4">
                        {/* <h4 className="font-extrabold text-5xl uppercase"> */}
                        {anime.title}
                        {/* </h4> */}
                    </Typography>
                </div>
                <div className="video-section w-2/3 h-80 mb-8">
                    <iframe
                        src={anime.trailer_url}
                        className="video w-full h-full rounded-2xl"
                    />
                </div>
                <div className="about text-center">
                    <Typography variant="body1">{anime.synopsis}</Typography>
                </div>
            </div>
            <div className="img-extra-info p-8 bg-red-500  flex flex-col flex-1 items-center   rounded-2xl ">
                <div className="image flex justify-center w-full">
                    <img
                        src={anime.image_url}
                        alt=""
                        className="rounded-lg mb-4 w-full"
                    />
                </div>
                <div className="">
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
            {/* </div> */}
        </div>
    );
}
