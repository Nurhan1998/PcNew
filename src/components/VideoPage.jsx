import React from 'react';
import psvideo from './Video/psvideo.mp4'
import {Container,ResponsiveEmbed} from 'react-bootstrap'

const VideoPage = () => {
    return (
        <div style={{ width: "100%", height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
                <video fluid autoPlay loop muted
                    style={{
                    position: "absolute",
                    width: "100%",       
                    left: "50%",
                    top: "50%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    }}
                >
                <source src={psvideo} type="Video/mp4" />
            </video>
            </ResponsiveEmbed>
        </div>
    );
};

export default VideoPage;