import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Cities from './components/Pages/Cities/Cities';



function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} /> 
            <Route path="/cities" element={<Cities />} /> 
          </Route>
        </Routes>
      </Router>
        
    </>
  )
}

export default App;
