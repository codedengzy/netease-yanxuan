/* 
    rem.js适配文件
    作者：codedzy
*/
;(function(win){
    var doc=win.document;
    var docEl=doc.documentElement;
    var metaEl= docEl.querySelector("meta[name='viewport']");
    // 获取是设备像素比
    var dpr=win.devicePixelRatio;
    var tid;
    // 设置meta的content的属性
    metaEl.setAttribute('content','initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no viewport-fit=cover');
    function refreshRem(){
        // 获取视窗相对位置的宽度
        var width=docEl.getBoundingClientRect().width;
        // 获取客户端设备信息
        var ua=navigator.userAgent.toLowerCase();
        if (!/ipad/.test(ua)) {
            if (width/2>750) {
                width=width*dpr;
            }
            var rem=width/10;
            docEl.style.fontSize=rem+'px';
        }
    }
    refreshRem();
    win.addEventListener('resize',()=>{
        clearTimeout(tid);
        tid=setTimeout(refreshRem,300);
    },false)
    win.addEventListener('pageshow',()=>{
        clearTimeout(tid);
        setTimeout(refreshRem,300);
    },false);
    // console.log(metaEl);
})(window)