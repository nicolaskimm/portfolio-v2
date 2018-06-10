import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MainPage from './components/main page/MainPage';
import Navigation from './components/navigation/Navigation';
import AboutMe from './components/about me/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Loader from './components/Loader/Loader';
import Contact from './components/contact/Contact';
import './App.css';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000); 
  }

  render() {
    const { loading } = this.state;
    
    if(loading) {
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
            <Route path='/loader' component={Loader} />    
          </Router>
        </Router>
      </div>
    );
  }
}


export default App;
