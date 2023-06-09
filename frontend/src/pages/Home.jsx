import React from "react";
import "../styles.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience1.png";

import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/*-------- Hero section start ------*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="1" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  placeat eum cum esse assumenda molestiae quam cupiditate
                  doloremque distinctio voluptatum, molestias cumque doloribus
                  deleniti ea architecto soluta voluptatibus laboriosam nisi.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/*-------- Hero section end ------*/}

      {/*-------- services section start ------*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer out best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/*-------- Services section end ------*/}

      {/* ---------  Featured tour section start ----------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"}></Subtitle>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ------  Featured tour section end ------ */}

      {/* ------  experience section start ------ */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                  <br /> Ut repudiandae itaque illum aperiam, nesciunt pariatur
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------  experience section end ------ */}

      {/* ------  gallery section start ------ */}
      <MasonryImagesGallery />
      {/* ------  gallery section end ------ */}

      {/* ------  testimonial section start ------ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What our fans say about use
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------  testimonial section end ------ */}
      <Newsletter />
    </>
  );
};

export default Home;
