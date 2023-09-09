import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Home_Page, Contest_Page, Leaderboard_Page, Profile_Page, Login_Page, Sign_Up_Page } from '../../../utils/Constants'
import { useSelector } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../Store/loginStore'
const Navbar = () => {
  const {loggedIn,userName, profile_pic} = useSelector(state => state.login);
  return (
    <nav>
    <div className='navbar'>
      <div className="logo">
        <Link href='./'>
        <Image src='/DCC_LOGO01.jpg'  width={100} height={0} />
        </Link>
      </div>
      <ul className='navbar-links'>
            <li><Link href= {Home_Page} >Home</Link></li>
            <li><Link href={Contest_Page}>Contest</Link></li>
            {/* <li><Link href={Leaderboard_Page}>Leaderboard</Link></li> */}
            {loggedIn &&
            <>
            <div className="vl"></div>
            <UserMenu userName={userName} profile_pic={profile_pic} />
            </>
            }
            { !loggedIn && <> 
            <li><Link href={Login_Page} >Login</Link></li>
            <li><Link href={Sign_Up_Page} >Sign Up</Link></li>
            </>
            }
      </ul>

      <div className="custom-navbar-hamburger" onClick={() => {
          document.querySelector(".navbar-links-off").classList.toggle("active");
          document.querySelector(".custom-navbar-hamburger").classList.toggle("active");
        }}><GiHamburgerMenu size={35} /></div>

        <ul className='navbar-links-off'>
            <li><Link href= {Home_Page} >Home</Link></li>
            <li><Link href={Contest_Page}>Contest</Link></li>
            {/* <li><Link href={Leaderboard_Page}>Leaderboard</Link></li> */}
            {loggedIn &&
            <>
            <div className="vl"></div>
            <UserMenu userName={userName} profile_pic={profile_pic} />
            </>
            }
            { !loggedIn && <> 
            <li><Link href={Login_Page} >Login</Link></li>
            <li><Link href={Sign_Up_Page} >Sign Up</Link></li>
            </>
            }
      </ul>      

    </div>
    </nav>
  )
}

function UserMenu(props)
{
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    router.push('/');
  }


  return(
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={props.profile_pic} />
        </div>
      </label>
      <ul tabIndex={0} className=' navbar-usermenu-items menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52' >
        <li><span>{props.userName}</span></li>
        <hr />
        <li><Link href={Profile_Page}>Profile</Link></li>
        {/* <li><Link href={Leaderboard_Page}>Report a bug</Link></li> */}
        <hr/>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  )
}

export default Navbar
