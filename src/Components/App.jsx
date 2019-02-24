import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Landingpage';
import Project from './Projects';
import { Link } from 'react-router-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Main />
        <Project />
      </div>

    );
  }
}

export default App;
