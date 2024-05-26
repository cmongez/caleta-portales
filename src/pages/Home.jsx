import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Productos from '../components/Productos';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';

const Home = () => {
  return (
    <div className=' container-fluid m-0 p-0'>
      <Navbar />
      <Hero />
      <Productos />
      <Formulario />
      <Footer />
    </div>
  );
};

export default Home;
