import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css';

const Home = () => {

const year = new Date().getFullYear();

  return (  <Helmet title ={"Home"}>
<section className="hero_section">
<Container>
  <Row>
    <Col lg='6' md='6' >
<div className="hero_content">
  <p className="hero_subtitle">Trending product in {year}</p>
<h2>Make Your Interior More Minimalisttics & Modern </h2>

<p>Lorem ipsum dolor sit amet consectetur adipisi
  cing elit. Voluptatum non eius, beatae eos quam quo nostrum s
  imilique magni magnam dicta nemo inventore odit quasi omnis quos fuga
   sint eum voluptate.</p>

   <button className="buy_btn">SHOP NOW </button>
</div>


    </Col>
<Col lg="6" md="6" >
  <div className="hero_img">
    <img src={heroImg} alt="" srcset="" />
  </div>
</Col>

  </Row>
</Container>
</section>

  </Helmet>
   
  )
}

export default Home