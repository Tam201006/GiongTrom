// 1. Dữ liệu mảng cho phần "Gương đoàn viên, thanh niên tiêu biểu"


// 2. Dữ liệu mảng cho phần "Gương tiêu biểu trên các lĩnh vực khác"

// 3. Hàm tạo HTML cho danh sách bài viết
function renderPersonPost() {
    const container = document.querySelector('.person-post .post-list');
    if (!container) return;

    const html = personPostsData.map(item => `
    <div class="item">
      <img src="${item.image}" alt="${item.name}">
      <div class="content">
        <div class="title">${item.name}</div>
        <div class="text">
          <p>${item.description}</p>
          <a href="${item.link}">Chi tiết &rightarrow;</a>
        </div>
      </div>
    </div>
  `).join('');

    container.innerHTML = html;
}

function renderAnotherPost() {
    const container = document.querySelector('.another-post .post-list');
    if (!container) return;

    const html = anotherPostsData.map(item => `
    <div class="item">
      <img src="${item.image}" alt="${item.name}">
      <div class="content">
        <div class="title">${item.name}</div>
        <div class="text">
          <p>${item.description}</p>
          <a href="${item.link}">Chi tiết &rightarrow;</a>
        </div>
      </div>
    </div>
  `).join('');

    container.innerHTML = html;
}
// Gọi cả 2 hàm khi trang đã tải xong DOM
document.addEventListener('DOMContentLoaded', () => {
    renderPersonPost();
    renderAnotherPost();
});