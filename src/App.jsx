
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Pages/Login';
import ReactNavbar from './components/Pages/ReactNavbar';
import Register from './components/Pages/Register';
import Home from './components/Pages/Home';


function App() {
  return (

    <>

      <BrowserRouter>
        <ReactNavbar />

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>

      </BrowserRouter>

    </>



  );
}

export default App;
