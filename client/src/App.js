
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Home from './pages/Home'
import FlightSearchPage from './pages/FlightSearchPage';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/FlightSearchPage'
              element={<FlightSearchPage/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
