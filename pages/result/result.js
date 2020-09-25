/**
 * @file 生成图片结果页
 * @author jingxiangzheng
 */

import {upx2dpx} from '../../utils';
import {
    shareConfig,
    swanDemoConfig
} from '../../utils/const.js';
import {GET_CANVAS_MSG} from '../../mock/index.js';
/* global Page, swan, getApp */
/* eslint-disable babel/new-cap */
Page({
/* eslint-enable babel/new-cap */
    data: {
    },
    onLoad(options) {
        this.initCanvas(options);
    },
    initCanvas(options) {
        const {
            name,
            word,
            portrait,
            id
        } = options;

        // 从mock数据中获取信息，并保存
        this.canvasData = GET_CANVAS_MSG[id];
        const nameIds = this.canvasData.ids.name;
        const wordIds = this.canvasData.ids.word;

        // 创建canvas画布
        this.canvasContext = swan.createCanvasContext('canvas');
        // 绘制背景图
        this.canvasContext.drawImage(this.canvasData.canvas, 0, 0, upx2dpx(1182), upx2dpx(2101));
        // 绘制姓名
        this.fillCanvasText({
            content: name,
            ...nameIds
        });

        if (this.canvasData.isUploadMode) { // 上传图片模式

            // 绘制头像
            this.fillCanvasImage(portrait);
        }
        else {// 非上传图片模式

            // 绘制表白文案
            this.fillCanvasText({
                content: word,
                ...wordIds
            });
            this.canvasContext.draw();
        }
    },

    /**
     * 绘制canvas的文字
     *
     * @param {Object} options.color 字体颜色
     * @param {Object} options.fontStyle 字体、大小等
     * @param {Object} options.content 内容
     * @param {Object} options.x 绘制x轴起点
     * @param {Object} options.y 绘制y轴起点
     */
    fillCanvasText(options) {
        let {
            color,
            fontStyle,
            content,
            x,
            y
        } = options;
        color && this.canvasContext.setFillStyle(color);
        this.canvasContext.font = fontStyle;

        // TODO：专门为老板打电话模板去fix，但是这样处理并不好
        if (x === 'center') {
            const dimension = this.canvasContext.measureText(content);
            x = upx2dpx(1182 * 0.5) - dimension.width * 0.5;
        }
        this.canvasContext.fillText(content, x, y);
    },

    /**
     * 打电话模板的绘制头像
     *
     * @param {string} src 图片地址
     */
    fillCanvasImage(src) {
        swan.getImageInfo({
            src,
            success: res => {
                const originW = res.width;
                const originH = res.height;
                const {x, y, width, height} = this.canvasData.ids.portrait;
                // 处理头像的圆角
                this.rounededRect(this.canvasContext, x, y, width, height, upx2dpx(16));

                // TODO：缩放&裁剪处理
                // canvas头像区域画布与图片实际的宽高比
                const dw = width / originW;
                const dh = height / originH;

                const drawX =  (originW - width / dh) / 2;
                const drawY = (originH - height / dw) / 2;

                // 裁剪图片中间部分
                if (originW > width && originH > height || originW < width && originH < height) {
                    if (dw > dh) {
                        this.canvasContext
                            .drawImage(src, x, y, width, height, 0, drawY, originW, height / dw);
                    }
                    else {
                        this.canvasContext
                            .drawImage(src, x, y, width, height, drawX, 0, width / dh, originH);
                    }
                }
                // 拉伸图片
                else {
                    if (originW < width) {
                        this.canvasContext
                            .drawImage(src, x, y, width, height, 0, drawY, originW, height / dw);
                    }
                    else {
                        this.canvasContext
                            .drawImage(src, x, y, width, height, drawX, 0, width / dh, originH);
                    }
                }

                this.canvasContext.restore();
                this.canvasContext.draw();
            },
            fail: err => {
                console.log('getImageInfo fail', err);
            }
        });
    },

    /**
     * 绘制图片的圆角
     *
     * @param {Obejct} ctx canvas对象
     * @param {*} x 横坐标起始点
     * @param {*} y 纵坐标起始点
     * @param {*} width 绘制宽度
     * @param {*} height 绘制高度
     * @param {*} radius 绘制圆角
     */
    rounededRect(ctx, x, y, width, height, radius) {
        ctx.strokeStyle = '#2d2d2d';
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
        ctx.lineTo(x + width - radius, y + height);
        ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
        ctx.lineTo(x + width, y + radius);
        ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
        ctx.lineTo(x + radius, y);
        ctx.quadraticCurveTo(x, y, x, y + radius);
        ctx.stroke();
        ctx.clip();
    },

    /**
     * 点击保存按钮，将canvas画布存在临时路径
     */
    handleSave() {
        swan.canvasToTempFilePath({
            canvasId: 'canvas',
            fileType: 'jpg',
            quality: 1,
            success: res => {
                this.saveImageToPhotosAlbum(res.tempFilePath);
            }
        });
    },

    /**
     * 保存图片到本地相册
     *
     * @param {string} filePath 图片路径
     */
    saveImageToPhotosAlbum(filePath) {
        swan.saveImageToPhotosAlbum({
            filePath,
            success: res => {
                swan.showToast({
                    title: '保存相册'
                });
            },
            fail: err => {
                swan.showToast({
                    title: `保存失败${err}`
                });
            }
        });
    },

    /**
     * 打开示例小程序
     */
    redirectToSwanDemo() {
        swan.navigateToSmartProgram({
            appKey: swanDemoConfig.appKey,
            success: res => {
                console.log('success', res);
            },
            fail: err => {
                console.log('fail', err);
            }
        });
    },

    /**
     * 分享信息配置
     *
     * @return {Object} 分享配置
     */
    onShareAppMessage() {
        return shareConfig;
    }
});