/**
 * @file 信息卡片组件
 * @author jingxiangzheng
 */
/* eslint-disable babel/new-cap,no-undef */
Component({
/* eslint-enable babel/new-cap,no-undef */
    externalClasses: ['card-title-class'],
    properties: {
        type: {
            type: String,
            value: ''
        },
        cover: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: '度小智，祝你每天都可口可乐'
        },
        portrait: {
            type: String,
            value: ''
        },
        author: {
            type: String,
            value: '百小度'
        },
        usage: {
            type: Number,
            value: 110
        }
    },

    data: {
    },

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},

    detached: function () {},

    methods: {
        onTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            });
        }
    }
});