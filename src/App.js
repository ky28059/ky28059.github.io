import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Layout from './components/Layout';
import Home from './components/Home';
import NameGenerator from './components/NameGenerator';


const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/name-gen' component={NameGenerator}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
