import './App.css';
import Header from './Header';
import Home from './Home'
import Menu from './Menu';
import Info from './Info';
import Online_Order from './Online_Order';
import Checkout from './Checkout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>  
      <div className="App">  
        <Header />
      <Routes>
        <Route path='/order'
          element={<Online_Order />}
        />
        <Route path='/checkout'
          element={<Checkout />}           
        />
        <Route path='/info'
          element={<Info />}
        />
        <Route path='/menu'
          element={<Menu />}
        />
        <Route path='/'
          element={<Home />}
        />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
