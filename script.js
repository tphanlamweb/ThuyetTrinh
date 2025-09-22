// Lấy tham số ?img=...
const params = new URLSearchParams(window.location.search);
const name = params.get("img");

const img = document.getElementById("photo");

// Danh sách ảnh cho phép
const allowed = ["cat", "dog", "flower"];

if (allowed.includes(name)) {
  img.src = `images/${name}.jpg`;
} else {
  img.alt = "Không tìm thấy ảnh.";
}