$(document).ready(function () {
    let sidebarItem = document.querySelectorAll('.rotate-item')
    function sliders() {
        sidebarItem.forEach((elem) => {
            let sliders = elem.querySelector('.slider');
            let path = elem.getAttribute('data-path')
            let image = elem.querySelector('.jsSrc')
            if (sliders) {
                let inputMin = elem.querySelector('.min');
                let inputMax = elem.querySelector('.max');
                let minValue = parseInt(inputMin.dataset.min)
                let maxValue = parseInt(inputMax.dataset.max)
                let inputs = [inputMin, inputMax];


                noUiSlider
                    .create(sliders, {
                        start: 1,
                        step: 1,
                        connect: 'lower',
                        range: {
                            min: minValue,
                            max: maxValue,
                        },
                    })
                sliders.noUiSlider.on('update', function (values, handle, unencoded) {
                    inputs[handle].value = parseInt(values[handle]);
                    image.setAttribute('src', `${path}/${Math.floor(values[handle])}.png`)
                });

                inputMin.addEventListener('change', function () {
                    sliders.noUiSlider.set([this.value, null]);
                });

                inputMax.addEventListener('change', function () {
                    sliders.noUiSlider.set([null, this.value]);
                });
            }

        });
    }
    sliders()

    $(document).on('click', '.jsTogglerBtn', function () {
        $(this).closest('.jsTogglerItem').addClass('active')
        $(this).remove();
    })

    $(document).on('click', '.burger', function () {
        $('.header__menu-box, .burger').toggleClass('active')
    })

    $(document).on('click', '.jsAnchorLink', function () {
        var anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top - 80
        }, 600);
        return false;
    })
})