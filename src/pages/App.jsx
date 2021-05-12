import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import Signup from './Signup'
import Cart from './Cart'
function App()
{
	return <BrowserRouter>
		<Header/>
		<div className="container">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Login" component={Login} />
				<Route exact path="/Products" component={Products} />
				<Route exact path="/Signup" component={Signup} />
			</Switch>
		</div>
		<Footer/>
		<Cart/>
	</BrowserRouter>
}
export default App