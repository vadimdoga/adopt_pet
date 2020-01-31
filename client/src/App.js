import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import General from './components/pages/main/Main'
import Register from './components/pages/user/register/Register'
import Recover from './components/pages/user/recover/Recover'
import PetDetails from './components/pages/Pet/PetDetails/PetDetails'
import How from './components/pages/how-it-works/How'
import Cat from './components/pages/adoption/cat/Cat'
import Dog from './components/pages/adoption/dog/Dog'
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
          <Route path="/blog/how-it-works">
            <How />
          </Route>
          <Route path="/blog/adoption/cat">
            <Cat />
          </Route>
          <Route path="/blog/adoption/dog">
            <Dog />
          </Route>
          <Route path="/pets">
            <PetDetails />
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
