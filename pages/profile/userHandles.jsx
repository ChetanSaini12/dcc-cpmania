import React from 'react'
import Codeforces from './codeforces'
import Codechef from './codechef'
import Leetcode from './leetcode'
import Atcoder from './atcoder'


const UserHandles = (user) => {
  console.log(user);
  user = user.user;
  return (
    <div className='handles-container'>
      <div className='sub-container'>
        <div className='handle'>Codeforces</div>
        {user && user.codeforcesURL?
          (
            <div className='handle-content'>
              <Codeforces profileUsername={user.codeforcesURL} />
            </div>
          )
          :
          <div >Not Connected</div>
        }
      </div>
      <div className='sub-container'>
        <div className='handle'>Codechef</div>
        {user && user.codechefURL ?
          (
            <div className='handle-content'>
              <Codechef profileUsername={user.codechefURL} />
            </div>
          )
          :
          <div >Not Connected</div>
        }
      </div>
      <div className='sub-container'>
        <div className='handle'>Leetcode</div>
        {user && user.leetcodeURL ?
          (
            <div className='handle-content'>
              <Leetcode profileUsername={user.leetcodeURL} />
            </div>
          )
          :
          <div >Not Connected</div>
        }
      </div>
      <div className='sub-container'>
        <div className='handle'>Atcoder</div>
        {user && user.atcoderURL ?
          (
            <div className='handle-content'>
              <Atcoder profileUsername={user.atcoderURL} />
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