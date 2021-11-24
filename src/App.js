import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './Screens/LoginScreen';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import SplashScreen from './Screens/SplashScreen';
import DashBoard from './Screens/DashBoard';
//import {Router} from 'react-router-dom';
//import history from './Utilities/history';
//import { createBrowserHistory } from 'history';
function App() {
  //const history =createBrowserHistory();
  return (
    <div className="App">
      <Router>
        <Routes>
              {/*<Route exact path='/' element={<SplashScreen/>}/>*/} // add this to take time to connect remote server
              <Route path='/' element={<LoginScreen/>}/> // change path to /login
              <Route path='/dashboard' element={<DashBoard/>}/>
        </Routes>
      </Router>     
    </div>
  );
} 

export default App;