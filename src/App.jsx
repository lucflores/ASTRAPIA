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

function App() {

  return (
    <>
      <NavBar />
      <Carousel />
      <ItemListContainer greeting= "Bienvenidos" />
      <ItemCount />
      <Vista />
      <Parallax />
      <Card />
      <Form />
    </>
  )
}

export default App
