import './MainSlider.scss';
import Slider from 'react-slick';

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: false,
    autoplaySpeed: 4000,
    customPaging: (i) => (
      <p
        style={{
          fontSize: '14px',
          color: 'white',
        }}
      >
        {i + 1}
      </p>
    ),
  };
  return (
    <div className='main'>
      <Slider {...settings}>
        <a href='' className='main-slide-link'>
          <div className='main-slide slide1'>
            <div className="container">
                <h2></h2>
            </div>
          </div>
        </a>
        <a href='' className='main-slide-link'>
          <div className='main-slide slide2'></div>
        </a>
        <a href='' className='main-slide-link'>
          <div className='main-slide slide3'></div>
        </a>
        <a href='' className='main-slide-link'>
          <div className='main-slide slide4'></div>
        </a>
      </Slider>
    </div>
  );
}

export default MainSlider;
