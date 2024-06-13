import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
function Player() {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData , setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzliNTIyNjU4NzQ0NTNmYTA3Y2RlMGFjMjZmNzRiOSIsInN1YiI6IjY2NmFiMjBhZjY4NjZhMzAyNjA3ZmQyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XDVzYnptcNYknX8aGpYI6Tb0GTNLa4hr-t59t7QgT1o'
    }
  };
 

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?
      language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[id])

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
     <i onClick={()=>navigate(-2)} className="fa-solid fa-arrow-left text-2xl text-white absolute left-10  top-10 cursor-pointer"></i>
     <iframe className=" rounded-lg" src={`https://www.youtube.com/embed/${apiData.key ? apiData.key : '1JLUn2DFW4w' }`} title="trailer" width='90%' height='90%' frameborder="0" allowFullScreen></iframe>
     <div className="playerInfo flex items-center justify-around w-full mt-3 text-gray-100">
        <p>{formatDate(apiData.published_at)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
     </div>
    </div>
  )
}

export default Player
