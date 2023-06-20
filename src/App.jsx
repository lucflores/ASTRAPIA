import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Parallax from './components/Parallax/Parallax';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Carousel />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos" />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='*' element={<h2> Sitio en construcción </h2>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Parallax />
          <Footer />
          </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
