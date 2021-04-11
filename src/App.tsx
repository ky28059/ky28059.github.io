import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/index.css';

// Components
import Layout from './components/Layout';
import Home from './components/Home';
import WordGenerator from './components/WordGenerator';
import Particles from './components/Particles';


const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/word-gen' component={WordGenerator}/>
                    <Route path='/particles' component={Particles}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
