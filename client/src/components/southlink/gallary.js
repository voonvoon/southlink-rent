import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 image-intro"
          src="https://res.cloudinary.com/dvsb4asug/image/upload/v1676355400/rentbase_upload/south_link_full_qrqtxw.jpg"
          alt="SouthLink LifeStyle Service Apartment main entrance"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 image-intro"
          src="https://res.cloudinary.com/dvsb4asug/image/upload/v1675666720/rentbase_upload/1675666714329.jpg"
          alt="SouthLink LifeStyle Service Apartment facilities floor"
        />

      
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 image-intro"
          src="https://res.cloudinary.com/dvsb4asug/image/upload/v1675666855/rentbase_upload/1675666845774.jpg"
          alt="SouthLink LifeStyle Service Apartment main lobby"
        />

       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 image-intro"
          src="https://res.cloudinary.com/dvsb4asug/image/upload/v1676356029/rentbase_upload/IMG_20230211_164550_kikfbv.jpg"
          alt="SouthLink LifeStyle Service Apartment main entrance"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 image-intro"
          src="https://res.cloudinary.com/dvsb4asug/image/upload/v1676356031/rentbase_upload/IMG_20230211_164816_lqtts8.jpg"
          alt="SouthLink LifeStyle Service Apartment main entrance"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 image-intro"
          src="https://res.cloudinary.com/dvsb4asug/image/upload/v1676356039/rentbase_upload/IMG_20230211_165518_vor6kq.jpg"
          alt="SouthLink LifeStyle Service Apartment main entrance"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;