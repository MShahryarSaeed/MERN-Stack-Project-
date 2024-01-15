import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
// Components
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';

const MainNavigation = () => {

  return (
    <>
       
       <MainHeader>
       <h1 className='main-navigation__title'>
        <Link to='/'>Your Places </Link>
       </h1>

       <nav className='main-navigation__header-nav'>
        <NavLinks/>
       </nav>
       </MainHeader>
    </>
  )
}

export default MainNavigation
