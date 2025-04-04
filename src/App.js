import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import './App.css';


// 컴포넌트 임포트
import Header from './components/Header';
import Main from './components/program/Main';
import Footer from './components/Footer';
import Instructor from './components/instructor/Instructor';
import Index from './components/main/Index';
import MobileHeader from "./components/MobileHeader";
import MobileFooter from "./components/MobileFooter";
import Centerinfo from "./components/centerInfo/Centerinfo";

function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 599px'});

  return (
    <BrowserRouter>
      {isMobile? <MobileHeader /> : <Header />}
      <Routes>
        <Route path='/' element={<Index isMobile={isMobile}/>}/>
        <Route path='/centerInfo' element={<Centerinfo/>}/>
        <Route path='/lesson' element={<Main/>}/>
        <Route path='/instructor' element={<Instructor/>}/>
      </Routes>
      {isMobile? <MobileFooter/> : <Footer />}
      
    </BrowserRouter>
  );
}

export default App;
