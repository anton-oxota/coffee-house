import './header.scss'

import React from 'react'

import { Link } from 'react-router-dom'

const Header = React.memo(function () {
    return (
        <header className='header'>
            <div className="header__wrapper">

                <nav className="navigation navigation--white">
                    <ul className="navigation__wrapper">
                        <li className="navigation__item">
                            <Link to={'/'} className="navigation__link">
                                <div className="logo logo--white">
                                    Coffee house
                                </div>
                            </Link>
                        </li>
                        <li className="navigation__item">
                            <Link to={'/products'} className="navigation__link">Our coffee</Link>
                        </li>
                        {/* <li className="navigation__item">
                            <Link to={'/'} className="navigation__link">For your pleasure</Link>
                        </li> */}
                    </ul>
                </nav>


            </div>
        </header>
    )
})



export default Header