import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentic from './components/Authentic';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Manufacturer from './components/Manufacturer';
import Warehouse from './components/Warehouse';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manufacturer' element={<Manufacturer></Manufacturer>}></Route>
        <Route path='/warehouse' element={<Warehouse></Warehouse>}></Route>
        <Route path='/authentic' element={<Authentic></Authentic>}></Route>
      </Routes>
    </div>
  );
}

export default App;
