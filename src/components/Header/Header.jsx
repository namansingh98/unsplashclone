import React from 'react'
import "./Header.css"
function Header() {
    return (
        <section className='Header__section'>
            <div className='main__header'>
                <div className="main__heading">
                    <h1>Unsplash</h1>
                    <h4>The internet’s source for visuals.</h4>
                    <h4>Powered by creators everywhere.</h4>
                </div>
                <div className="wrapper__input">
                    <input type='search' className="input" placeholder='Search all assets'/>
                    
                    <i className='bx bx-search icons'></i>
                   
                </div>
                <div className='sub__text'>
                    <span className='trending'>Trending -</span>
                    <span className='trending__items'>flower</span>
                </div>
            </div>
        </section >
    )
}

export default Header