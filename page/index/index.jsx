
import React,{Component,PropTypes}from 'react'
import {render} from  'react-dom'
import Header from '../../widget/header/header.jsx'
import Test from '../../widget/test/test.jsx'
import Dialog from '../../widget/dialog/dialog.jsx'

class App extends Component{
	constructor(props){
		super(props);
		this.state={
		  dialogStatus2:false,
		  dialogStatus:false,
		  selectState:false,
		  number:12
		}
	}
	showDialog(bool){
		console.log(2222);
		if(bool == true){
		  this.setState({
		    dialogStatus2:true
		  });
		  console.log("show alert");
		}else{
		  this.setState({
		    dialogStatus:true
		  })
		  console.log("show confirm");
		}

	}
	handleCancel(bool,a){
		console.log(a);
		if(bool == true){
		  this.setState({
		    dialogStatus2:false
		  })
		  console.log("取消回调-alert");
		}else{
		  this.setState({
		    dialogStatus:false
		  })
		  console.log("取消回调-confirm");
		}
	}
	handleConfirm(bool){
		console.log(333);
		if(bool == true){
		  this.setState({
		    dialogStatus2:false
		  })
		  console.log("确定回调-alert");
		}else{
		  this.setState({
		    dialogStatus:false
		  })
		  console.log("确定回调-confirm");
		}
	}
	ajax(url){
		var httpxml=new XMLHttpRequest();
		httpxml.open("get",url,true);
		httpxml.onreadystatechange=function(){
			if(httpxml.readyState == 4 && (httpxml.status == 200 || httpxml.status == 304)){
				console.log(typeof httpxml.responseText,eval("("+httpxml.responseText+")"))
			}
		}
		httpxml.send();
	}
	componentDidMount() {
		this.ajax("/api/user");
		this.ajax("/api/test");
		this.ajax("/api/test2");
	}
	render() {
		return (
			<div>
				<Header />
				<Test number={this.state.number} />
				<button onClick={this.showDialog.bind(this)} >弹出弹窗</button>
         		<button onClick={this.showDialog.bind(this,true)} >弹出提示</button>
         		<Dialog visible={this.state.dialogStatus} handleConfirm={this.handleConfirm.bind(this)} handleCancel={this.handleCancel.bind(this)} content="是否要加入守护团" />
         		<Dialog visible={this.state.dialogStatus2} handleConfirm={this.handleConfirm.bind(this,true)} content="购买成功" />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('index_app')
)