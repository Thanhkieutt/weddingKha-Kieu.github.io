function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Lỗi khi tải trang:', error));
}

// Tải trang chủ mặc định khi mở web
document.addEventListener("DOMContentLoaded", () => loadPage('home'));
