import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              {/* logo */}
              <div className="site-logo">
                <NavLink to="/">
                  <img src="assets/img/logo.png" alt="" />
                </NavLink>
              </div>
              {/* logo */}

              {/* menu start */}
              <nav className="main-menu">
                <ul>
                  <li className="current-list-item">
                    <NavLink to="/">Home</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/">Static Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/index_2">Slider Home</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Pages</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/404">404 page</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About</NavLink>
                      </li>
                      <li>
                        <NavLink to="/cart">Cart</NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout">Check Out</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                      <li>
                        <NavLink to="/news">News</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop">Shop</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/news">News</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/news">News</NavLink>
                      </li>
                      <li>
                        <NavLink to="/single-news">Single News</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Shop</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/shop">Shop</NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout">Check Out</NavLink>
                      </li>
                      <li>
                        <NavLink to="/single-product">Single Product</NavLink>
                      </li>
                      <li>
                        <NavLink to="/cart">Cart</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="header-icons">
                      <a className="shopping-cart" href="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </a>
                      <a className="mobile-hide search-bar-icon" href="#">
                        <FontAwesomeIcon icon={faSearch} />
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <a className="mobile-show search-bar-icon" href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <div className="mobile-menu"></div>
              {/* menu end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;