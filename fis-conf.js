/**
 *
 *
 *
 */



//flizhi util
var util=fis.get('lz_util');
//页面依赖合并配置
var depsPackConf=util.getPkgConf('page','static/page');


var flz_conf={
	depsPackConf:depsPackConf
}



//生产环境
fis.media('production')
.match('::package', {
    packager: fis.plugin('deps-pack',flz_conf['depsPackConf'])
})
