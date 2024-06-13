import './Hero.css'

import heroBanner from '/public/HeroBanner.webp'
import heroMovieLogo from '/public/BrBaLogo.png'

function Hero() {
  return (
    
    <div className="hero w-screen h-30 bg-black">
      <img className="heroBanner w-screen h-30" src={heroBanner} alt="" />

       <div className=" text-gray-200 absolute bottom-9 w-1/2 p-20">
       <img  className='heroMovieLogo w-1/2 mb-12' src={heroMovieLogo} alt="" />
        <p className=" text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam exercitationem obcaecati 
            nobis sequi blanditiis perspiciatis.</p>
            <div className="flex gap-3 mt-10">
            <button className="bg-gray-50  p-2 pl-5 pr-5 rounded-md text-black"><i className="fa-solid fa-play mr-1"></i> Play</button>
            <button className="moreInfo p-2 pl-5 pr-5 rounded-md text-white"><i className="fa-regular fa-circle-question mr-1"></i> More Info</button>
            </div>
       </div>

    </div>
  )
}

export default Hero
