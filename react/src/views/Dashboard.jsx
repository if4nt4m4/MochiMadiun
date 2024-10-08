import React, { useEffect } from 'react';
import './assets/css/main.css'; // Import semua stylesheet
import './assets/css/responsive.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

const Dashboard = () => {
  useEffect(() => {
    // Load jQuery after component is mounted
    const script = document.createElement('script');
    script.src = "assets/js/jquery-1.11.3.min.js";
    script.onload = () => {
      // Load other scripts dependent on jQuery
      const scripts = [
        "assets/bootstrap/js/bootstrap.min.js",
        "assets/js/jquery.countdown.js",
        "assets/js/jquery.isotope-3.0.6.min.js",
        "assets/js/waypoints.js",
        "assets/js/owl.carousel.min.js",
        "assets/js/jquery.magnific-popup.min.js",
        "assets/js/jquery.meanmenu.min.js",
        "assets/js/sticker.js",
        "assets/js/main.js"
      ];
      scripts.forEach(src => {
        const scriptElement = document.createElement('script');
        scriptElement.src = src;
        document.body.appendChild(scriptElement);
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Dashboard;