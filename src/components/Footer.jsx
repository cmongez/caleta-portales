import './footer.css';
import caleta from '../assets/caleta.jpg';
const Footer = () => {
  return (
    <div
      id='ubicacion'
      className='footer_bottom  footer p-0 m-0 d-flex flex-column align-items-center  container-fluid justify-content-between'>
      <div className='container_caleta p-0 m-0 pt-4  w-100  p-0 m-0 mx-auto'>
        <h2 className='text-center text-white carousel_title'>Ubicación</h2>
        <div className='row p-0 m-0 w-100 h-100 d-flex align-items-center container-fluid justify-content-center '>
          <div className='d-flex col-12 col-md-6 py-2 justify-content-center'>
            <div className=''>
              <h5>Valparaiso</h5>

              <div className=''>
                <img src={caleta} className='img-fluid ' alt=''></img>
              </div>
              <p className='m-0'>Av. España 2351, Caleta Diego Portales</p>
            </div>
          </div>
          <div className='d-flex col-12 col-md-6  justify-content-center'>
            <div className='w-100'>
              <iframe
                className='w-100 caleta_mapa'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9460.47187729098!2d-71.59803019098021!3d-33.03587578707206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0b4a7142e23%3A0xeb9417cae8ebc4d4!2sCaleta%20Diego%20Portales!5e0!3m2!1ses-419!2scl!4v1716744533916!5m2!1ses-419!2scl'
                allowfullscreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_bottom2 w-100'>
        <p className='text-center m-0 py-2 text-light'>
          © 2024 Caleta Portales
        </p>
      </div>
    </div>
  );
};

export default Footer;
