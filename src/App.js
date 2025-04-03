import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// 컴포넌트 임포트
import Header from './components/Header';
import Main from './components/program/Main';
import Footer from './components/Footer';
import Instructor from './components/instructor/Instructor';
import Index from './components/main/Index';
import Centerinfo from './centerInfo/Centerinfo';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/centerInfo' element={<Centerinfo/>}/>
        <Route path='/lesson' element={<Main/>}/>
        <Route path='/instructor' element={<Instructor/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
