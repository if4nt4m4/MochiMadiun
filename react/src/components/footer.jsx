import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small indigo">
      <div className="gradient"></div>
      <div className="container">
        <div className="row text-center d-flex justify-content-center">
          <div className="col-md-12">
            <a href="index.html">
              <img src="images/footer-logo.png" alt="footer-logo" />
            </a>
          </div>
        </div>
        <div className="row d-flex text-center justify-content-center mb-md-0 pb-4">
          <div className="col-md-8 col-12">
            <address>
              <p>
                <span>Feast The Restaurant, 3rd Floor, Beside that building, USA</span>
                <span>Opening Hours : Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00</span>
                <span className="call">Call for Bookings : 800 1234 56789</span>
              </p>
            </address>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-12 text-center">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fa fa-facebook-official mr-4" aria-hidden="true"></i>
              </a>
              <a className="tw-ic">
                <i className="fa fa-twitter fa-lg mr-4" aria-hidden="true"></i>
              </a>
              <a className="gplus-ic">
                <i className="fa fa-pinterest fa-lg mr-4" aria-hidden="true"></i>
              </a>
              <a className="li-ic">
                <i className="fa fa-youtube mr-4" aria-hidden="true"></i>
              </a>
              <a className="ins-ic">
                <i className="fa fa-vimeo mr-4" aria-hidden="true"></i>
              </a>
              <a className="pin-ic">
                <i className="fa fa-google-plus fa-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-12 copy-right">
            <p>
              © 2018 Designed by{' '}
              <a href="https://www.template.net/editable/websites/html5">Template.net</a> &amp; distributed by{' '}
              <a href="https://themewagon.com/">ThemeWagon</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;