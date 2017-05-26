import React,{Component,PropTypes} from 'react';

export default class Comp extends Component{
	constructor(props) {
		super(props);
		this.state={
			number:this.props.number || 0
		}
	}
	render() {
		return (
			<div>
				<div className='test'>
					props   {this.props.number}
				</div>
				<div className='test'>
					state   {this.state.number}
				</div>
			</div>
		)
	}
}
