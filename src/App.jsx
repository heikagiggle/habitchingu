import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from "./pages/about/About";
import Review from "./pages/review/Review";
import Sign from './pages/started/Sign';
import Big from './pages/habits/Big';



function App () {
  return (
    <div>
       <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/blog' element={<About />} />
          <Route path='/habit' element={<Big />} />
          <Route path='/review' element={<Review />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
