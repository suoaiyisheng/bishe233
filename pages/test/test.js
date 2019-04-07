Page({
    data: {
        active: 0,
        goods: [{
            index: '饮料',
            id: 'fruit',
            lists: [{
                    name: '哇哈哈',
                    desc: '好喝不上火',
                    price: 2,
                    count: 1,
                    imgUrl: 'https://ojpbly1un.qnssl.com/gogopher.jpg?imageView2/1/w/150/h/150/q/75|imageslim'
                }, {
                    name: '哇哈哈',
                    desc: '好喝不上火',
                    price: 2,
                    count: 1,
                    imgUrl: 'https://ojpbly1un.qnssl.com/gogopher.jpg?imageView2/1/w/150/h/150/q/75|imageslim'
                },
                {
                    name: '哇哈哈',
                    desc: '好喝不上火',
                    price: 2,
                    count: 1,
                    imgUrl: 'https://ojpbly1un.qnssl.com/gogopher.jpg?imageView2/1/w/150/h/150/q/75|imageslim'
                },
                {
                    name: '王老吉',
                    desc: '好喝不上火',
                    price: 2,
                    count: 1,
                    imgUrl: 'https://ojpbly1un.qnssl.com/gogopher.jpg?imageView2/1/w/150/h/150/q/75|imageslim'
                }
            ]
        }, {
            index: '饭类',
            id: 'rice',
            lists: [{
                    name: '王老吉',
                    desc: '好喝不上火',
                    price: 2,
                    count: 1,
                    imgUrl: 'https://ojpbly1un.qnssl.com/gogopher.jpg?imageView2/1/w/150/h/150/q/75|imageslim'
                }, {
                    name: '哇哈哈',
                    desc: '好喝不上火',
                    price: 2,
                    count: 1,
                    imgUrl: 'https://ojpbly1un.qnssl.com/gogopher.jpg?imageView2/1/w/150/h/150/q/75|imageslim'
                },
                {
                    name: '哇哈哈',
                    desc: '好喝不上火',
                    price: 2,
                    count: 1,
                    imgUrl: 'https://ojpbly1un.qnssl.com/gogopher.jpg?imageView2/1/w/150/h/150/q/75|imageslim'
                },
                {
                    name: '哇哈哈',
                    desc: '好喝不上火',
                    price: 2,
                    count: 1,
                    imgUrl: 'https://ojpbly1un.qnssl.com/gogopher.jpg?imageView2/1/w/150/h/150/q/75|imageslim'
                }
            ]
        }]
    },

    onReady(){
        let query = wx.createSelectorQuery();
        let topViewHeight ;
        query.select('.top').boundingClientRect(rect => {
            console.log(rect.height);
            topViewHeight = rect.height
        }).exec();
        
        setTimeout(_=>{
            wx.getSystemInfo({
                success: res => {
                    console.log(res.windowHeight);
                    this.setData({
                        scrollViewHeight: res.windowHeight - topViewHeight - 94
                    })
                }
            })
        },100);

        this.setFoodListAreaHeight();
    },

    onChange(event) {
        this.setData({
            toView: this.data.goods[event.detail].id
        })
    },

    setFoodListAreaHeight() {
        let query = wx.createSelectorQuery();
        query.select('.category-title').boundingClientRect(rect => {
            this.setData({
                eleTitleHeight: rect.height
            })
        }).exec();
        query.select('.food').boundingClientRect(rect => {
            this.setData({
                eleFoodHeight: rect.height
            })
        }).exec();

        let foodAreaHeight = [0];
        let heightCount = 0;
        setTimeout(_ => {
            this.data.goods.forEach((item, index) => {
                heightCount += item.lists.length * this.data.eleFoodHeight + this.data.eleTitleHeight
                foodAreaHeight.push(heightCount)
            })
            this.setData({
                foodAreaHeight
            })
        }, 100)
    },

    // foodListScrolling(event) {
    //     let scrollTop = event.detail.scrollTop
    //     let foodAreaHeight = this.data.foodAreaHeight
    //     foodAreaHeight.forEach((el,index)=>{
    //         if(scrollTop >= foodAreaHeight[index] && scrollTop <= foodAreaHeight[index++]){
    //             this.setData({
    //                 active: index
    //             })
    //         }
    //     })
    // }
});