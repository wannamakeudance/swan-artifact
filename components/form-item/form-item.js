/**
 * @file 子表单组件
 * @author jingxiangzheng
 */
/* global Component, swan, getApp */

/* eslint-disable babel/new-cap */
Component({
/* eslint-enable babel/new-cap */
    properties: {
        placeholder: {
            type: String,
            value: '请在此输入'
        },
        label: {
            type: String,
            value: '输入姓名'
        },
        value: {
            type: String,
            value: ''
        },
        /**
         * name为姓名
         * word为表白文案
         * image为替换头像
         */
        type: {
            type: String,
            value: 'name'
        }
    },

    methods: {

        /**
         * 输入框改变内容时触发
         *
         * @param {Object} e.detail 事件对象的详细信息
         */
        handleChange({detail}) {
            this.triggerEvent('form-item-change', {
                value: detail.value,
                type: this.data.type
            });
        },

        /**
         * 上传图片后触发
         *
         */
        handleUpload() {
            const type = this.data.type;
            if (type !== 'portrait') {
                return;
            }
            swan.chooseImage({
                count: 1,
                sourceType: ['album'],
                success: res => {
                    const src = res.tempFilePaths[0];
                    this.setData({
                        value: src
                    });
                    this.triggerEvent('form-upload-success', {
                        value: src,
                        type
                    });
                },
                fail: err => {
                    this.triggerEvent('form-upload-fail', {
                        value: err,
                        type
                    });
                }
            });
        }
    }
});