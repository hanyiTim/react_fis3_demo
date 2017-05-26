// 配置格式 ->  指令名称 正则规则 目标文件

// 指令名称 支持 rewrite 、 redirect 和 proxy。
// 正则规则 用来命中需要作假的请求路径。
// 目标文件 设置转发的目标地址，需要配置一个可请求的 url 地址。

// 1.将 data文件 通过工具 生成对应的json文件，
// 2.生成配置文件
// 3.要有开关，例如  mock_lock ,为true 才执行，如果不为true，如果 配置有内容，需要清空配置
// 4.用插件前需要配置mock目录，以及文件写入目录，data目标文件
// mock_dir，默认文件写在mock的data文件夹，data文件默认是 data.js
// mock_data
// mock_dest_dir
module.exports={
	rewrite:[
		{
			name:'user',
			reg:'^\/api\/user$',
			res:{
				rcode:1,
				data:{
					username:'haha',
					age:19,
					workState:'0'
				}
			}
		}
	]
}
