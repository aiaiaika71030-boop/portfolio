// 桂鉱社トップページ用スクリプト

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully.');
    
    // ハンバーガーメニューの切り替え処理
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.site-nav ul');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // ボタンのテキストを切り替える（オプション）
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '✕ 閉じる';
            } else {
                menuToggle.innerHTML = '☰ メニュー';
            }
        });
    }
});
