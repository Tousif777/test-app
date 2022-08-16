import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Videos from "./components/Videos";
import { Link } from "react-router-dom";

function App() {
        const [urls, setUrls] = useState([]);
        const [url, setUrl] = useState();

        useEffect(() => {
                async function getUrls() {
                        axios.get(
                                "https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/",
                        )
                                .then((res) => {
                                        setUrls(res.data);
                                        setUrl(res.data[0].link);
                                })
                                .catch((err) => {
                                        console.log(err);
                                });
                }
                getUrls();
        }, []);

        return (
                <div className="App">
                        <h1 className="text">Care-Box</h1>
                        <div className="video-player">
                                <Player url={url} />
                                <div className="video-list">
                                        <Videos urls={urls} setUrl={setUrl} />
                                </div>
                        </div>

                        <Link className="button" to="/map">
                                Go to Map
                        </Link>
                </div>
        );
}

export default App;
