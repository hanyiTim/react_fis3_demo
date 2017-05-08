
import React,{Component,PropTypes}from 'react'
import {render} from  'react-dom'
import Header from '../../widget/header/header.jsx'
import Test from '../../widget/test/test.jsx'

class App extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='wrap'>
				<Header />
				<Test />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('index_app')
)