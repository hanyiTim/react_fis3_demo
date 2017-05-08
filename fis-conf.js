fis.set('project.files', '/index.html'); // 按需编译。

// 采用 commonjs 模块化方案。
fis.hook('commonjs', {
  baseUrl: './',
  extList: ['.js', '.jsx']
});

fis.match('{*.js,*.jsx}', {
  parser: fis.plugin('babel-5.x', {
      sourceMaps: true,
      optional: ["es7.decorators", "es7.classProperties"]
  }),
  rExt: '.js'
});

// 改用 npm 方案，而不是用 fis-components
fis.hook('node_modules');

// 设置成是模块化 js
fis.match('**.{js,jsx}', {
  isMod: true
});

fis.match('mod.js',{
  isMod:false
})

fis.match('*.{js,es,es6,jsx,ts,tsx}', {
  preprocessor: [
    fis.plugin('js-require-file'),
    fis.plugin('js-require-css')
  ]
})


//使用sass，scss 雪碧图合并
fis.match('*.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass'),
    useSprite: true,
});



fis.match('::package', {
  // 本项目为纯前段项目，所以用 loader 编译器加载，
  // 如果用后端运行时框架，请不要使用。
  postpackager: fis.plugin('loader', {
    useInlineMap: true
  })
});

