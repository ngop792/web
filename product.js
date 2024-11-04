let circles = document.querySelectorAll(".color-option .circle");

circles.forEach(circle => {
    circle.addEventListener("click", (e) => {
        let target = e.target;

        // Xóa lớp active khỏi tất cả các vòng tròn
        circles.forEach(c => c.classList.remove("active"));

        // Thêm lớp active cho màu được chọn
        target.classList.add("active");

        // Ẩn tất cả hình ảnh
        document.querySelectorAll(".main-images .image").forEach(img => {
            img.classList.remove("active");
        });

        // Hiện hình ảnh tương ứng với màu được chọn
        document.querySelectorAll(`.main-images .${target.id}`).forEach(img => {
            img.classList.add("active");
        });
    });
});
