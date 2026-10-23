/* ==========================================
   NASQLY UI - JavaScript
   ========================================== */

// تحديد زر القائمة وروابط التنقل
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// فتح وإغلاق القائمة على الموبايل
if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        // إظهار القائمة أو إخفاؤها
        const isOpen = navLinks.classList.toggle("show");

        // تحديث حالة الزر لمساعدة مستخدمي التقنيات المساعدة
        menuToggle.setAttribute("aria-expanded", isOpen);

        // تغيير شكل الزر حسب حالة القائمة
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // إغلاق القائمة بعد الضغط على أي رابط
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}