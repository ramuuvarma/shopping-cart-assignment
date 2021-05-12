import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/login.scss'
function App(props)
{
	const [ob,setob]=React.useState({fn:"",ln:"",email:"",pwd:"",cpwd:""})
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {users}=state

	const handleClick=() => {

		if(ob.pwd===ob.cpwd)
		{
			if(users.some(x=>x.email===ob.email))
			{
				alert("email already exists")
				props.history.push("/Login")
			}
			else
			{
				let values={
					id:users.length+1,
					fn:ob.fn,
					ln:ob.ln,
					email:ob.email,
					password:ob.pwd
				}
				users=[...users,values]
				dispatch({type:"signup",payload:users})
				alert("signup success")
				props.history.push("/Login")
			}
		}
		else
		{
			alert("passwords donot match")
		}
	}

	return <div className="login">
		<div className="left">
			<h1>Signup</h1>
			<h3>We do not share your personal details with anyone</h3>
		</div>
		<div className="right">
			<p>First Name</p>
			<input  autoComplete={"off"} onChange={e=>setob({...ob,fn:e.target.value})} value={ob.fn} placeholder="First Name"/>
			<p>Last Name</p>
			<input  autoComplete={"off"} onChange={e=>setob({...ob,ln:e.target.value})} value={ob.ln} placeholder="Last Name"/>
			<p>Email</p>
			<input  autoComplete={"off"} onChange={e=>setob({...ob,email:e.target.value})} value={ob.email} placeholder="Email"/>
			<p>Password</p>
			<input  autoComplete={"off"} onChange={e=>setob({...ob,pwd:e.target.value})} value={ob.pwd} placeholder="Password"/>
			<p>Confirm Password</p>
			<input  autoComplete={"off"} onChange={e=>setob({...ob,cpwd:e.target.value})} value={ob.cpwd} placeholder="Confirm Password"/>
			<button onClick={handleClick}>Signup</button>
		</div>
	</div>
}
export default App