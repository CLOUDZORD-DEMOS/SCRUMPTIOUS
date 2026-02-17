document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menu) {
        menu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Star Animation Logic
    function animateStars() {
        const reviewItems = document.querySelectorAll(".review-item");
        reviewItems.forEach((item) => {
            const stars = item.querySelectorAll(".star");
            const rating = parseFloat(item.dataset.rating);
            stars.forEach((star, index) => {
                star.classList.remove("filled");
                setTimeout(() => {
                    if (index + 1 <= rating) {
                        star.classList.add("filled");
                    }
                }, index * 300);
            });
        });
    }

    animateStars();
    setInterval(animateStars, 5000);
});
