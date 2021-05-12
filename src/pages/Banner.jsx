import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/banner.scss'
function App()
{

	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let ob=state.banners.find(x=>x.order===state.order)

	return <div className="slider-container">
		<div className="slider">
			<div className="flex">
				<div className="item">
					<img src={ob.bannerImageUrl} alt={ob.bannerImageAlt}/>
				</div>
			</div>
		</div>
		<div className="controls">	
			<button onClick={e=>dispatch({type:"banners-active",payload:1})}></button>
			<button onClick={e=>dispatch({type:"banners-active",payload:2})}></button>
			<button onClick={e=>dispatch({type:"banners-active",payload:3})}></button>
			<button onClick={e=>dispatch({type:"banners-active",payload:4})}></button>
			<button onClick={e=>dispatch({type:"banners-active",payload:5})}></button>
		</div>
	</div>
}
export default App