import Navbar from "../../Components/Navbar/Navbar.jsx"
import Hero from "../../Components/Hero/Hero"
import TitleCards from "../../Components/TitleCards/TitleCards"
import Footer from "../../Components/Footer/Footer"

function Home() {

  return (
    <div>
       <Navbar/>
      <Hero/>
      <TitleCards title={'BlockBuster Movies'}  category={'top_rated'}/>
      <TitleCards title={'Popular'} category={'popular'}/>
      <TitleCards title={'Upcoming'} category={'upcoming'}/>
      <TitleCards title={'Now Playing'} category={'now_playing'}/>
      <Footer/>
    </div>
  )
}

export default Home
