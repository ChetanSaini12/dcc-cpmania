import React from 'react'
import PropTypes from 'prop-types'
import { Rating_Url } from '@/utils/Constants'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NotFoundBita from '../Components/NotFound/notFounfbita'
import LoadingSkel1 from '../Components/LoadingAnimation/loadingSkel1'


const Codeforces = props => {
    
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
     console.log(`${Rating_Url}/codeforces/${props.profileUsername}`)
        axios.get(`${Rating_Url}/codeforces/${props.profileUsername}`)
        .then((res) => {
            setInfo(res.data.data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err); 
        })
    }, [isLoading]);

    if(isLoading){
     return <div className="handle_loading">
                 <div className="lottie" >
                 <LoadingSkel1 />
                 </div>
             </div>
     }

     if(info.rating == undefined){
          return <div className="handle_notFound">
                    <div className="lottie" >
                    <NotFoundBita />
                    </div>
               </div>
     }

  return (
    
    <div className='all_info'>

       <div className='eachinfo'>
            <span className='title'>Rating :</span>
            <span className='value'>{info.rating}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Max Rating :</span>
            <span className='value'>{info.maxRating}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Rank :</span>
            <span className='value'>{info.rank}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Max Rank :</span>
            <span className='value'>{info.maxRank}</span>
       </div> 
       <div className='eachinfo'>  
            <span className='title'>Problems Tried :</span>
            <span className='value'>{info.problemsTried}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Problems Solved :</span>
            <span className='value'>{info.problemsSolved}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Contest :</span>
            <span className='value'>{info.contestCount}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Best Rank :</span>
            <span className='value'>{info.bestRank}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Worst Rank :</span>
            <span className='value'>{info.worstRank}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Max Up :</span>
            <span className='value'>{info.MaxUp}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Max Down :</span>
            <span className='value'>{info.MaxDown}</span>
       </div>

    </div>
  )
}


export default Codeforces
