import './App.css';
import { Route, Routes } from 'react-router-dom';
import Product from './Components/Product';
import Login from './Components/Login';
import Register from './Components/Register';
import Like from './Components/Like';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Product />} />
        <Route exact path='/Like' element={<Like />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </>
  );
}
export default App;
