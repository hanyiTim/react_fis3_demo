import React,{Component,PropTypes} from 'react';

import 'dialog.less';

export default class Comp extends Component{
	constructor(props) {
		super(props);

		this.state={
			title:this.props.title || "提示",
			cancelStr:this.props.cancelStr || "取消",
			confirmStr:this.props.confirmStr || "确定",
			centerStyle:{}
		}
	}
	handleConfirm(){
		this.props.handleConfirm && this.props.handleConfirm.call && this.props.handleConfirm()
	}
	handleCancel(){
		this.props.handleCancel && this.props.handleCancel.call && this.props.handleCancel();
	}
	stopPropagation(event){
		event.stopPropagation();
	}
	preventDefault(event){
		event.preventDefault();
	}
	render(){
		let content =this.props.content || ""
		return (
			this.props.visible ? (
				<div className="dialog_wrap" onClick={this.handleCancel.bind(this)} onTouchMove={this.preventDefault}>
					<div ref="box" className="box" onClick={this.stopPropagation}>
						{
							this.props.title ? (
								<div className={style.title}>{this.state.title}</div>
							):null
						}
						<div className="contain">
							{content}
						</div>
						<div className="footer">
							{
								this.props.handleCancel?(
									<a onClick={this.handleCancel.bind(this)} href="javascript:void(0);" className={["btn","cancelBtn"].join(" ")} >{this.state.cancelStr}</a>
								):null
							}
							{
								this.props.handleConfirm?(
									<a onClick={this.handleConfirm.bind(this)} href="javascript:void(0);" className={["btn","confirmBtn"].join(" ")} >{this.state.confirmStr}</a>
								):null
							}
						</div>
					</div>
				</div>
			):null
		)
	}
}
