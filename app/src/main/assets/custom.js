window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>安卓APP</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'android-green': '#3DDC84',
                        'android-blue': '#2196F3',
                        'android-red': '#F44336',
                        'android-yellow': '#FFEB3B',
                        'android-gray': '#9E9E9E',
                        'status-bar': '#000000',
                        'nav-bar': '#FFFFFF',
                    }
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer utilities {
            .android-status-bar {
                height: 24px;
                background-color: theme('colors.status-bar');
            }
            .android-nav-bar {
                height: 48px;
                background-color: theme('colors.nav-bar');
            }
            .android-screen {
                height: calc(100vh - 72px); /* 100vh - status-bar - nav-bar */
            }
            .android-button {
                @apply w-10 h-10 rounded-full flex items-center justify-center text-gray-600;
            }
            .android-button-active {
                @apply text-android-blue;
            }
        }
    </style>
</head>
<body class="bg-black font-sans overflow-hidden">
    <!-- 安卓手机外壳 -->
    <div id="android-phone" class="max-w-md mx-auto h-screen bg-black relative">
        <!-- 状态栏 -->
        <div id="status-bar" class="android-status-bar flex justify-between items-center px-4 text-white text-xs">
            <div>20:30</div>
            <div class="flex items-center space-x-1">
                <i class="fa fa-signal"></i>
                <i class="fa fa-wifi"></i>
                <i class="fa fa-battery-three-quarters"></i>
            </div>
        </div>

        <!-- 主屏幕内容 -->
        <div id="main-screen" class="android-screen relative">
            <!-- 页面内容将通过JavaScript动态加载 -->
        </div>

        <!-- 底部导航栏 -->
        <div id="nav-bar" class="android-nav-bar flex justify-around items-center border-t border-gray-200">
            <button id="home-btn" class="android-button android-button-active" data-screen="home">
                <i class="fa fa-home text-xl"></i>
            </button>
            <button id="wealth-btn" class="android-button" data-screen="wealth">
                <i class="fa fa-money text-xl"></i>
            </button>
            <button id="credit-card-btn" class="android-button" data-screen="credit-card">
                <i class="fa fa-credit-card text-xl"></i>
            </button>
            <button id="life-btn" class="android-button" data-screen="life">
                <i class="fa fa-compass text-xl"></i>
            </button>
            <button id="profile-btn" class="android-button" data-screen="profile">
                <i class="fa fa-user text-xl"></i>
            </button>
        </div>
    </div>

    <script>
        // 页面数据
        const screens = {
            home: {
                content: `
                    <div class="h-full overflow-y-auto">
                        <img src="https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/27a80b06f4c7448fbda88b68d5d15923.jpg~tplv-a9rns2rl98-24:720:720.image?lk3s=8e244e95&rcl=20260212204904D7A81F3A5E61833CB8C0&rrcfp=8a172a1a&x-expires=1771505344&x-signature=mCsVPitQkRn016OEJmcm%2Fkjze8A%3D" alt="首页" class="w-full">
                    </div>
                `
            },
            wealth: {
                content: `
                    <div class="h-full overflow-y-auto">
                        <img src="https://p11-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/a71b7a11fd8a41d0bad9d3ed4b938617.jpg~tplv-a9rns2rl98-24:720:720.image?lk3s=8e244e95&rcl=20260212204904D7A81F3A5E61833CB8C0&rrcfp=8a172a1a&x-expires=1771505344&x-signature=9J%2FvT%2F5rTmocLDcoF%2FtK5UXWWPw%3D" alt="财富" class="w-full">
                    </div>
                `
            },
            'credit-card': {
                content: `
                    <div class="h-full overflow-y-auto">
                        <img src="https://p11-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/d23f926a107c43c88731f5de956e1bd5.jpg~tplv-a9rns2rl98-24:720:720.image?lk3s=8e244e95&rcl=20260212204904D7A81F3A5E61833CB8C0&rrcfp=8a172a1a&x-expires=1771505344&x-signature=CUBzIWO9b%2FVRWDwAE7RSSa7Kq24%3D" alt="信用卡" class="w-full">
                    </div>
                `
            },
            life: {
                content: `
                    <div class="h-full overflow-y-auto">
                        <img src="https://p26-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/8bc4a90fd53449beb63b4a355f8a5f62.jpg~tplv-a9rns2rl98-24:720:720.image?lk3s=8e244e95&rcl=20260212204904D7A81F3A5E61833CB8C0&rrcfp=8a172a1a&x-expires=1771505344&x-signature=x8WwCMjCYuzgPYtd%2F8fvzzg6Ylc%3D" alt="中原生活" class="w-full">
                    </div>
                `
            },
            profile: {
                content: `
                    <div class="h-full overflow-y-auto">
                        <img src="https://p11-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/2f74d54051224f4297174076beee42ca.jpg~tplv-a9rns2rl98-24:720:720.image?lk3s=8e244e95&rcl=20260212204904D7A81F3A5E61833CB8C0&rrcfp=8a172a1a&x-expires=1771505344&x-signature=xYnI4e3W6LWpdskrOLppVc0UVSQ%3D" alt="我的" class="w-full">
                    </div>
                `
            }
        };

        // DOM元素
        const mainScreen = document.getElementById('main-screen');
        const navButtons = document.querySelectorAll('.android-button');

        // 初始化
        function init() {
            loadScreen('home');
            // 为导航按钮添加点击事件
            navButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const screenId = button.getAttribute('data-screen');
                    loadScreen(screenId);
                    // 更新按钮状态
                    navButtons.forEach(btn => btn.classList.remove('android-button-active'));
                    button.classList.add('android-button-active');
                });
            });
        }

        // 加载屏幕
        function loadScreen(screenId) {
            const screen = screens[screenId];
            if (screen) {
                mainScreen.innerHTML = screen.content;
            }
        }

        // 页面加载完成后初始化
        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>