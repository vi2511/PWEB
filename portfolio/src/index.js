import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Menu from './component/Menu';
import Home from './template/Home'
import Curriculum from './template/Curriculum';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/curriculum" exact component={Curriculum}/>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);