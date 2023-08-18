import React from 'react'
import Codeforces from './codeforces'
import Codechef from './codechef'
import Leetcode from './leetcode'
import Atcoder from './atcoder'


const UserHandles = (props) => {
  return (
    <div className='handles-container'>
      <div className='sub-container'>
        <div className='handle'>Codeforces</div>
        {props.user.codeforcesURL !== undefined ?
          (
            <div className='handle-content'>
              <Codeforces profileUsername={props.user.codeforcesURL} />
            </div>
          )
          :
          <div >Not Connected</div>
        }
      </div>
      <div className='sub-container'>
        <div className='handle'>Codechef</div>
        {props.user.codechefURL ?
          (
            <div className='handle-content'>
              <Codechef profileUsername={props.user.codechefURL} />
            </div>
          )
          :
          <div >Not Connected</div>
        }
      </div>
      <div className='sub-container'>
        <div className='handle'>Leetcode</div>
        {props.user.leetcodeURL ?
          (
            <div className='handle-content'>
              <Leetcode profileUsername={props.user.leetcodeURL} />
            </div>
          )
          :
          <div >Not Connected</div>
        }
      </div>
      <div className='sub-container'>
        <div className='handle'>Atcoder</div>
        {props.user.atcoderURL ?
          (
            <div className='handle-content'>
              <Atcoder profileUsername={props.user.atcoderURL} />
            </div>
          )
          :
          <div >Not Connected</div>
        }
      </div>
    </div>
  )
}

export default UserHandles
