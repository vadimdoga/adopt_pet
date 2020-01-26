import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import General from './components/pages/general/General'
import Register from './components/pages/register/Register'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/users/register">
            <Register />
          </Route>
          <Route path="/">
            <General />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
