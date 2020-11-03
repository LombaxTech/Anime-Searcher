import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Search from "./Search";
import AnimeCard from "./AnimeCard";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./App.scss";

export default function Home() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Search setAnimes={setAnimes} setLoading={setLoading} />
            <div className="loading" style={{ display: loading ? "" : "none" }}>
                <CircularProgress />
            </div>
            {/* <Button onClick={() => console.log(animes)}>Current Animes</Button> */}
            <div className="anime-container">
                {animes.map((anime) => (
                    <AnimeCard
                        title={anime.title}
                        imgUrl={anime.image_url}
                        synopsis={anime.synopsis}
                        animeId={anime.mal_id}
                    />
                ))}
            </div>
        </div>
    );
}
