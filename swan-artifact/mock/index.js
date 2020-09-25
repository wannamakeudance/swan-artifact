/**
 * @file 本地mock数据
 * @author jingxiangzheng
 */
import {cdnUrl} from '../utils/const.js';
import {upx2dpx} from '../utils';

// 首页信息流mock数据
export const GET_INDEX_LIST = [
    {
        id: 1,
        type: '',
        title: '度小智，祝你每天都可口可乐',
        cover: `${cdnUrl}card-list-cover1.png`,
        // 模板作者
        author: '百小智',
        // 头像
        portrait: `${cdnUrl}portrait.png`,
        // 使用量
        usage: 325
    },
    {
        id: 4,
        type: '',
        title: '车站公交亭表白，选对地点很重要',
        cover: `${cdnUrl}card-list-cover4.png`,
        author: '百小智',
        portrait: `${cdnUrl}portrait.png`,
        usage: 544
    },
    {
        id: 3,
        type: 'mini',
        title: '地中海装修风格的搭配体合集',
        cover: `${cdnUrl}card-list-cover3.png`,
        author: '百小智',
        portrait: `${cdnUrl}portrait.png`,
        usage: 211
    },
    {
        id: 2,
        type: 'mini',
        title: '老板电话，不接后果很严重',
        cover: `${cdnUrl}card-list-cover2.png`,
        author: '百小智',
        portrait: `${cdnUrl}portrait.png`,
        usage: 155
    }
];
export const GET_INDEX_LIST_MORE = [
    {
        id: 5,
        type: 'mini',
        title: '老婆电话，快点接哦',
        cover: `${cdnUrl}card-list-cover5.png`,
        author: '百小智',
        portrait: `${cdnUrl}portrait.png`,
        usage: 189
    },
    {
        id: 6,
        type: 'mini',
        title: '每天想你一点点',
        cover: `${cdnUrl}card-list-cover6.png`,
        // 模板作者
        author: '百小智',
        // 头像
        portrait: `${cdnUrl}portrait.png`,
        // 使用量
        usage: 209
    },
    {
        id: 7,
        type: '',
        title: '欢迎参加我们的婚礼',
        cover: `${cdnUrl}card-list-cover7.png`,
        // 模板作者
        author: '百小智',
        // 头像
        portrait: `${cdnUrl}portrait.png`,
        // 使用量
        usage: 166
    },
    {
        id: 3,
        type: 'mini',
        title: '地中海装修风格的搭配体合集',
        cover: `${cdnUrl}card-list-cover3.png`,
        author: '百小智',
        portrait: `${cdnUrl}portrait.png`,
        usage: 211
    }
];

/**
 * 详情页mock数据
 * id为1时，读取key值为1的数据
 */
export const GET_COVER_MSG = {
    1: {
        // 封面图
        cover: `${cdnUrl}card-detail-1.png`,
        mode: 'aspectFill',
        // 是否是上传图片模式
        isUploadMode: 0,
        formMode: 'mode1'
    },
    2: {
        cover: `${cdnUrl}card-detail-2.png`,
        mode: 'aspectFit',
        isUploadMode: 1,
        formMode: 'mode2'
    },
    3: {
        cover: `${cdnUrl}card-detail-3.png`,
        mode: 'aspectFit',
        isUploadMode: 1,
        formMode: 'mode2'
    },
    4: {
        cover: `${cdnUrl}card-detail-4.png`,
        mode: 'aspectFill',
        isUploadMode: 0,
        formMode: 'mode1'
    },
    5: {
        cover: `${cdnUrl}card-detail-5.png`,
        mode: 'aspectFit',
        isUploadMode: 1,
        formMode: 'mode2'
    },
    6: {
        cover: `${cdnUrl}card-detail-6.png`,
        mode: 'aspectFit',
        isUploadMode: 1,
        formMode: 'mode3'
    },
    7: {
        cover: `${cdnUrl}card-detail-7.png`,
        mode: 'aspectFill',
        isUploadMode: 0,
        formMode: 'mode4'
    }
};

