document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.querySelector('.navbar-toggle');
    var navCollapse = document.getElementById('header-nav');

    if (toggleBtn && navCollapse) {
        toggleBtn.addEventListener('click', function () {
            navCollapse.classList.toggle('in');
            var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            toggleBtn.setAttribute('aria-expanded', String(!expanded));
        });

        // Đóng menu khi bấm chọn 1 link (trên mobile)
        navCollapse.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (navCollapse.classList.contains('in')) {
                    navCollapse.classList.remove('in');
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});
