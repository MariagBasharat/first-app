import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/pro" element={<Products/>}/>
   <Route path="/con" element={<Contact/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/log" element={<Login/>}/>
   <Route path="/Reg" element={<Register/>}/>

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
