import { Link } from 'react-router-dom';
import './Hero.css'
import heroBanner from '/public/HeroBanner.webp'
import heroMovieLogo from '/public/BrBaLogo.png'

function Hero() {
  let brbrid ={ 
    name:'Breaking Bad',
    key:"1JLUn2DFW4w",
    published_at:'2008',
    type:'Trailer'
  }
   
  return (
    
    <div className="hero w-screen bg-black">
      <img className="heroBanner w-screen" src={heroBanner} alt="" />

       <div className=" text-gray-200 absolute bottom-9 w-1/2 p-20">
       <img  className='heroMovieLogo w-2/3 mb-12' src={heroMovieLogo} alt="" />
        <h2 className='font-medium text-xl mb-3 text-white'>Breakin Bad</h2>
        <span className='text-gray-400'>2008 | Maturity Rating:A | 5 Seasons | Drama</span>
        <p className=" text-md mt-3">A terminally ill chemistry teacher teams with a former student to manufacture crystal meth to secure his familys future.</p>
            
            <Link to={`/player/${brbrid}`}  className="flex gap-3 mt-10" >
            <button className="bg-gray-50  p-2 pl-5 pr-5 rounded-md text-black"><i className="fa-solid fa-play mr-1"></i> Play</button>
            <button className="moreInfo p-2 pl-5 pr-5 rounded-md text-white"><i className="fa-regular fa-circle-question mr-1"></i> More Info</button>
            </Link>
       </div>

    </div>
  )
}

export default Hero
