/**
 * @file 入口列表页
 * @author jingxiangzheng
 */
/* global Page, swan, getApp */
import {GET_INDEX_LIST, GET_INDEX_LIST_MORE} from '../../mock/index';

/* eslint-disable babel/new-cap */
Page({
/* eslint-enable babel/new-cap */
    data: {
        commonBar: {
            navigationStyle: {
                background: 'url(../../images/header.png) center /100% 100% no-repeat',
                height: '453.092rpx'
            },
            backIcon: false
        },
        fixedBar: {
            navigationStyle: {
                background: '#fff'
            },
            title: '表白神器',
            backIcon: false,
            isFullScreenWidth: true
        },
        moreList: GET_INDEX_LIST_MORE,
        list: GET_INDEX_LIST,
        status: null
    },

    /**
     * 获取新数据
     *
     */
    fetchData() {
        let {list, moreList} = this.data;
        // 防止修改引用
        list = JSON.parse(JSON.stringify(list));
        moreList = JSON.parse(JSON.stringify(moreList));

        // 模拟瀑布流数据展示，根据数组的中位来换列
        const listMidIndex = list.length / 2;
        const moreListMidIndex = moreList.length / 2;

        list = list.concat(moreList.slice(moreListMidIndex));
        moreList.unshift(listMidIndex, 0);
        Array.prototype.splice.apply(list, moreList.slice(0, moreListMidIndex + 2));
        this.setData({
            list,
            onBottom: false
        });
    },

    /**
     * 滚到底部时触发
     *
     */
    onReachBottom() {
        let status = this.data.status;
        if (!status) {// 保证首次下拉的时候自动加载
            status = 1;
        }
        else if (status !== 2) {// 非首次下拉且未到底失，状态随机
            const random = Math.random();
            // status：0点击加载更多，1自动加载更多，2没有更多了
            status = random > 0.5 ? 1 : (random > 0.1 ? 0 : 2);
        }
        this.setData({
            status,
            onBottom: true
        });
        // 自动请求数据
        setTimeout(() => {
            if (this.data.status === 1) {
                this.fetchData();
            }
        }, 400);
    },

    /**
     * 点击spin触发
     */
    handleSpin() {
        // 其他状态点击不加载
        if (this.data.status) {
            return;
        }
        this.setData({
            onBottom: false
        });
        this.fetchData();
    },

    /**
     * 点击卡片时触发
     *
     * @param {Object} e.currentTarget 当前事件对象
     */
    handleTap({currentTarget}) {
        swan.navigateTo({
            url: `/pages/detail/detail?id=${currentTarget.dataset.id}`
        });
    }
});
