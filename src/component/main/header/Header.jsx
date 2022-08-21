import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// style
import "./header.scss";
// data
import logo from "../../../assets/imdb.jpg"
import { specified_Tv, specified_Movie } from '../../../api/fetchData';

const headerNav = [
  {
    display: "Movie",
    path:"/movie",
    specify: Object.values(specified_Movie),
  },
  {
    display: "TV Series",
    path:"/tv",
    specify: Object.values(specified_Tv),
  },
  {
    display: "People",
    path:'/person/popular',
  }
]

const Header = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(()=>{
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)  {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    }
    
  },[])

  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to='/'>IMDB</Link>
        </div>
        <ul className="header__nav container">
          {
            headerNav.map((item,i) => (
              <li key={i} className={`${pathname === item.path ? "active" : '' }`} >
                <Link to={item.path}>
                  {item.display}
                </Link>
                {
                  item.specify && (
                    <ul className='header__nav__menu'>
                      {  
                        item.specify.map((e,i)=> (
                          <Link key={i} to={item.path + '/' + e}>
                            <li key={i}>
                              {e}
                            </li>
                          </Link>
                        ))
                      }
                    </ul>
                  )
                } 
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header;
