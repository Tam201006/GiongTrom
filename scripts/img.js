const listImgRightData = [
    './assets/Bac/11.jpg',
    './assets/Bac/14.jpg',
    './assets/Bac/3.jpg',
];

const listImgLeftData = [
    './assets/Bac/1.jpg',
    './assets/Bac/12.jpg',
    './assets/Bac/13.jpg',
];

// 1. Hàm render danh sách bên trái

// Hàm render dùng chung theo ID của banner
function renderBanner(bannerId, data, altText) {
    const ulElement = document.querySelector(`#${bannerId} .list-img`);
    if (!ulElement) return;

    ulElement.innerHTML = data.map(item => `
        <li>
            <img src="${item}" alt="${altText}">
        </li>
    `).join('');
}

// Gọi hàm thực thi
document.addEventListener('DOMContentLoaded', () => {
    renderBanner('right', listImgRightData, 'Banner Right');
    renderBanner('left', listImgLeftData, 'Banner Left');
});