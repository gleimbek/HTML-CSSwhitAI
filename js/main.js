/* =========================================================
   HTML & CSS WITH AI
   Global JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileNav =
        document.getElementById("mainNavigation");


    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mobileNav.classList.toggle("open");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        /*
         * Close mobile navigation after
         * selecting a link.
         */

        const mobileLinks =
            mobileNav.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /*
         * Close menu when clicking outside it.
         */

        document.addEventListener("click", event => {

            const clickedInsideNav =
                mobileNav.contains(event.target);

            const clickedButton =
                menuToggle.contains(event.target);


            if (
                !clickedInsideNav &&
                !clickedButton &&
                mobileNav.classList.contains("open")
            ) {

                mobileNav.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    }


    /* =====================================================
       READING PROGRESS
       ===================================================== */

    const progress =
        document.getElementById("readingProgress");


    if (progress) {

        const updateProgress = () => {

            const scrollTop =
                window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight
                - window.innerHeight;


            if (documentHeight <= 0) {

                progress.style.width = "0%";

                return;
            }


            const percentage =
                (scrollTop / documentHeight) * 100;


            progress.style.width =
                `${Math.min(100, Math.max(0, percentage))}%`;

        };


        window.addEventListener(
            "scroll",
            updateProgress,
            { passive: true }
        );

        updateProgress();

    }


    /* =====================================================
       CURRENT PAGE NAVIGATION
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const navLinks =
        document.querySelectorAll(
            ".nav-link, .mobile-nav-link"
        );


    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");


        if (!href) {
            return;
        }


        const targetPage =
            href
                .split("/")
                .pop()
                .toLowerCase();


        if (
            targetPage === currentPage ||
            (
                currentPage === "" &&
                targetPage === "index.html"
            )
        ) {

            link.classList.add("current-page");

        }

    });

});