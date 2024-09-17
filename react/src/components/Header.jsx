import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home'); // initial active link is 'home'

  const closeNav = () => {
    setSidenavOpen(false);
  };

  const openNav = () => {
    setSidenavOpen(true);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="top">
      <div id="mySidenav" className="sidenav" style={{ width: sidenavOpen ? '250px' : '0' }}>
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
        <a className={activeLink === 'home' ? 'active' : ''} href="index.html" onClick={() => handleLinkClick('home')}>Home</a>
        <a className={activeLink === 'about' ? 'active' : ''} href="about.html" onClick={() => handleLinkClick('about')}>About</a>
        <a className={activeLink === 'recipes' ? 'active' : ''} href="recipes.html" onClick={() => handleLinkClick('recipes')}>Recipes</a>
        <a className={activeLink === 'blog' ? 'active' : ''} href="blog.html" onClick={() => handleLinkClick('blog')}>Blog</a>
      </div>

      <nav id="navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-9">
              <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
            </div>
            <div className="col-lg-8 col-xs-3">
              <div className="social-icons square">
                <div id="page-content-wrapper">
                  <span className="slide-menu" onClick={openNav}><i className="fa fa-bars" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};