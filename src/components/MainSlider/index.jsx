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
    pauseOnDotsHover: true,
    autoplaySpeed: 5000,
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
            <div className='slide-content'>
              <h2 className='slide-title'>Фен-стайлер F732</h2>
              <button className='btn'>подробнее</button>
            </div>
          </div>
        </a>
        <a href='#' className='main-slide-link'>
          <div className='main-slide slide2'>
            <div className='slide-content'>
              <h2 className='slide-title'>Беспроводной моющий пылесос V810</h2>
              <button className='btn'>подробнее</button>
            </div>
          </div>
        </a>
        <a href='#' className='main-slide-link'>
          <div className='main-slide slide3'>
            <div className='slide-content'>
              <h2 className='slide-title'>GLED-маска D800</h2>
              <button className='btn'>подробнее</button>
            </div>
          </div>
        </a>
        <a href='#' className='main-slide-link'>
          <div className='main-slide slide4'>
            <div className='slide-content'>
              <h2 className='slide-title'>Массажная капсула AVALON</h2>
              <button className='btn'>подробнее</button>
            </div>
          </div>
        </a>
      </Slider>
    </div>
  );
}

export default MainSlider;
