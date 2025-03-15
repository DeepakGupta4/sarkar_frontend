import React from 'react'
import Navbar from '../Components/Navbar'
import LatestJobs from './LatestJobs'
import Mainpage from './Mainpage'
import Footer from '../Components/Footer'
// import ServiceDetailPage from './ServiceDetailPage'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Mainpage />
        <Footer />
    </div>
  )
}

export default Home