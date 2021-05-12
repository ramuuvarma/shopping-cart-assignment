import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import '../styles/header.scss'
function App()
{

	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let {user,cart}=state
	let mycart=cart.filter(x=>x.uid===user.id)
	return <header>
		<div className="item">
			<img width="120"  src="/static/images/logo.png" alt=""/>
		</div>
		<div className="item">
			<Link to="/">Home</Link>
			<Link to="/Products">Products</Link>
		</div>
		<div className="item">
			<div>
				<Link to="/Login">Login</Link>
				<Link to="/Signup">Signup</Link>
			</div>
			<div>
				<button onClick={e=>dispatch({type:"cart-open"})}><i className="fa fa-2x fa-shopping-cart"></i> {mycart.length} items</button>
			</div>
		</div>
	</header>
}
export default App