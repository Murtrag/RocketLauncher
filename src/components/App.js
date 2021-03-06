import React, { Component } from "react";
import {
        HashRouter as Router, //BrowserRouter
        Route,
        Link,
        Switch,
        NavLink,
} from 'react-router-dom';
import NotFound from "./NotFound"
import Platform from "../containers/Platform"
import Main from "./Main"
import About from "./About";
import { Provider } from "react-redux";
import store from "../redux/store";


const Test = ()=><b>test</b>

const Navigation = () => {
	const style = {
		color: "red",
		fontWeight: "bold"
	}
	return <div>
        <h1>App</h1>
        <ul>
                <li><NavLink exact to="/" activeStyle={style} >Strona główna</NavLink></li>
                <li><NavLink to="/platform" activeStyle={style}>Platforma</NavLink></li>
                <li><NavLink to="/about" activeStyle={style}>O Aplikacji</NavLink></li>
        </ul>
        </div>
}


// <Provider store={store}>
//         <Content />
// </Provider>
class App extends Component {
        render() {
        return <Router>
			<>
			<Navigation />
                        <Switch>
					<Route exact path='/' component={Main} />
				<Provider store={store}>
					<Route path='/platform' component={Platform} />
				</Provider>	
					<Route path='/about' component={About} />
					<Route component={NotFound} /> 
                        </Switch>
			</>
                </Router>
        }
}
//TODO check why NotFound doasn't work


export default App;
