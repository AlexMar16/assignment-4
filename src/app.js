import React from "react";
import ReactDOM from "react-dom";
import "../styles/main";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
/* Our components */
import About from "./components/About/About";
import Offers from "./components/Offers/Offers";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import PizzaDetail from "./components/PizzaDetail/PizzaDetail";
import { fillCart } from "./actions/cartActions";

/* import { PropTypes } from "prop-types"; */


class App extends React.Component {
    componentDidMount() {
        const { fillCart } = this.props;
        fillCart();
    }

    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <NavBar logo="https://images.unsplash.com/photo-1449785227466-10687c63e194?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=507e6ca0f324d075de0b9561d2ea4547&auto=format&fit=crop&w=3289&q=80" />
                    <div className="container">
                        <Switch>
                            <Route path="/offers" component={Offers} />
                            <Route exact path="/pizzas" component={Menu} />
                            <Route path="/pizzas/:pizzaId" component={PizzaDetail} />
                            <Route path="/about" component={About} />
                            <Route path="/cart" component={Cart} />
                            <Route exact path="/" component={Menu} />
                            <Route render={({ location }) => (
                                <div>
                                    <div>404!</div>
                                    <div>{location.pathname} was not found!</div>
                                </div>
                            )} />
                        </Switch>
                    </div>
                </div>
            </ MuiThemeProvider>
        );
    }
}

const AppWithRedux = withRouter(connect(null, { fillCart })(App));

ReactDOM.render(
    <Provider 
        store={createStore(reducers, applyMiddleware(thunk))}><Router><AppWithRedux/></Router></Provider>,
    document.getElementById("app"));
