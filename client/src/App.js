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
import ViewAnimals from './components/pages/animals/view_animals/ViewAnimals'
import NewAnimal from './components/pages/animals/new_animal/NewAnimal'
import EditAnimal from './components/pages/animals/edit_animal/EditAnimal'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/users/register" component={Register} />
          <Route path="/users/recover" component={Recover} />
          <Route path="/blog/how-it-works" componen={How} />
          <Route path="/blog/adoption/cat" component={Cat} />
          <Route path="/blog/adoption/dog" component={Dog} />
          <Route path="/animals/new" component={NewAnimal} />
          <Route path="/animals/edit" component={EditAnimal} />
          <Route path="/animals/:id" component={PetDetails} />
          <Route path="/animals" component={ViewAnimals} />
          <Route path="/" component={General} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
