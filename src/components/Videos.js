import React from "react";

const Videos = ({ urls, setUrl }) => {
        return (
                <div>
                        {urls.map((url) => {
                                return (
                                        <div className="video-list-item" key={url.id}>
                                                <span
                                                        className="button"
                                                        onClick={() => {
                                                                setUrl(url.link);
                                                        }}
                                                >
                                                        Link no : {url.id}
                                                </span>
                                        </div>
                                );
                        })}
                </div>
        );
};

export default Videos;
