window.onload = function (){
    document.addEventListener("click", documentActions);

    // Actions (delegate click event)
    function documentActions(e){
        const targetElement = e.target;
        if (window.innerWidth > 768 && isMobile.any()){
            if (targetElement.classList.contains('menu__arrow')){
                if (targetElement.closest('.menu__item').classList.contains('_hover')){
                    targetElement.closest('.menu__item').classList.toggle('_hover');
                }
                else{
                    if (document.querySelectorAll('.menu__item._hover').length > 0){
                        _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
                    }
                    targetElement.closest('.menu__item').classList.toggle('_hover');
                }
                
            }
            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0){
                _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
            }
        }

        if (targetElement.classList.contains('search-form__icon')){
            document.querySelector('.search-form').classList.toggle('_active');
        }
        else if (!targetElement.closest('.search-form') && document.querySelectorAll('.search-form._active').length > 0){
            _removeClasses(document.querySelectorAll('.search-form._active'), "_active");
        }
    }

    // header
    const headerElement = document.querySelector('.header');

    const callbackHeader = function (entries, observer){
        if (entries[0].isIntersecting){
            headerElement.classList.remove('_scroll');
        }
        else {
            headerElement.classList.add('_scroll');
        }
    };

    const headerObserver = new IntersectionObserver(callbackHeader);
    headerObserver.observe(headerElement);


    // product aside
    const asideElement = document.querySelector('.product-info__fixed-wrapper');

    const callbackAside = function (entries, observer){
        if (entries[0].isIntersecting){
            asideElement.classList.remove('_scroll');
        }
        else {
            asideElement.classList.add('_scroll');
        }
        
    };
    if (asideElement != null){
        const asideObserver = new IntersectionObserver(callbackAside);
        asideObserver.observe(asideElement);
    }
    
};