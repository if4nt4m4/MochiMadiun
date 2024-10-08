import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Items = () => {
  const items = [
    { image: 'images/item-1.jpg', aos: 'fade-left', delay: 300, title: 'Sea Food' },
    { image: 'images/item-2.jpg', aos: 'fade-left', delay: 500, title: 'Main Dishes' },
    { image: 'images/item-3.jpg', aos: 'fade-left', delay: 700, title: 'Appetizers' },
    { image: 'images/item-4.jpg', aos: 'fade-left', delay: 900, title: 'Desserts' },
    { image: 'images/item-5.jpg', aos: 'fade-right', delay: 300, title: 'Drinks' },
    { image: 'images/item-6.jpg', aos: 'fade-right', delay: 500, title: 'Steak Food' },
    { image: 'images/item-7.jpg', aos: 'fade-right', delay: 700, title: 'Sea Food' },
    { image: 'images/item-8.jpg', aos: 'fade-right', delay: 900, title: 'Drinks' },
    { image: 'images/item-4.jpg', aos: 'fade-left', delay: 300, title: 'Desserts' },
    { image: 'images/item-2.jpg', aos: 'fade-left', delay: 500, title: 'Appetizers' },
    { image: 'images/item-3.jpg', aos: 'fade-left', delay: 700, title: 'Main Dishes' },
    { image: 'images/item-1.jpg', aos: 'fade-left', delay: 900, title: 'Other Food' },
  ];

  return (
    <section id="items">
      <Container>
        <div className="heading" data-aos="fade-up" data-aos-delay="300">
          <h2>Check our Recipe's</h2>
        </div>

        <div className="row text-center text-lg-left">
          {items.map((item, index) => (
            <Col lg="3" md="4" col="6" key={index} data-aos={item.aos} data-aos-delay={item.delay}>
              <div className="imageBox">
                <a href={item.image} className="d-block mb-4 h-100" data-toggle="lightbox" data-gallery="example-gallery">
                  <img className="img-fluid img-thumbnail" src={item.image} alt="" />
                  <div className="textBox">
                    <h5>{item.title}</h5>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Items;