// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('网站已加载完成');
    
    // 平滑滚动
    initSmoothScroll();
    
    // 初始化广告
    initAds();
    
    // 添加按钮交互效果
    initButtonEffects();
    
    // 移动端菜单处理
    initMobileMenu();
});

// 平滑滚动功能
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 初始化广告位
function initAds() {
    console.log('初始化广告位...');
    
    // 为广告容器添加占位内容
    const adContainers = [
        'ad-top',
        'ad-left', 
        'ad-right',
        'ad-middle',
        'ad-bottom'
    ];
    
    adContainers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container && !container.innerHTML.trim()) {
            // 如果广告脚本没有填充内容，显示占位符
            container.innerHTML = `
                <div style="
                    width: 100%;
                    min-height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.7);
                    font-size: 14px;
                ">
                    <span>广告位 - ${containerId}</span>
                </div>
            `;
        }
    });
}

// 按钮点击效果
function initButtonEffects() {
    // CTA按钮
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('CTA按钮被点击');
            // 可以添加更多交互逻辑
        });
    }
    
    // 卡片按钮
    const cardButtons = document.querySelectorAll('.card-button');
    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('卡片按钮被点击');
            showModal('查看内容', '此功能需要VIP会员权限');
        });
    });
    
    // 独家内容按钮
    const exclusiveButtons = document.querySelectorAll('.exclusive-button');
    exclusiveButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('独家内容按钮被点击');
            showModal('解锁内容', '升级VIP会员即可解锁所有独家内容！');
        });
    });
    
    // VIP按钮
    const vipButton = document.querySelector('.vip-button');
    if (vipButton) {
        vipButton.addEventListener('click', function() {
            console.log('VIP按钮被点击');
            showModal('成为VIP会员', '感谢您的关注！请联系客服了解更多VIP会员详情。');
        });
    }
}

// 显示模态框
function showModal(title, message) {
    // 检查是否已存在模态框
    let modal = document.getElementById('custom-modal');
    
    if (!modal) {
        // 创建模态框
        modal = document.createElement('div');
        modal.id = 'custom-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <h3 class="modal-title"></h3>
                    <p class="modal-message"></p>
                    <button class="modal-close">关闭</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            #custom-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10000;
            }
            
            #custom-modal.active {
                display: block;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .modal-content {
                background: white;
                padding: 40px;
                border-radius: 20px;
                max-width: 500px;
                width: 100%;
                text-align: center;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            }
            
            .modal-title {
                font-size: 24px;
                margin-bottom: 15px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .modal-message {
                font-size: 16px;
                color: #666;
                margin-bottom: 25px;
                line-height: 1.6;
            }
            
            .modal-close {
                padding: 12px 40px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 25px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                transition: opacity 0.3s;
            }
            
            .modal-close:hover {
                opacity: 0.9;
            }
        `;
        document.head.appendChild(style);
        
        // 关闭按钮事件
        modal.querySelector('.modal-close').addEventListener('click', function() {
            modal.classList.remove('active');
        });
        
        // 点击遮罩层关闭
        modal.querySelector('.modal-overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                modal.classList.remove('active');
            }
        });
    }
    
    // 更新内容并显示
    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-message').textContent = message;
    modal.classList.add('active');
}

// 移动端菜单处理
function initMobileMenu() {
    // 如果需要，可以添加移动端菜单切换功能
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        console.log('移动端视图');
        // 可以在这里添加移动端特定的功能
    }
}

// 窗口大小改变时的处理
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        console.log('切换到移动端视图');
    } else {
        console.log('切换到桌面端视图');
    }
});

// 滚动效果
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 向下滚动时添加阴影
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// 添加页面可见性检测
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('页面隐藏');
    } else {
        console.log('页面可见');
    }
});

// 防止右键菜单（可选）
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });

// 控制台输出网站信息
console.log('%c魅力女神网站', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%c已成功加载所有功能', 'color: #764ba2; font-size: 14px;');
console.log('版本: 1.0.0');
console.log('广告联盟: Servads');