!(function () {
    var navs = document.getElementById('navs');
    var $ = navs.offsetTop;
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > $){
            navs.style.top = scrollTop-$ + 'px';
        }else{
            navs.style.top = '0px';
        }

    }
})();





!(function () {
    var menu = document.getElementById('menu');
    var content = document.getElementById('content');
    var btn = document.getElementById('btn');
    var maxWidth = content.scrollWidth;
    var n = 0;
    var key;

    btn.onmouseenter = btn_enter;
    menu.onmouseleave = menu_leave;

    function btn_enter() {
        aa();
        function aa() {
            if(n < maxWidth){
                n += 1;
                content.style.width = n + 'px';
                clearTimeout(key);
                key = setTimeout(aa,13);
            }else{
                content.style.width = maxWidth + 'px';
            }
        }

    }

    function menu_leave() {
        aa();
        function aa() {
            if(n > 0){
                n -= 1;
                content.style.width = n + 'px';
                clearTimeout(key);
                key = setTimeout(aa,13);
            }else{
                content.style.width = '0px';
            }
        }

    }
})();