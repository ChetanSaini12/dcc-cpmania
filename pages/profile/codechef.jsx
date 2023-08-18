import React from 'react'
import PropTypes from 'prop-types'
import { Rating_Url } from '@/utils/Constants'
import {useState, useEffect} from 'react'
import axios from 'axios'
import NotFoundBita from '../Components/NotFound/notFounfbita'
import LoadingSkel1 from '../Components/LoadingAnimation/loadingSkel1'

const Codechef = props => {

    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${Rating_Url}/code_chef/${props.profileUsername}`)
        .then(res=>{
            setInfo(res.data.data);
            setIsLoading(false);
        })
        .catch(err=>{
            console.log(err);
        })
    },[isLoading]);

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
            <span className='value'>{info.highest_rating}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Rank :</span>
            <span className='value'>{info.stars} Star</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Contest :</span>
            <span className='value'>{info.contest}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Problems Solved :</span>
            <span className='value'>{info.problemsSolved}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Global Rank :</span>
            <span className='value'>{info.globalRank}</span>
       </div>
       <div className='eachinfo'>
            <span className='title'>Country Rank :</span>
            <span className='value'>{info.countryRank}</span>
       </div>
    </div>
  )
}

Codechef.propTypes = {

}

export default Codechef
