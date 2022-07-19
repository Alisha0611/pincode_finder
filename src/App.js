import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router ,Route , Switch} from 'react-router-dom';
import { Pincode } from './Components/Pincode/Pincode';
import { Location } from './Components/Location/Location'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/Pincode'>
            <Pincode />
          </Route>

          <Route exact path='/Location'>
            <Location />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
