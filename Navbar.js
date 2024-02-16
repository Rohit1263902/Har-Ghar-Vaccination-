import React from 'react'

const Navbar = ({ user, role }) => {

  const handleLogout = () =>{
    localStorage.clear()
    window.location.reload(false)
  }
  return (
    <>
      <div class='wrapper'>
        <div class='multi_color_border'></div>
        <div class='top_nav'>
          <div class='left'>
            <div class='logo'>
              <a href='index.html'>
                <img src='images/logo image.jpg' alt='logo image' />
              </a>
            </div>
            <div class='search_bar'>
              <input type='text' placeholder='Search' />
            </div>
          </div>
          <div class='right'>
            <ul>
              {user ? (
                <>
                  <li>
                    <a href='/myprofile'>{user}</a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href='/to/login'>LogIn</a>
                  </li>
                  <li>
                    <a href='/to/register'>Register</a>
                  </li>
                  
                </>
              )}
            </ul>
          </div>
        </div>

        <div class='bottom_nav'>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/vaccination'>Vaccines</a>
            </li>

            <li>
              <a href='/schedule'>Schedule</a>
            </li>

            <li>
              <a href='#'>Resources</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
