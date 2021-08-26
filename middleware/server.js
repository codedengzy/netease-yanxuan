let express = require('express');
let app = express();

//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/search', (req, res) => {
    let _search_v = req.query.searchValue;
    // 临时商品，先把流程走通
    let _tempGoods = [{
        name: '好看的男装',
        price: 99
    }, {
        name: '美丽的女装',
        price: 44
    }, {
        name: '可爱的童装',
        price: 55
    }, {
        name: '干活的工作服',
        price: 66
    }];
    let _filterGoods = _tempGoods.filter(n => {
        return n.name.indexOf(_search_v) !== -1;
    });
    res.send(_filterGoods);
});

app.get('/get_Tabs', (req, res) => {
    let _d = ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运行旅行', '数码家电', '全球特色'];
    res.send(_d);
});

app.get('/get_SwipeImg', (req, res) => {
    let _imgs = [
        'https://yanxuan.nosdn.127.net/ee856ce5b451dbdeab78abffce195957.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/195499737e4c86964fc5ba16a3af484c.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/43545a96cf86a70c72037094982fa51d.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/6bde94bfe94e65253e7bc636c225d23e.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
    ];
    res.send(_imgs);
})

app.get('/get_GoodsList', (req, res) => {
    let _goodsList = [
        {
            img_url: 'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
            img_txt: '新品首发'
        }, {
            img_url: 'http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
            img_txt: '居家生活'
        }, {
            img_url: 'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
            img_txt: '服饰鞋包'
        }, {
            img_url: 'http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
            img_txt: '美食酒水'
        }, {
            img_url: 'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
            img_txt: '个护清洁'
        }, {
            img_url: 'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
            img_txt: '母婴亲子'
        }, {
            img_url: 'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
            img_txt: '运动旅行'
        }, {
            img_url: 'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
            img_txt: '数码家电'
        }, {
            img_url: 'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
            img_txt: '全球特色'
        }, {
            img_url: 'http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
            img_txt: '好货抄底'
        }

    ];
    res.send(_goodsList);
})
// 分类页商品列表
app.get('/cate_goods_list_0',(req, res)=>{
	let _d = [{
		goods_img:'https://yanxuan-item.nosdn.127.net/0afcd9dd065aa207e56d34dd85aa136e.png',
		goods_name:'睡出丝滑娇肤，100%桑蚕丝防螨提花被 薄被',
		goods_price:679
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/c552b8bf17d88aa9bba6972f1d449483.png',
		goods_name:'自带清凉，黑科技持久冷感垫 三件套',
		goods_price:159
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/55793ff7a0b3eb47b4b562cabd1670d9.png',
		goods_name:'可折叠爽滑冰丝席 三件套',
		goods_price:189
	}];

	res.send( _d );
});

app.get('/cate_goods_list_1',(req, res)=>{
	let _d = [{
		goods_img:'https://yanxuan-item.nosdn.127.net/aa8d1a3f633f954474e421ef627c075a.png',
		goods_name:'法国原产条纹圆领短袖T恤情侣款',
		goods_price:578
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/8563f498cec5b5f9474c8daadce4ca9f.png',
		goods_name:'男式舒适丝棉条纹短袖衬衫',
		goods_price:209
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/16e78d60046c37375f8161e947258a70.png',
		goods_name:'女式方扣中跟乐福鞋',
		goods_price:349
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/e3b6d3274397cdc5c1632ebf63059897.png',
		goods_name:'男式无缝休闲运动T恤',
		goods_price:49.9
	}];

	res.send( _d );
});

app.get('/cate_goods_list_2',(req, res)=>{
	let _d = [{
		goods_img:'https://yanxuan-item.nosdn.127.net/ab5de9e34349e85581487446ea44b3e9.png',
		goods_name:'夏季宵食吮指好味，盱眙小龙虾4-6钱 3斤装',
		goods_price:109
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/926865f19bd4b3dc10285cb8307144e6.png',
		goods_name:'逛吃逛吃的青春季，想见你 情侣零食礼袋',
		goods_price:99
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/9e3ec5ff3fc254c30583ad9b65d39a9a.png',
		goods_name:'山药脆片 烧烤味 70克*3袋',
		goods_price:19
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/23a9fba86c3942f1a574731792854bc2.png',
		goods_name:'女式无缝运动T恤',
		goods_price:49.9
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/927f79fa2979260fa8e87fdb2187f701.png',
		goods_name:'女式低强度无缝运动文胸',
		goods_price:49.9
	}];

	res.send( _d );
});

app.listen(4567, () => {
    console.log('4567，中间件服务启动');
});
