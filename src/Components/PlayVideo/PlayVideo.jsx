import React from 'react'
import './PlayVideo.css'
import video1 from '../../Assets/video.mp4'
import like from '../../Assets/like.png'
import dislike from '../../Assets/dislike.png'
import share from '../../Assets/share.png'
import save from '../../Assets/save.png'
import jack from '../../Assets/jack.png'
import user_profile from '../../Assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best video to learn coding that help you to be a web developer</h3>
        <div className="play-video-info">
            <p>87211 views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" /> 542</span>
                <span><img src={dislike} alt="" /> 22</span>
                <span><img src={share} alt="" /> Share</span>
                <span><img src={save} alt="" /> Save</span>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo