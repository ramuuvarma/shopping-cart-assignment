import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './banner.scss'
function Banner() {
	let [counter, setCounter] = React.useState(1)

	let state = useSelector(stateFromStore => stateFromStore)

	let dispatch = useDispatch()

	let currentBanner = state.banners.find(item => item.order === counter)

	const slidePrev = () => {
		if (counter < 2) {
			setCounter(1)
		}
		else {
			setCounter(counter - 1)
		}
	}

	const slideNext = () => {
		if (counter > 4) {
			setCounter(5)
		}
		else {
			setCounter(counter + 1)
		}
	}



	return <div className="slider-container">
		<div className="slider">
			<div className="flex">
				<div className="item">
					<img src={currentBanner.bannerImageUrl} alt={currentBanner.bannerImageAlt} />
				</div>
			</div>
		</div>
		<div className="indicators">
			<button onClick={slideNext} className="prev btn-prev">prev</button>
			<button onClick={slidePrev} className="next btn-next">next</button>
		</div>
		<div className="controls">
			{state.banners.map(item =>
				<button className={counter==item.order?'active':''} onClick={e => setCounter(item.order)}></button>
			)}
		</div>
	</div>
}
export default Banner