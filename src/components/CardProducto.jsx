import './cardProducto.css';
const CardProducto = ({ producto, precio, descripcion, img }) => {
  console.log('{ producto, precio, descripcion, img }', {
    producto,
    precio,
    descripcion,
    img,
  });
  return (
    <div className='d-flex col-12 col-sm-4 col-md-3 col-lg-2 py-2 justify-content-center'>
      <div className='card_caleta d-inline-block '>
        <div className='p-2 card_caleta_img_container '>
          <img
            src={img}
            className='card_caleta_img img-fluid bg-white'
            alt=''
          />
        </div>
        <div className='p-2'>
          <h3 className='card_caleta_title m-0'>{producto}</h3>
          <p className='card_caleta_description m-0 text-muted'>
            {descripcion}
          </p>
          {precio == 0 ? (
            <p className='card_caleta_price m-0 fw-semibold text-danger'>
              Agotado
            </p>
          ) : (
            <p className='card_caleta_price m-0 fw-semibold'>${precio}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
