import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import General from './components/pages/main/Main'
import Register from './components/pages/user/register/Register'
import Recover from './components/pages/user/recover/Recover'
import PetPage from './components/pages/Pet/PetPage/PetPage'
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
          <Route path="/users/recover">
            <Recover />
          </Route>
          <Route path="/pets">
            <PetPage />
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
