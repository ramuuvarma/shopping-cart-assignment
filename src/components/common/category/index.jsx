import React from 'react'
import {Link} from 'react-router-dom'
import './category.scss'
import {useDispatch} from 'react-redux'
function Category(props)
{
	let dispatch=useDispatch()
	let catgeory=props.catgeory
	let className=props.className
	return <div className={className}>
			<div className="left">
				<img title={catgeory.description} src={catgeory.imageUrl} alt={catgeory.description}/>
			</div>
			<div className="right">
				<h1 title={catgeory.name}>{catgeory.name}</h1>
				<p title={catgeory.description}>{catgeory.description}</p>
				<Link title={catgeory.name} to="/Products" onClick={e=>dispatch({type:"category",payload:catgeory.id})}>explore {catgeory.name}</Link>
			</div>
	</div>
}
export default Category