import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MainPage from './components/MainPage/MainPage.js';
import Navigation from './components/Navigation/Navigation.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import Loader from './components/Loader/Loader.js';
import Contact from './components/Contact/Contact.js';
import './App.css';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000); 
  }

  render() {
    const { loading } = this.state;
    
    if (loading) {
      return <Loader />
    }

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


export default App;
