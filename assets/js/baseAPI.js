// 每次调用请求的时候，会先调用这个函数 
// 这个函数可以拿到给ajax的配置对象
$.ajaxPrefilter(function(options) {
    console.log(options.url);
    options.url = 'http://www.liulongbin.top:3007' + options.url
})