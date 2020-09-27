/**
 * @file 常量配置
 * @author jingxiangzheng
 */

// 静态资源cdn地址
export const cdnUrl = 'https://b.bdstatic.com/miniapp/assets/images/artifact/';
// 分享页的配置
export const shareConfig = {
    title: '表白神器',
    content: '世界很复杂，百度更懂你',
    imageUrl: 'https://b.bdstatic.com/miniapp/images/baidulogo1.jpg',
    path: '/pages/index/index'
};

// swan-demo 小程序的相关配置
export const swanDemoConfig = {
    // 因为是业务appkey，所以先不写
    appKey: ''
};
// swan-docs 文档平台连接地址
export const swanDocsUrl = 'https://smartprogram.baidu.com/docs/develop/component/formlist_input/';

// 表单的几种模式
export const formModeMap = {
    mode1: [{
        type: 'name',
        label: '输入姓名',
        limit: 4,
        value: ''
    },
    {
        type: 'word',
        label: '表白文案',
        limit: 7,
        value: ''
    }
    ],
    mode2: [
        {
            type: 'name',
            label: '输入姓名',
            limit: 4,
            value: ''
        },
        {
            type: 'portrait',
            label: '上传头像',
            placeholder: '请上传头像',
            value: ''
        }
    ],
    mode3: [
        {
            type: 'name',
            label: '表白文案',
            limit: 7,
            value: ''
        },
        {
            type: 'portrait',
            label: '上传照片',
            placeholder: '请上传照片',
            value: ''
        }
    ],
    mode4: [
        {
            type: 'name',
            label: '男方姓名',
            limit: 4,
            value: ''
        },
        {
            type: 'word',
            label: '女方姓名',
            limit: 4,
            value: ''
        }
    ]
};