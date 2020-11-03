import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./App.scss";

const base_url = "https://api.jikan.moe/v3/search/anime?q=";

export default function Search({ setAnimes, setLoading }) {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => setInput(e.target.value);

    const search = async (e) => {
        e.preventDefault();
        // console.log(input);
        setLoading(true);
        try {
            setAnimes([]);
            let result = await axios.get(`${base_url}${input}&page=1`);
            result = result.data;
            result = result.results;
            setAnimes(result);
            console.log(result);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form className="wrapper" onSubmit={search}>
                <TextField
                    label="Search Anime"
                    variant="outlined"
                    value={input}
                    onChange={handleInputChange}
                    style={{ background: "white" }}
                />
                <div className="search-button">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={search}
                        type="submit"
                    >
                        Search
                    </Button>
                </div>
            </form>
        </div>
    );
}
