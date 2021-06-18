import React,{Suspense,lazy,useEffect} from 'react'
import {_get} from '../utils'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
const  Header =lazy(()=>import( './common/header'))
const  Footer =lazy(()=>import( './common/footer'))
const  Login =lazy(()=>import( './login/login'))
const  Signup =lazy(()=>import( './login/signup'))

const Home =lazy(()=>import( './pages/home'))
const Products =lazy(()=>import( './pages/plp'))
const Cart =lazy(()=>import( './pages/cart'))

import {useDispatch} from 'react-redux'

function App()
{
	let dispatch=useDispatch()


	useEffect(() =>{
		_get("banners").then(d=>dispatch({type:"banners",payload:d}))
		_get("categories").then(d=>dispatch({type:"categories",payload:d}))
		_get("products").then(d=>dispatch({type:"products",payload:d}))
		// _get("users").then(d=>dispatch({type:"users",payload:d}))
		_get("cart").then(d=>{
			// console.clear()
			// console.log(d)
			if(d.response==="Success")
			{
				dispatch({type:"cart",payload:d.responseMessage})
			}
		})
		// _get("orders").then(d=>dispatch({type:"orders",payload:d}))
	},[])
	return <BrowserRouter>
		<Suspense fallback={"loading header"}><Header/></Suspense>
		<div className="container">
			<Switch>
				<Suspense fallback={"loading.."}><Route exact path="/" component={Home} /></Suspense>
				<Suspense fallback={"loading.."}><Route exact path="/Login" component={Login} /></Suspense>
				<Suspense fallback={"loading.."}><Route exact path="/Products" component={Products} /></Suspense>
				<Suspense fallback={"loading.."}><Route exact path="/Signup" component={Signup} /></Suspense>
			</Switch>
		</div>
		<Suspense fallback={"loading Footer"}><Footer/></Suspense>
		<Suspense fallback={"loading Cart"}><Cart/></Suspense>
	</BrowserRouter>
}
export default App