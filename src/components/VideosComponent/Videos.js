import React from 'react';
import './Videos.css'

const Videos = () => {
    return (
        <div id='video-center'>
            <p>Welcome back <span>Albert.</span></p>
            <div id='video-grid'>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/z2r-p7xc7c4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/y3EdIiJeTXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/m5Qxl8sRU1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/tdfpaGsckxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/39YqCLYELnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/PXaLc9AYIcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
        </div>
    )
}

export default Videos
