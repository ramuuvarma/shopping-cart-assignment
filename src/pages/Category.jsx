import React from 'react'
import '../styles/category.scss'
function App(props)
{
	let {x}=props
	return <div className={props.className}>
			<div className="left">
				<img src={x.imageUrl} alt={x.description}/>
			</div>
			<div className="right">
				<h1>{x.name}</h1>
				<p>{x.description}</p>
				<button>explore {x.name}</button>
			</div>
	</div>
}
export default App