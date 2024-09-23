import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Ourpage from './components/Ourpage';
import Navbar from './components/Navbar';
import Buildpizza from './components/Buildpizza';
import Orderpizza from './components/Orderpizza';
import Cart from './components/Cart';
import { useState } from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [cart,setCart]=useState([])
  const [warning,setWarning]=useState(false)

  const handleCart = (item) => {
  const isPresent = cart.some((product) => product.id === item.id);
  if (!isPresent) {
    item.quantity = 1;
    // cart.push(item);
    setCart([...cart,item])
  } else {
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 2000);
  }  
};

  return (
    <>
   <Router>
    <Navbar count={cart.length} />
    <center>{warning && <div className='warning text-primary fw-bold fixed-top'>Item is already added to your cart</div>}</center>
      <Routes>
        <Route path='/' element={<Ourpage />}></Route>
        <Route path='/OrderPizza' element={<Orderpizza handleCart={handleCart}/>}></Route>
        <Route path='/BuildPizza' element={<Buildpizza />}></Route>
        <Route path='/ShopingCart' element={<Cart cart={cart} setCart={setCart} count={cart.length}/>}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
