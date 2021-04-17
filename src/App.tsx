import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/index.css';

// Components
import Layout from './components/Layout';
import Home from './components/Home';
import WordGenerator from './components/WordGenerator';
import Particles from './components/Particles';
import DroughtCounter from './components/DroughtCounter';


const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/word-gen' component={WordGenerator}/>
                    <Route path='/drought' component={DroughtCounter}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
