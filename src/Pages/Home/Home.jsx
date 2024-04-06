import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home  = ({sideBar}) => {
  return (
    <>
      <Sidebar sideBar={sideBar} />
      <div className={`container ${sideBar ? "" : 'large-container'}`}>
        <Feed />  
      </div> 
    </>
  )
}
export default Home