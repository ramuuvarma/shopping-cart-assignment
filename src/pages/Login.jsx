import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/login.scss'
function App(props)
{
	const [ob,setob]=React.useState({email:"",password:""})
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	const handleClick=() => {
		if(state.users.some(x=>x.email===ob.email && x.password===ob.password))
		{
			let user=state.users.find(x=>x.email===ob.email && x.password===ob.password)
			alert("login success")
			dispatch({type:"login",payload:user})
			props.history.push("/")
		}
		else
		{
			alert("login failed")
			props.history.push("/Signup")
		}
	}
	return <div className="login">
		<div className="left">
			<h1>Login</h1>
			<h3>Get Acces to your orders wishlist and recommendations</h3>
		</div>
		<div className="right">
			<p>Email</p>
			<input onChange={e=>setob({...ob,email:e.target.value})} value={ob.email} placeholder="Email" />
			<p>Password</p>
			<input onChange={e=>setob({...ob,password:e.target.value})} value={ob.password} placeholder="password" />
			<button onClick={handleClick}>Login</button>
		</div>
	</div>
}
export default App