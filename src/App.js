import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingStarted';
import Login from './components/presentation/login';
import Register from './components/presentation/register';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/presentation/contact';
import Education from './components/presentation/education';
import Skill from './components/presentation/skill';
import project from './components/presentation/project';
import experience from './components/presentation/experience';
import Finalize from  './components/presentation/finalizePage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
     <Header></Header>

     <Switch>
          <PrivateRoute path="/education" component={Education}></PrivateRoute>
          <PrivateRoute path="/skill" component={Skill}></PrivateRoute>
          <PrivateRoute path="/project" component={project}></PrivateRoute>
          <PrivateRoute path="/experience" component={experience}></PrivateRoute>
          <PrivateRoute path="/contact" component={Contacts}></PrivateRoute>
          <PrivateRoute path="/resume-templates" component={GettingStarted}></PrivateRoute>
          <PrivateRoute path="/finalize" component={Finalize}></PrivateRoute>
          <Route path="/about-us"     component={AboutUs}></Route>
          <Route path="/getting-started" component={GettingStarted}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>             
          <Route path="/" component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>   
    </div>
   
  );
}

export default App;
