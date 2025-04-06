// ==UserScript==
// @name         视频菜单
// @namespace    https://github.com/jiang-taibai/video-menu/issues
// @supportURL   https://github.com/jiang-taibai/video-menu/issues
// @version      1.0
// @description  右键点击视频标签，显示自定义菜单，并支持扩展其他功能
// @icon         data:image/png;base64,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
// @author       CoderJiang
// @match        *://*/*
// @grant        GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/jiang-taibai/video-menu/main/video-menu.user.js
// @updateURL    https://raw.githubusercontent.com/jiang-taibai/video-menu/main/video-menu.user.js
// ==/UserScript==

(function () {
    'use strict';

    // --------------------------
    // 工具模块
    // --------------------------

    /**
     * 获取视频源
     * @param videoElement  {HTMLElement} 视频元素
     * @returns {*|string}  视频地址，如果没有找到有效的 src 属性，则返回 undefined
     */
    const getVideoSource = (videoElement) => {
        // 获取 data-src 属性的值作为视频地址
        const testAttrs = ['src', 'data-src', 'srcset'];
        for (let attr of testAttrs) {
            if (videoElement.hasAttribute(attr) && validateUrl(videoElement.getAttribute(attr))) {
                return videoElement.getAttribute(attr);
            }
        }
        // 如果没有找到有效的 src 属性，则返回 undefined
        return void 0;
    };

    /**
     * 验证 URL 是否有效
     * @param url   {string} URL 字符串
     * @returns {boolean}   如果 URL 有效，则返回 true，否则返回 false
     */
    const validateUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    // --------------------------
    // 定义菜单项
    // --------------------------

    /**
     * 创建菜单项
     * @param videoElement  {HTMLElement} 视频元素
     * @returns {[{label: string, action: (function(): void)}]} 菜单项数组
     */
    const createMenuItems = (videoElement) => {
        return [
            {
                // 在独立窗口播放视频
                // 如果是 m3u8 可以搭配 https://chromewebstore.google.com/detail/VideoPlayer%20MPD%2FM3U8%2FM3U%2FEPG/opmeopcambhfimffbomjgemehjkbbmji 使用
                label: '在独立窗口播放',
                action: () => videoFunctions.playInNewWindow(videoElement)
            }
        ];
    }

    // --------------------------
    // 功能模块：视频相关操作
    // --------------------------

    /**
     * 视频相关操作函数
     * @type {{playInNewWindow: videoFunctions.playInNewWindow}}
     */
    const videoFunctions = {
        playInNewWindow: (videoElement) => {
            const videoSrc = getVideoSource(videoElement);
            if (videoSrc) {
                window.open(videoSrc, '_blank');
            } else {
                alert('未找到视频源');
            }
        }
    };

    // --------------------------
    // 右键菜单模块：生成菜单项
    // --------------------------

    /**
     * 创建右键菜单
     * @param event
     * @param menuItems
     */
    const createMenu = (event, menuItems) => {
        let menu = document.createElement('div');
        menu.style.position = 'absolute';
        menu.style.top = `${event.clientY}px`;
        menu.style.left = `${event.clientX}px`;
        menu.style.backgroundColor = 'rgba(23, 29, 27, 0.5)';
        menu.style.backdropFilter = 'blur(10px)'; // 添加磨玻璃效果
        menu.style.webkitBackdropFilter = 'blur(10px)'; // 为 Safari 添加支持
        menu.style.borderRadius = '8px'; // 圆角效果
        menu.style.padding = '4px';
        menu.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        menu.style.zIndex = 9999;
        menu.style.minWidth = '150px'; // 保证菜单宽度足够
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column'
        menu.style.gap = '4px'

        // 给菜单添加一个过渡效果（展开动画）
        menu.style.maxHeight = '0'; // 初始高度为0，表示菜单是折叠的
        menu.style.overflow = 'hidden'; // 隐藏溢出的内容
        menu.style.transition = 'max-height 0.3s ease-in-out'; // 动画过渡效果

        // 样式设置：整体美化
        menu.style.fontFamily = 'Arial, sans-serif';
        menu.style.fontSize = '14px';
        menu.style.color = '#FFF';
        menu.style.boxSizing = 'border-box';

        // 为了让菜单项之间有4px的间距
        menu.style.margin = '4px';

        // 动态添加菜单项
        setTimeout(() => {
            menu.style.maxHeight = '500px'; // 展开后设置合适的高度，足够容纳所有项
        }, 10);

        menuItems.forEach(item => {
            let menuItem = document.createElement('div');
            menuItem.innerText = item.label;
            menuItem.style.cursor = 'pointer';
            menuItem.style.padding = '8px 15px';
            menuItem.style.transition = 'background-color 0.2s, color 0.2s, transform 0.2s'; // 加入 transform 动画
            menuItem.style.borderRadius = '5px'; // 圆角菜单项
            menuItem.style.backgroundColor = 'transparent'; // 初始背景色

            // 鼠标悬停时改变背景色和突出显示
            menuItem.addEventListener('mouseover', function () {
                menuItem.style.backgroundColor = 'rgba(46, 52, 50, 0.3)';
            });

            menuItem.addEventListener('mouseout', function () {
                menuItem.style.backgroundColor = 'transparent'; // 鼠标离开时恢复背景色
            });

            menuItem.addEventListener('click', item.action);

            menu.appendChild(menuItem);
        });

        document.body.appendChild(menu);

        // 点击外部区域关闭菜单
        const closeMenu = (event) => {
            if (!menu.contains(event.target)) {
                menu.remove();
                // 移除事件监听器，避免重复触发
                document.removeEventListener('mousedown', closeMenu);
            }
        };

        // 在 document 上监听点击事件，关闭菜单
        document.addEventListener('mousedown', closeMenu);
    };


    // --------------------------
    // 事件监听模块：监听右键点击事件
    // --------------------------

    /**
     * 初始化右键菜单
     */
    const initContextMenu = () => {
        window.addEventListener('contextmenu', function (event) {
            // 判断是否点击的是 video 标签
            let videoElement = event.target;
            if (videoElement.tagName.toLowerCase() === 'video') {
                event.preventDefault(); // 防止默认的右键菜单
                createMenu(event, createMenuItems(videoElement));
            }
        });
    };

    // --------------------------
    // 启动脚本
    // --------------------------

    const init = () => {
        initContextMenu();
    };

    // 启动脚本
    init();
})();
