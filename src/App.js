import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MainPage from './components/main page/MainPage';
import Navigation from './components/navigation/Navigation';
import AboutMe from './components/about me/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Router path='/' component={Navigation}>
            <IndexRoute component={MainPage} />
            <Route path='/contact' component={Contact} />
            <Route path='/aboutme' component={AboutMe} />  
            <Route path='/projects' component={Projects} />  
            <Route path='/skills' component={Skills} />    
          </Router>
        </Router>
      </div>
    );
  }
}

const Contact = () => <h1> oto kontakt </h1>

export default App;
