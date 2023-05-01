import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
      <NavBar />
      <Carousel />
      <ItemListContainer greeting={"Bienvenidos"} />
    </>
  )
}

export default App
