import './formulario.css';
const Formulario = () => {
  return (
    <div
      id='contacto'
      className='py-2 border-bottom d-flex align-items-center justify-content-center flex-column bg-gris formulario py-4'>
      <div className='w-100'>
        <h2 className='text-center carousel_title'>Formulario de contacto</h2>
        <div className='container_caleta w-100 mx-auto p-4'>
          <div className='d-flex row'>
            <div className='col-12 col-md-6 text-light'>
              <p>
                Envianos tu consulta o denuncia si has visto casos de pesca de
                arrastre no autorizada.
              </p>
              <p>Contactanos al:</p>
              <p>+56 9 8765 4321</p>
              <p>+56 9 4321 8765</p>

              <p>contacto@caletaportales.cl</p>
            </div>
            <form
              action='mailto:ce.mongez@duocuc.cl'
              className='d-flex flex-column gap-2 col-12 col-md-6 '>
              <input
                className='input_style'
                type='nombre'
                name='nombre'
                placeholder='*Nombre.'
              />
              <input
                className='input_style'
                name='numero'
                placeholder='*Numero de contacto.'
              />
              <input
                className='input_style'
                name='mail'
                type='mail'
                placeholder='*Email.'
              />
              <textarea
                className='textarea_style'
                name='mensaje'
                id=''
                placeholder='*Ingresa tú mensaje o denuncia.'></textarea>
              <input
                className='input_style btn-gris'
                type='submit'
                value={'Enviar'}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
