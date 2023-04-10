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

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HQSx1DeGDdFSiaV74x9i0734dGABzbqhWRsaFgPInnRkVjpCGpRhoopapoe9z6HKTXP6GTUkF6xKie4Svr9N3t2009YkqVCO2');

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
    <Elements stripe={promise}>
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
    </Elements>
  );
}

export default App;
