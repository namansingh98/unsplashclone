import React from 'react'

import { HiTrendingUp } from 'react-icons/hi';
import "./Search.css"
function Searching() {
    return (
        <section className='searching__panel'>
            <div className='searching__body'>
                <div className="trending__searches">
                    <div className="trends__title">
                        <h5>Trending Searches</h5>
                    </div>
                    <ul className="content__wrapper">
                        <li className="trends__box"><HiTrendingUp className='trends__icons' />Puja</li>
                        <li className="trends__box"> <HiTrendingUp className='trends__icons' />Sunset</li>
                        <li className="trends__box"><HiTrendingUp className='trends__icons' />News</li>
                        <li className="trends__box"><HiTrendingUp className='trends__icons' />Girl</li>
                        <li className="trends__box"><HiTrendingUp className='trends__icons' />Islamic</li>
                    </ul>
                </div>

                <div className="trending__searches">
                    <div className="trends__title">
                        <h5>Trending Searches</h5>
                    </div>
                    <ul className="content__wrapper">
                        <li className="trends__box">  <span className='trends__image'>img</span>
                            Animals</li>
                        <li className="trends__box">   <span className='trends__image'>img</span>
                            Athletics</li>
                        <li className="trends__box"><span className='trends__image'>img</span>
                            Arts & Culture</li>
                        <li className="trends__box"> <span className='trends__image'>img</span>
                            Spiritual</li>
                        <li className="trends__box"> <span className='trends__image'>img</span>
                            Food and Drinks</li>
                    </ul>
                </div>
                <div className="trending__searches">
                    <div className="trends__title">
                        <h5>Trending Searches</h5>
                    </div>
                    <ul className="content__wrapper">
                        <li className="trends__box">Yellow Rush</li>
                        <li className="trends__box"> Waterscape</li>
                        <li className="trends__box">Flat Lay Lifestyle </li>
                        <li className="trends__box">International Womens's Day by Fellipe Ditadi</li>
                        <li className="trends__box">Mute and pastel</li>
                    </ul>
                </div>

            </div>
        </section >
    )
}

export default Searching