import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
/* Our components */
import Pizzas from './components/Pizzas/Pizzas';
/* import { PropTypes } from 'prop-types'; */


class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/pizzas" component={Pizzas}/>
            </Switch>
        );
    }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));