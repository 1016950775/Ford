!(function () {
    var $;
    var scroll = document.getElementById('scroll');
    var newImg = new Image();
    var oldImg = new Image();

    scroll.appendChild(newImg);
    scroll.appendChild(oldImg);

    scroll.style.position = 'relative';

    newImg.style.width = scroll.offsetWidth + 'px';
    newImg.style.height = scroll.offsetHeight + 'px';
    newImg.style.position = 'absolute';
    newImg.style.left = '1349px';
    newImg.style.top = '0px';
    // newImg.style.zIndex = '1';

    oldImg.style.width = scroll.offsetWidth + 'px';
    oldImg.style.height = scroll.offsetHeight + 'px';
    oldImg.style.position = 'absolute';
    oldImg.style.left = '0px';
    oldImg.style.top = '0px';
    // oldImg.style.zIndex = '2';

    var arrImg = [
        'image/image.imgs.full.high.webp',
        'image/image.imgs.full.high.jpg',
        'image/image.imgs.full.high (1).webp',
        'image/image.imgs.full.high (2).webp',
        'image/image.imgs.full.high (3).webp',
        'image/image.imgs.full.high (4).webp',
        'image/image.imgs.full.high (5).webp',
        'image/image.imgs.full.high (6).webp'
    ];

    var index = 0;
    var n;

    var btns = document.createElement('div');
    scroll.appendChild(btns);
    btns.id = 'btns';
    for(var i=0;i<arrImg.length;i++){
        var div = document.createElement('div');
        // div.appendChild(document.createTextNode(i+1));
        div.onclick = btn_click;
        div.setAttribute('myIndex',i);
        btns.appendChild(div);
    }

    aa();
    function aa() {
        changeBtn(index);
        oldImg.src = arrImg[index];
        oldImg.style.left = '0px';
        index = ++index%arrImg.length;
        newImg.src = arrImg[index];
        newImg.style.left = '1349px';

        n = 0;
        $ = setTimeout(function () {
            bb();

        },3000);
    }
    function bb() {
        if(n<1349){
            n += 50;
            oldImg.style.left = -n+'px';
            newImg.style.left = 1349 -n + 'px';
            $ = setTimeout(bb,13)
        }else{
            aa()
        }
    }

    function changeBtn(x) {
        for(var i=0;i<arrImg.length;i++){
            btns.children[i].className = '';
        }
        btns.children[x].className = 'active';
    }

    function btn_click() {
        // 1、停止当前动画
        clearTimeout($);

        // 2、改变初始图片
        index = this.getAttribute('myIndex')*1;
        // 3、恢复动画
        aa();
    }
    document .getElementById('leftbtn').onclick=function () {
        btns.children[(index-2+arrImg.length)%arrImg.length].click();
    }
    document .getElementById('rightbtn').onclick=function () {
        btns.children[index].click();
    }


})();










!(function () {
    var data = [
        ['110000','北京'],
        ['110100','北京市'],//直辖市码
        ['610000','陕西省'],
        ['610100','西安市'],
        ['612300','汉中市'],
        ['610500','渭南市'],
        ['620000','甘肃省'],
        ['620100','兰州市'],
        ['620200','嘉峪关市'],
        ['620300','金昌市'],
        ['620400','白银市'],
        ['510000','四川省'],
        ['510100','成都市'],
        ['510300','自贡市'],
        ['510400','攀枝花市'],
        ['510500','泸州市'],

    ];
    var form = document.forms[0];
    var p = form.province;
    var c = form.city;

    p.add(new Option('请选择一个省市*'));
    c.add(new Option('请选择一个地区*'));

    for(var i=0;i<data.length;i++){
        if(data[i][0].slice(-4) == '0000'){
            p.add(new Option(data[i][1],data[i][0]));
        }
    };

    p.onchange = function () {
        c.length = 1;
        // a.length = 1;
        var txt = p.value.slice(0,2);
        for(var i=0;i<data.length;i++){
            if(data[i][0].slice(0,2) == txt && data[i][0].slice(2,4)!= '00'&&data[i][0].slice(-2)=='00'){
                c.add(new Option(data[i][1],data[i][0]));
            }
        }
    };
})();




!(function () {
    var btn = document.getElementById('btn');
    var key = false;

    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 1000) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }

    btn.onclick = function () {
        if(key == false){
            key = true;



            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var n = 0;

            aa();
            function aa(){

                if(n < Math.PI/2){
                    n += 0.02;
                    window.scrollTo(0,Math.cos(n)*scrollTop)
                    setTimeout(aa,10);
                }else{
                    window.scrollTo(0,0)
                }
            }
            key = false;
        }
    }
})();