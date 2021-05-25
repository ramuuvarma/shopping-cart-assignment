import React,{Suspense} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './plp.scss'
const Product=React.lazy(() => import("../../common/product"))
function Products()
{
	const [status,setstatus]=React.useState(true)
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {products,categories,cart,user}=state


	const addtocart=product=>{
		// console.log(cart.some(x=>x.pid===product.id))
		if(cart.some(cartItem=>cartItem.pid===product.id))
		{
			let singleCart=cart.find(cartItem=>cartItem.pid===product.id)	
			let {id,qty}=singleCart
			qty=qty+1
			cart=cart.map(cartItem=>cartItem.id===id?({...cartItem,qty}):cartItem)

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
			{categories.map(category=>
				(status&&<p key={category.name}>{category.name}</p>)
			)}
			<span onClick={e=>setstatus(!status)}>{!status&&categories[0].name} <i className="fa fa-chevron-down"></i></span>
		</div>
		<div className="right">
			{products.map(product=>
				<Suspense  fallback={<p align="center"><i className="fa fa-5x fa-spin fa-spinner"></i></p>}>
					<Product key={product.id} product={product} />
				</Suspense>
			)}
		</div>
	</main>
	
}
export default Products