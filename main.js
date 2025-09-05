document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("#header-list-menu a");

    function makeActive(link) {
        menuLinks.forEach(menuLink => menuLink.classList.remove("active"));
        link.classList.add("active");
    }

    function handleLinkClick(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (!targetSection) {
            return;
        }

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
        });

        makeActive(this);
    }

    function handleScroll() {
        const fromTop = window.scrollY;

        menuLinks.forEach(menuLink => {
            const section = document.getElementById(menuLink.getAttribute("href").substring(1));

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                makeActive(menuLink);
            }
        });
    }

    menuLinks.forEach(menuLink => menuLink.addEventListener("click", handleLinkClick));
    window.addEventListener("scroll", handleScroll);
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    delay: 0,
    // reset: true
});

sr.reveal('.home-text, .social-media-button, .cv-button', {});
sr.reveal('.my-image-1', { delay: 0 });
sr.reveal('.about-text, .a-1, .a-2, .a-3, .a-4', { delay: 0 });
sr.reveal('.my-image-2', { delay: 0 });
sr.reveal('.follow-text, .social-icon', { delay: 0 });


