import CardProducto from './CardProducto';
import { useEffect, useState } from 'react';
import { getApiPrecios } from '../api/caletaPortalesApi';
import './productos.css';
const Productos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getApiPrecios().then((data) => setProductos(data));
  }, []);
  return (
    <div
      id='productos'
      className='py-4 border productos d-flex align-items-center'>
      <div className='container_caleta mx-auto'>
        <h2 className='text-center carousel_title '>Nuestros Productos</h2>
        <div className='container-fluid '>
          <div className='row justify-content-center'>
            {productos.map(({ producto, precio, descripcion, img }) => (
              <CardProducto
                key={producto}
                producto={producto}
                precio={precio}
                descripcion={descripcion}
                img={img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
