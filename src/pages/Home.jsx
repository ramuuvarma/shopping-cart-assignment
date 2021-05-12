import React from 'react'
import {useSelector} from 'react-redux'
import Category from './Category'
import Banner from './Banner'

function App()
{
	let state=useSelector(s=>s)
	return <div>
		<Banner />
		{state
			.categories
			.filter(x=>x.enabled)
			.map((x,i) =>
				<Category className={i%2===0?"categories active":"categories"} key={x.id} x={x} />
			)}
	</div>
}
export default App