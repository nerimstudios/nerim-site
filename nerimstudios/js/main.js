document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('siteHeader');
    var navToggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');

    function onScroll() {
        if (header) header.classList.toggle('scrolled', window.scrollY > 20);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
            navToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
                navToggle.textContent = '☰';
            });
        });
    }

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    var counterEls = document.querySelectorAll('[data-counter]');
    if (counterEls.length) {
        var cio = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                var target = parseInt(el.getAttribute('data-counter'), 10);
                animateCount(el, target);
                cio.unobserve(el);
            });
        }, { threshold: 0.4 });
        counterEls.forEach(function (el) { cio.observe(el); });
    }
});

function animateCount(el, target) {
    var duration = 1600;
    var start = null;
    function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.round(eased * target);
        el.textContent = target >= 100 ? value : value;
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

function filtrarProjetos(filtro, botao) {
    var cards = document.querySelectorAll('.portfolio-card');
    cards.forEach(function (card) {
        var cats = card.getAttribute('data-category').split(' ');
        if (filtro === 'todos' || cats.indexOf(filtro) !== -1) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.classList.remove('active');
    });
    if (botao) botao.classList.add('active');
}
