import React,{Suspense} from 'react'
import {_post} from '../../../utils'
import {useSelector,useDispatch} from 'react-redux'
import './plp.scss'
const Product=React.lazy(() => import("../../common/product"))
function Products()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {products,categories,cart,user,category}=state
	const [status,setstatus]=React.useState(true)
	
	
	const addtocart=product=>{
		_post("cart",{pid:product.id})	
		.then(d=>{
			if(d.response==="Success")
			{
				alert("aded to cart successfully")
				dispatch({type:"cart",payload:d.responseMessage})
			}

		})
	}
	return <main>
		<div className="left">
			{categories.map(categoryItem=>
				(status&&<p onClick={e=>dispatch({type:"category",payload:categoryItem.id})} className={categoryItem.id===category?'active':''} key={categoryItem.name}>{categoryItem.name}</p>)
			)}
			<span onClick={e=>setstatus(!status)}>{!status&&categories[0].name} <i className="fa fa-chevron-down"></i></span>
		</div>
		<div className="right">
			{products
			.filter(product=>product.category.toString().startsWith(category))
			.map(product=>
				<Suspense  key={product.id} fallback={<p align="center"><i className="fa fa-5x fa-spin fa-spinner"></i></p>}>
					<Product addtocart={addtocart} product={product} />
				</Suspense>
			)}
		</div>
	</main>
	
}
export default Products