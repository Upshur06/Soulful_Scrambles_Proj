import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home'
import Menu from './Menu';
import Info from './Info';
import Online_Order from './Online_Order';
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>', authUser);

      if(auth){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>  
      <div className="App">  
        <Header />
      <Routes>
        <Route path='/payment'
          element={<Payment />}
        />
        <Route path='/login'
          element={<Login />}
        />
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
