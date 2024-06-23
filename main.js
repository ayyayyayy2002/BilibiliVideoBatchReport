// ==UserScript==
// @name         自动跳转到视频页面
// @namespace    https://space.bilibili.com/
// @version      1.0
// @description  当网址中不包含video这个单词时，自动跳转到视频页面
// @match        *://space.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前网址
    var currentUrl = window.location.href;

    // 检查网址中是否包含video这个单词
    if (currentUrl.indexOf('video') === -1) {
        // 提取数字id
        var regex = /space\.bilibili\.com\/(\d+)/;
        var match = regex.exec(currentUrl);
        if (match) {
            var numericId = match[1];
            // 构建跳转网址
            var redirectUrl = 'https://space.bilibili.com/' + numericId + '/video';
            // 跳转到视频页面
            window.location.href = redirectUrl;
        }
    }
})();
