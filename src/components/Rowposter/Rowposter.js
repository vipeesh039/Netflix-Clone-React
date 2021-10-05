import React, { useEffect, useState } from 'react'
import './Rowposter.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'

function Rowposter(props) {
    const [movies, setMovies] = useState([])
    const [youtId,setyouId] = useState('')
    useEffect(() => {
       axios.get(props.url).then(response=>{
           console.log(response.data);
           setMovies(response.data.results)
       }).catch(err=>{
        //    alert('Network Error')
       })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie=(id)=>{
console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setyouId(response.data.results[0])
            }else{
                console.log('Array Empty');
            }
        })
      }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
                
            </div>
            { youtId && <YouTube videoId={youtId.key} opts={opts}/> }
        </div>
    )
}

export default Rowposter
