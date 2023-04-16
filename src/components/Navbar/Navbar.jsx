import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <section className='navbar__section'>

      <nav>
        <span className='navbar__logo'><svg width="32" height="32"  viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><desc lang="en-US">Unsplash logo</desc><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span>
        <div className="search__area">
        
          <i className='bx bx-search search__btn'></i>
          
          <input type="search" name="input__search" placeholder='Search high resolution images' />
          <i className='bx bxs-file-find find__btn'></i>
        </div>
        <ul>
          <li><a href="">Explore</a></li>
          <li><a href="">Advertise</a></li>
          <li><a href="" className='rainbow'>Unsplash+ </a></li>
          <span className='nav__divider'></span>
          <li><a href="">Log in</a></li>
          <li><button className='submit__image'>Submit a image</button></li>
          <li><i className='bx bx-menu'></i></li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar