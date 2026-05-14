// 桂鉱社トップページ用スクリプト

document.addEventListener('DOMContentLoaded', function () {

    console.log('Page loaded successfully.');

    // ハンバーガーメニュー
    const menuToggle = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.site-nav ul');

    if (menuToggle && navLinks) {

        menuToggle.addEventListener('click', function () {

            navLinks.classList.toggle('active');

            // ボタン表示切り替え
            if (navLinks.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '≡';
            }

        });

    }

});