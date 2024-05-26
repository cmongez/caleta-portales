import carrusel_1 from '../assets/carrusel_1.jpg';
import carrusel_2 from '../assets/carrusel_2.jpg';
import carrusel_3 from '../assets/carrusel_3.jpg';
import './hero.css';

const Hero = () => {
  return (
    <div className='py-2 bg-gris '>
      <div className='container_caleta mx-auto'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide carousel_caleta'
          data-bs-ride='carousel'>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active ' data-bs-interval='2000'>
              <img
                src={carrusel_2}
                className='d-block w-100 img-fluid carousel_img'
                alt='...'></img>
              <div className='carousel-caption d-md-block '>
                <h2 className='carousel_title '>CALETA PORTALES</h2>
                <h4 className='carousel_title '>Desde 1929</h4>
              </div>
            </div>
            <div className='carousel-item' data-bs-interval='2000'>
              <img
                src={carrusel_3}
                className='d-block w-100 img-fluid carousel_img '
                alt='...'></img>
              <div className='carousel-caption d-md-block '>
                <h2 className='carousel_title '>
                  Fiesta de San Pedro Caleta Portales
                </h2>
                <p></p>
              </div>
            </div>
            <div className='carousel-item' data-bs-interval='1500'>
              <img
                src={carrusel_1}
                className='d-block w-100 img-fluid carousel_img'
                alt='...'></img>
              <div className='carousel-caption d-md-block '>
                <h2 className='carousel_title '>Pesca artesanal</h2>
                <h4 className='carousel_title '>Nuestros botes</h4>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
