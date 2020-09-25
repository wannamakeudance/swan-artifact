/**
 * @file 公共方法
 */
/* eslint-disable no-undef */
const app = getApp();
/* eslint-enable no-undef */
app.globalData = app.globalData || {};

/**
 * 获取系统数据
 * @return {Object} obj systemInfo
 */
export function getSystemInfo() {
    let systemInfo = app && app.globalData.systemInfo;
    try {
        if (JSON.stringify(systemInfo) === '{}' || !systemInfo) {
            /* eslint-disable no-undef */
            systemInfo = swan.getSystemInfoSync();
            /* eslint-enable no-undef */
            if (app) {
                app.globalData.systemInfo = systemInfo;
            }
        }
    }
    catch (error) {
        throw '获取系统信息错误: ' + error;
    }
    return systemInfo;
}

/**
 * upx2dpx 3倍ue图px(1242)转设备px
 *
 * @param {number} px 3倍ue图px
 * @param {number=} precision 返回精度
 * @param {number=} uiWidth 视觉图宽度 例如 1242
 * @return {number} 设备上的px 单位：px
 */
export const upx2dpx = (px = 0, precision = 0, uiWidth = 1242) => {
    const srnWidth = (getSystemInfo() || {}).screenWidth || 0;
    if (px === 0) {
        return 0;
    }
    const result = srnWidth / uiWidth * px;
    // 小程序只取整
    if (precision === 0) {
        return Math.round(result);
    }
    return parseFloat(result.toFixed(precision));
};