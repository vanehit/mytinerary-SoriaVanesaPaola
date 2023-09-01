import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Cities from './components/Pages/Cities/Cities';
import CityDetail from './components/Pages/Cities/CityDetails';
import { Provider } from 'react-redux';
import Itineraries from './components/Pages/Cities/Itineraries';
import { store } from './store/store';



function App() {
  

  return (
    
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} /> 
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:_id" element={<CityDetail />} />
            <Route path="/cities/:_id/itineraries" element={<Itineraries />} />
          </Route>
        </Routes>
      </Router>
    </Provider>    
    
  )
}

export default App;
