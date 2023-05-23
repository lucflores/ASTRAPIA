import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Card from './components/Card/Card';
import Parallax from './components/Parallax/Parallax';
import Form from './components/Form/Form';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <Carousel /> } />
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:idCategoria' element= {<ItemListContainer />} />
            <Route path='/item/:idItem' element= {<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
        
      <ItemListContainer greeting= "Bienvenidos" />
      <ItemCount />
      <Vista />
      <Parallax />
      <Form />
      <ItemDetailContainer />
    </>
  )
}

export default App
