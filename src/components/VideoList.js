import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const styles = {
        ul: {
            "listStyleType": "none"
        }
    }

    const activeVideos = videos.map(video => {
        return (
            <VideoListItem 
                video={video} 
                onVideoSelect={onVideoSelect} 
                key={video.id.videoId}
            />
        )
    });

    return (
        <ul style={styles.ul}>
            {activeVideos}
        </ul>
    )
}

export default VideoList;