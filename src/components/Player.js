import React from "react";
import ReactPlayer from "react-player";

const Player = ({ url }) => {
        return (
                <div>
                        <ReactPlayer
                                url={url}
                                playing={true}
                                light={true}
                                key={url}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                config={{
                                        file: {
                                                attributes: {
                                                        controlsList: "nodownload",
                                                },
                                        },
                                }}
                        />
                </div>
        );
};

export default Player;
