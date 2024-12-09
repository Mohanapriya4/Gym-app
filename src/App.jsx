import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import BgImage from './Components/Assets/bg.png'
import Equipments from './Components/Equipments/Equipments'
import Banner from './Components/Banner/Banner'
import gym_img from './Components/Assets/gym.jpg'
import gym_img1 from './Components/Assets/banner.png'
import Tab from './Components/Tab/Tab'
import Feedback from './Components/Feedback/Feedback'
import Banner2 from './Components/Banner/Banner2'
import Footer from './Footer/Footer'

const BannerData = {
  image:gym_img,
  title:"Sculpt your body, shape your life",
  subtitle:"Transform your body with consistent effort, and watch how it shapes your entire life. Fitness enhances both your physical strength and mental resilience, leading to a healthier, more fulfilling lifestyle. Every workout brings you closer to a version of yourself that’s stronger, healthier, and more confident.",
  link:"#"
}
const BannerData1 = {
  image:gym_img1,
  title:"Sculpt your body, shape your life",
  subtitle:"Transform your body with consistent effort, and watch how it shapes your entire life. Fitness enhances both your physical strength and mental resilience, leading to a healthier, more fulfilling lifestyle. Every workout brings you closer to a version of yourself that’s stronger, healthier, and more confident.",
  link:"#"
}

const bgStyle={
  backgroundImage :`url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundAttachment:"fixed"
}


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData}/>
      <Tab />
      <Banner {...BannerData1}/>
      <Feedback />
      <Banner2 />
      <Footer />
    </div>
  )
}

export default App