import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/cart.scss'
function App() {

	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {toggleCart}=state

	let {user,cart}=state
	let mycart=cart.filter(x=>x.uid===user.id)
	const subtotal=a=>{
		if(a.length>0)
		{
			return a.map(x=>x.qty*x.price).reduce((sum,next) =>sum+next)
		}
		else
		{
			return 0
		}
	}

	const setQty =(id,qty) =>{
		cart=cart.map(x=>x.id===id?({...x,qty}):x)
		dispatch({type:"addtocart",payload:cart})
	}
	const removeFromCart=(id) =>{
		cart=cart.filter(x=>x.id!==id)
		dispatch({type:"addtocart",payload:cart})
	}
	return <div className={toggleCart?"cart-box active":"cart-box"}>
		<div className="cart">
				<div className="header">
					<div className="item">
						<big>My Cart {mycart.length>0&&<span>({mycart.length} items)</span>}</big>
					</div>
					<div className="item" onClick={e=>dispatch({type:"cart-close"})}>
						X
					</div>

				</div>
				<div className="body">
				{mycart.length>0
					?
					<div>
						<div className="scroll">
							{mycart.map(x=>
								<div key={x.id} className="line">
									<div className="left">
										<div className="image">
											<img width="80" src={x.imageURL} alt="" />
										</div>
										<div className="desc">
											<strong>{x.name}</strong>
											<br />
											<div className="actions">
												<div><button disabled={x.qty>10} onClick={e=>setQty(x.id,x.qty+1)}>+</button></div>
												<div><span>{x.qty}</span></div>
												<div><button disabled={x.qty<2} onClick={e=>setQty(x.id,x.qty-1)}>-</button></div>
												<div><span>X Rs.{x.price}</span></div>
											</div>
										</div>
									</div>
									<div className="right">
										<strong>Rs.{x.qty*x.price}</strong>
										<button onClick={e=>removeFromCart(x.id)}><i className="fa fa-trash-o"></i></button>
									</div>
								</div>

							)}
						</div>
						<div className="note">
							<img align="middle" width="40" src="/static/images/lowest-price.png" alt="" />
							You wont find it cheaper anywhere
						</div>
					</div>
					:
					<div className="noitems">
						<div>
							<h3>No Items in cart</h3>
							<p>your favourite items are just a click away</p>
						</div>
					</div>
					}
				</div>

				<div className="footer">
					{mycart.length>0?<div>
						<small>Promo Code can be apllied on payment page</small>
						<div className="btn">
							<span>Proceed to Checkout</span>
							<span>Rs. {subtotal(mycart)}</span>
						</div>
					</div>
					:<div align="center" className="btn">
						<div></div>
						<div>Start Shipping</div>
						<div></div>
					</div>}
				</div>
			</div>
	</div>
}
export default App