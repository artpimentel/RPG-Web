document.addEventListener("DOMContentLoaded", function () {

    function toggleScroll(scroll, scrollClass, auxClass = null) {
        let isActive = scroll.classList.contains("active");

        document.querySelectorAll(`.${scrollClass}`).forEach(otherScroll => {
            if (otherScroll !== scroll) {
                otherScroll.classList.remove("active");
                otherScroll.classList.add("hidden");
            }
        });

        if (!isActive) {
            // Abrir pergaminho
            scroll.classList.add("active");
            scroll.classList.remove("hidden");

            if (auxClass) {
                toggleAuxContent(scroll, auxClass, true);
            }
        } else {
            // Fechar pergaminho
            scroll.classList.remove("active");

            document.querySelectorAll(`.${scrollClass}`).forEach(otherScroll => {
                otherScroll.classList.remove("hidden");
            });

            if (auxClass) {
                toggleAuxContent(scroll, auxClass, false);
            }
        }
    }

    function toggleAuxContent(scroll, auxClass, activate) {
        const scrollId = scroll.id.replace("-scroll", "-auxiliar-content");
        const auxiliarContent = document.getElementById(scrollId);

        if (auxiliarContent) {
            if (activate) {
                auxiliarContent.classList.add("active");
            } else {
                auxiliarContent.classList.remove("active");
            }
        }
    }

    document.querySelectorAll(".large-scroll").forEach(scroll => {
        const button = scroll.querySelector(".large-scroll-button");
        button.addEventListener("click", function () {
            toggleScroll(scroll, "large-scroll", "medium-scrolls");
        });
    });

    document.querySelectorAll(".medium-scroll").forEach(scroll => {
        const button = scroll.querySelector(".medium-scroll-button");
        button.addEventListener("click", function () {
            toggleScroll(scroll, "medium-scroll");
        });
    });

});
