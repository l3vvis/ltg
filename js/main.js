(function () {

    // BURGER__MENU

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__title')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 800) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    };

    // MODAL__WINDOW

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.header__top-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
        document.body.classList.remove('body--opened-menu')
    };
    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    };

    //SPLIDER-1

    const mySlider = new Splide('#mySlider', {
        perPage: 3,
        gap: '40px',
        arrows: false,
        breakpoints: {
            1300: {
                perPage: 2
            },

            900: {
                perPage: 1
            }
        }
    })
    mySlider.mount();

    //SPLIDER-2

    const mySlider2 = new Splide('#mySlider2', {
        perPage: 1,
        gap: '40px',
        arrows: false,
    })
    mySlider2.mount();



    // TEL - FIELD

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

    // ACCORDION

    var acc = document.getElementsByClassName("accordion__list-item");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
})();