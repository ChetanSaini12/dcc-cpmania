import React from 'react'
import PropTypes from 'prop-types'
import { SiCodeforces, SiCodechef, SiLeetcode, SiCodeproject } from 'react-icons/si'
import Link from 'next/link'

const Dashboard = props => {
  return (
    <div id='dashboard'>
        <div className='userInfo'>
            <div className='userAvatar'>
                <img src={props.user.profile_pic} alt='user avatar' />
            </div>
            <div className='userName'>{props.user.username}</div>
            <div className='name'>{props.user.name}</div>
            <div className='urls'>
                <div>
                    <SiCodeforces className='inline'/>
                    <Link className='url' href={props.user.codeforcesURL}>{props.user.codeforcesURL}</Link>
                </div>
                <div>
                    <SiCodechef className='inline'/>
                    <Link className='url' href={props.user.codechefURL}>{props.user.codechefURL}</Link>
                </div>
                <div>
                    <SiLeetcode className='inline'/>
                    <Link className='url' href={props.user.leetcodeURL}>{props.user.leetcodeURL}</Link>
                </div>
                <div>
                    <SiCodeproject className='inline'/>
                    <Link className='url' href={props.user.atcoderURL}>{props.user.atcoderURL}</Link>
                </div>
            </div>
        </div>
        <div className='userHandles'></div>
    </div> 
  )
}

Dashboard.propTypes = {

}

export default Dashboard
