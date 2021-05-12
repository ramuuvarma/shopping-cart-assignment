import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/products.scss'
function App()
{
	const [status,setstatus]=React.useState(true)
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {products,categories,cart,user}=state


	const addtocart=product=>{
		// console.log(cart.some(x=>x.pid===product.id))
		if(cart.some(x=>x.pid===product.id))
		{
			let single=cart.find(x=>x.pid===product.id)	
			let {id,qty}=single
			qty=qty+1
			cart=cart.map(x=>x.id===id?({...x,qty}):x)
		dispatch({type:"addtocart",payload:cart})
		}
		else
		{
			let ob={...user,...product,uid:user.id,pid:product.id,qty:1,id:cart.length+1}
			cart=[...cart,ob]
		dispatch({type:"addtocart",payload:cart})
		}
	}
	return <main>
		<div className="left">
			{categories.map(x=>
				(status&&<p key={x.name}>{x.name}</p>)
			)}
			<span onClick={e=>setstatus(!status)}>{!status&&categories[0].name} <i className="fa fa-chevron-down"></i></span>
		</div>
		<div className="right">
			{products.map(x=>
				<div key={x.id} className="item">
					<big>{x.name}</big>
					<br/>
					<img src={x.imageURL} alt=""/>
					<div className="desc">{x.description.slice(0,80)}</div>
					<div className="buy">
						<h4>MRP: {x.price}</h4>
						<button onClick={e=>addtocart(x)}>Buy Now</button>
					</div>
				</div>
				
			)}
		</div>
	</main>
	
}
export default App