/**
 * 生成结果页的mock数据
 * 1. id为1时，读取key值为1的数据
 * 2. name为姓名，word为文案，protrait为头像
 * 3. x、y分别代表canvas的横纵坐标轴
 */
export const GET_CANVAS_MSG = {
    // 可口可乐
    1: {
        // canvas背景图
        canvas: `${cdnUrl}card-canvas-1.png`,
        isUploadMode: 0,
        // 绘制等坐标轴信息
        ids: {
            name: {
                color: '#e3cfd1',
                fontStyle: `${upx2dpx(72)}px bold Microsoft YaiHei`,
                x: upx2dpx(366),
                y: upx2dpx(1041)
            },
            word: {
                color: '#e3cfd1',
                fontStyle: `${upx2dpx(42)}px bold Microsoft YaiHei`,
                x: upx2dpx(366),
                y: upx2dpx(1127)
            }
        }
    },
    // 老板电话
    2: {
        canvas: `${cdnUrl}card-canvas-2.png`,
        isUploadMode: 1,
        ids: {
            name: {
                color: '#fff',
                fontStyle: `${upx2dpx(68)}px bold Microsoft YaiHei`,
                x: 'center',
                y: upx2dpx(868)
            },
            portrait: {
                x: upx2dpx(393),
                y: upx2dpx(374),
                width: upx2dpx(400),
                height: upx2dpx(400)
            }
        }
    },
    // 通缉犯
    3: {
        canvas: `${cdnUrl}card-canvas-3.png`,
        isUploadMode: 1,
        ids: {
            name: {
                color: '#1B1002',
                fontStyle: `${upx2dpx(93)}px bold STSongti-SC-Black`,
                x: 'center',
                y: upx2dpx(1278)
            },
            portrait: {
                x: upx2dpx(290),
                y: upx2dpx(550),
                width: upx2dpx(600),
                height: upx2dpx(600)
            }
        }
    },
    // 公交车站牌
    4: {
        canvas: `${cdnUrl}card-canvas-4.png`,
        isUploadMode: 0,
        ids: {
            name: {
                color: '#fff',
                fontStyle: `${upx2dpx(178)}px bold Microsoft YaiHei`,
                x: upx2dpx(278),
                y: upx2dpx(1081)
            },
            word: {
                color: '#fff',
                // 原定114
                fontStyle: `${upx2dpx(108)}px bold Microsoft YaiHei`,
                x: upx2dpx(278),
                y: upx2dpx(1307)
            }
        }
    },
    // 新垣结衣电话
    5: {
        canvas: `${cdnUrl}card-canvas-2.png`,
        isUploadMode: 1,
        ids: {
            name: {
                color: '#fff',
                fontStyle: `${upx2dpx(68)}px bold Microsoft YaiHei`,
                x: 'center',
                y: upx2dpx(868)
            },
            portrait: {
                x: upx2dpx(393),
                y: upx2dpx(374),
                width: upx2dpx(400),
                height: upx2dpx(400)
            }
        }
    },
    // 每天想你一点点
    6: {
        canvas: `${cdnUrl}card-canvas-6.png`,
        isUploadMode: 1,
        ids: {
            name: {
                color: '#000',
                fontStyle: `${upx2dpx(90)}px bold Microsoft YaiHei`,
                x: 'center',
                y: upx2dpx(1622)
            },
            portrait: {
                x: upx2dpx(151),
                y: upx2dpx(377),
                width: upx2dpx(877),
                height: upx2dpx(1097)
            }
        }
    },
    // 欢迎参加我们的婚礼
    7: {
        canvas: `${cdnUrl}card-canvas-7.png`,
        isUploadMode: 0,
        ids: {
            name: {
                color: '#000',
                fontStyle: `${upx2dpx(60)}px bold Microsoft YaiHei`,
                x: upx2dpx(315),
                y: upx2dpx(1152)
            },
            word: {
                color: '#000',
                fontStyle: `${upx2dpx(60)}px bold Microsoft YaiHei`,
                x: upx2dpx(686),
                y: upx2dpx(1152)
            }
        }
    }
};
