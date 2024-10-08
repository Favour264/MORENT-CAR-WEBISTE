import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Bill from './Pages/Bill';
import Stage2 from './Pages/Stage2';
import Stage3 from './Pages/Stage3'
import Stage4 from './Pages/Stage4';



function App() {
  

  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bill" element={<Bill />} />
      <Route path="/Stage2" element={<Stage2 />} />
      <Route path="/Stage3" element={<Stage3/>} />
      <Route path="/Stage4" element={<Stage4/>} />
      
      </Routes>
    </Router>
      
    </>
  )
}

export default App
