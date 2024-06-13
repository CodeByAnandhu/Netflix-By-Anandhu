
import { Link } from 'react-router-dom';
import './TitleCards.css'
import { useEffect, useRef, useState } from 'react'
function TitleCards({title , category}) {

  const cardRef = useRef()

  const [apiData , setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzliNTIyNjU4NzQ0NTNmYTA3Y2RlMGFjMjZmNzRiOSIsInN1YiI6IjY2NmFiMjBhZjY4NjZhMzAyNjA3ZmQyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XDVzYnptcNYknX8aGpYI6Tb0GTNLa4hr-t59t7QgT1o'
    }
  };
  


  const handleWheel =(event)=>{

     event.preventDefault();
     cardRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardRef.current.addEventListener('wheel',handleWheel);

  },[])

  return (

    <div className='flex w-screen bg-transparent flex-col pl-20'>
      
      <h2 className='text-gray-50 font-bold text-lg'>{title?title:"Popular on Netflix"}</h2>
        
        <div className='cardItems flex gap-3 mb-10 ' ref={cardRef}>
        {
           apiData.map((data , index) => (
            <Link key={index} to={`/player/${data.id}`} className='flex-col posterCard' >
            <img className='h-auto max-w-72 rounded-xl' src={`https://image.tmdb.org/t/p/w500`+data.backdrop_path} alt=""/>
            <p className='mt-2 ml-4 text-gray-200'>{data.original_title}</p>
            </Link>
           ))
        }
      </div>
     

    </div>
  )
}

export default TitleCards
