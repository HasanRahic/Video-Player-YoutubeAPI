import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../Assets/thumbnail1.png'
import thumbnail2 from '../../Assets/thumbnail2.png'
import thumbnail3 from '../../Assets/thumbnail3.png'
import thumbnail4 from '../../Assets/thumbnail4.png'
import thumbnail5 from '../../Assets/thumbnail5.png'
import thumbnail6 from '../../Assets/thumbnail6.png'
import thumbnail7 from '../../Assets/thumbnail7.png'
import thumbnail8 from '../../Assets/thumbnail8.png'
import { API_KEY } from '../../data'

const Recommended = ({categoryId}) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async() =>{
        const relatedVideo_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='recommended'>
        <div className="side-video-list">
            <img src={thumbnail1} alt="" />
            <div className="vid-info">
                <h4>Best video to learn coding that help you to be a web developer</h4>
                <p>Mr Beast</p>
                <p>84k views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail2} alt="" />
            <div className="vid-info">
                <h4>Best video to learn coding that help you to be a web developer</h4>
                <p>Mr Beast</p>
                <p>84k views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail3} alt="" />
            <div className="vid-info">
                <h4>Best video to learn coding that help you to be a web developer</h4>
                <p>Mr Beast</p>
                <p>84k views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail4} alt="" />
            <div className="vid-info">
                <h4>Best video to learn coding that help you to be a web developer</h4>
                <p>Mr Beast</p>
                <p>84k views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail5} alt="" />
            <div className="vid-info">
                <h4>Best video to learn coding that help you to be a web developer</h4>
                <p>Mr Beast</p>
                <p>84k views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail6} alt="" />
            <div className="vid-info">
                <h4>Best video to learn coding that help you to be a web developer</h4>
                <p>Mr Beast</p>
                <p>84k views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail7} alt="" />
            <div className="vid-info">
                <h4>Best video to learn coding that help you to be a web developer</h4>
                <p>Mr Beast</p>
                <p>84k views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail8} alt="" />
            <div className="vid-info">
                <h4>Best video to learn coding that help you to be a web developer</h4>
                <p>Mr Beast</p>
                <p>84k views</p>
            </div>
        </div>
    </div>
  )
}
export default Recommended
