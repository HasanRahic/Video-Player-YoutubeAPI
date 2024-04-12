import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../Assets/video.mp4'
import like from '../../Assets/like.png'
import dislike from '../../Assets/dislike.png'
import share from '../../Assets/share.png'
import save from '../../Assets/save.png'
import jack from '../../Assets/jack.png'
import user_profile from '../../Assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]))
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
        <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} views &bull; {moment(apiData.snippet.publishedAt).fromNow()}</p>
            <div>
                <span><img src={like} alt="" /> 542</span>
                <span><img src={dislike} alt="" /> 22</span>
                <span><img src={share} alt="" /> Share</span>
                <span><img src={save} alt="" /> Save</span>
            </div>
        </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>PewDiePie</p>
          <span>100M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Great learning channel makes it easy</p>
        <p>Subscribe for more content</p>
        <hr />
        <h4>342 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Nikola Nikolshon <span>1 day ago</span></h3>
            <p>awesome video again thx for this i have used Tailwind on a project before but yeah it felt overdoing it for what was required at the time, i still might try it again</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Nikola Nikolshon <span>1 day ago</span></h3>
            <p>awesome video again thx for this i have used Tailwind on a project before but yeah it felt overdoing it for what was required at the time, i still might try it again</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Nikola Nikolshon <span>1 day ago</span></h3>
            <p>awesome video again thx for this i have used Tailwind on a project before but yeah it felt overdoing it for what was required at the time, i still might try it again</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Nikola Nikolshon <span>1 day ago</span></h3>
            <p>awesome video again thx for this i have used Tailwind on a project before but yeah it felt overdoing it for what was required at the time, i still might try it again</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Nikola Nikolshon <span>1 day ago</span></h3>
            <p>awesome video again thx for this i have used Tailwind on a project before but yeah it felt overdoing it for what was required at the time, i still might try it again</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Nikola Nikolshon <span>1 day ago</span></h3>
            <p>awesome video again thx for this i have used Tailwind on a project before but yeah it felt overdoing it for what was required at the time, i still might try it again</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo