import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      {/* Advertisement Section */}
      <div className="abt-section mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg">
                <a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube">
                  <FontAwesomeIcon icon={faPlay} />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <p className="top-sub">Since Year 1999</p>
                <h2>We are <span className="orange-text">Fruitkha</span></h2>
                <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                <a href="/about" className="boxed-btn mt-4">know more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">	
                <h3><span className="orange-text">Our</span> Products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt="" /></a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price"><span>Per Kg</span> 85$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt="" /></a>
                </div>
                <h3>Berry</h3>
                <p className="product-price"><span>Per Kg</span> 70$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt="" /></a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price"><span>Per Kg</span> 35$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Banner */}
      <section className="shop-banner">
        <div className="container">
          <h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
          <div className="sale-percent">
            <span>Sale! <br /> Upto</span>50% <span>off</span>
          </div>
          <a href="/shop" className="cart-btn btn-lg"> Shop Now</a>
        </div>
      </section>

      {/* Content Home */}
      <section className="content-home">
        <div className="container">
          <h2>Welcome to Fruitkha</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
          <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;