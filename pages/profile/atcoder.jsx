import React from 'react'
import PropTypes from 'prop-types'
import { Rating_Url } from '@/utils/Constants'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Atcoder = props => {
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        axios.get(`${Rating_Url}/at_coder/${props.profileUsername}`)
        .then(res => {
            setInfo(res.data.data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err); 
        })
    }, [isLoading]);

    if(isLoading){
        <h1>{props.profileUsername}</h1>
        return <div>Loading...</div> 
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
            <span className='value'>{info.rank}</span>
        </div>
        <div className='eachinfo'>
            <span className='title'>Contest :</span>
            <span className='value'>{info.matches}</span>
        </div>
    </div>
  )

}


export default Atcoder
