/**
 * @file 表单填写详情页
 * @author jingxiangzheng
 */
import {formModeMap, swanDocsUrl} from '../../utils/const.js';
import {GET_COVER_MSG} from '../../mock/index.js';
/* global Page, swan, getApp */
/* eslint-disable babel/new-cap */
Page({
/* eslint-enable babel/new-cap */
    data: {
        swanDocsUrl
    },
    onLoad(options) {
        const id = options.id;
        this.coverMsgData = GET_COVER_MSG[id];
        const {cover, mode, formMode} = this.coverMsgData;
        this.setData({
            id,
            cover,
            mode,
            formList: formModeMap[formMode]
        });
    },

    /**
     * 输入框改变内容时触发
     *
     * @param {Object} e.detail 事件对象的详细信息
     */
    handleChange({detail}) {
        let {type, value} = detail;
        this.setData({
            [type]: value.trim()
        });
    },

    /**
     * 上传成功后触发
     *
     * @param {Object} e.detail 事件对象的详细信息
     */
    handleUploaded({detail}) {
        this.handleChange({detail});
    },

    /**
     * 表单提交时触发
     *
     * @return {Object} 如果校验失败返回错误提示弹框
     */
    handleSubmit() {
        const {
            name,
            word,
            portrait,
            id
        } = this.data;

        const errMsg = this.validateForm();
        if (errMsg) {
            return swan.showModal({
                title: '客官且慢',
                content: errMsg,
                showCancel: false,
                confirmColor: '#F7544F'
            });
        }

        swan.navigateTo({
            url: `/pages/result/result?id=${id}&name=${name}
            &word=${word}&portrait=${portrait}`
        });
    },

    /**
     * 增加一些基础的校验
     *
     * @return {string} errmsg 校验失败的原因信息
     */
    validateForm() {
        const formList = this.data.formList;
        let errMsg = '';
        formList.map(item => {
            const {
                type,
                limit,
                label
            } = item;

            const value = this.data[type];

            if (!value) {
                errMsg = `别忘了${label}啊`;
            }
            else if (value.length > limit) {
                errMsg = `${label}要在${limit}以内哦`;
            }
        });
        return errMsg;
    },
    redirectToSwanDocs() {
        this.setData({
            showDocs: true
        });
    }
});