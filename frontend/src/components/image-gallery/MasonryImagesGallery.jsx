import React, { useEffect } from "react";
import galleryImages from "./galleryImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Row, Col, Container } from "reactstrap";
import Subtitle from "../../shared/Subtitle";
import { useLocation } from "react-router-dom";

const MasonryImagesGallery = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg="12">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}
            >
              <Masonry gutter="1rem">
                {galleryImages.map((item, index) => (
                  <img
                    className="masonry__img"
                    src={item}
                    key={index}
                    alt=""
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "10px",
                    }}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MasonryImagesGallery;
