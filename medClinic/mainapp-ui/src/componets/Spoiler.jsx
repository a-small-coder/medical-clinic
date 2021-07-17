/* usage 

    import functions up and down:

import {slideUp, slideDown} from pathToSpoiler;


    define spoiler state:

const [spoilerActive, setSpoilerActive] = useState(true);


    define spoiler's button calssName and spoiler's content className:

const buttonClassName = "menu-product__arrow _icon-arrow-down";
const contentClassName = "menu-product__wrapper";


    make refference to spoiler's content node 
    and bind custom functions with up and down slide functions

const contentRef = useRef(null);    
const _slideDown = useCallback(slideDown, []);
const _slideUp = useCallback(slideUp, []);
    
    call functions, when spoiler state has been changed
useEffect(() => {
    if (spoilerActive){
        _slideDown(contentRef);
    }
    else{
        _slideUp(contentRef);
    }
}, [spoilerActive]);


exercise markup:

<button data-spoller type="button" 
className={spoilerActive ? buttonClassName + " _active" : buttonClassName}
onClick={() => setSpoilerActive(!spoilerActive)}></button>
<div className={spoilerActive ? contentClassName + " _slide-up" : contentClassName + " _slide-down"} ref={contentRef}>
    <Description/>
</div>

when spoiler active, 
spoiler's button  will add " _active" to className, 
spoiler's content will add "_slide-up" or "-slide-down" to className
don't forgot to add onClick handle to spoiler's button, which will set spoiler state value


*/


const slideDown = (contentRef, duration = 500) => {
    if (contentRef != null) {
        if (contentRef.current.hidden) {
            contentRef.current.hidden = false;
        }
        let height = contentRef.current.offsetHeight;
        contentRef.current.style.overflow = 'hidden';
        contentRef.current.style.height = 0;
        contentRef.current.style.paddingTop = 0;
        contentRef.current.style.paddingBottom = 0;
        contentRef.current.style.marginTop = 0;
        contentRef.current.style.marginBottom = 0;
        contentRef.current.style.transitionProperty = "height, margin, padding";
        contentRef.current.style.transitionDuration = duration + 'ms';
        contentRef.current.style.height = height + 'px';
        contentRef.current.style.removeProperty('padding-top');
        contentRef.current.style.removeProperty('padding-bottom');
        contentRef.current.style.removeProperty('margin-top');
        contentRef.current.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            contentRef.current.style.removeProperty('height');
            contentRef.current.style.removeProperty('overflow');
            contentRef.current.style.removeProperty('transition-duration');
            contentRef.current.style.removeProperty('transition-property');
        }, duration);
    }

};

const slideUp = (contentRef, duration = 500) => {
    if (contentRef != null) {
        contentRef.current.style.transitionProperty = 'height, margin, padding';
        contentRef.current.style.transitionDuration = duration + 'ms';
        contentRef.current.style.height = contentRef.current.offsetHeight + 'px';
        contentRef.current.style.overflow = 'hidden';
        contentRef.current.style.height = 0;
        contentRef.current.style.paddingTop = 0;
        contentRef.current.style.paddingBottom = 0;
        contentRef.current.style.marginTop = 0;
        contentRef.current.style.marginBottom = 0;
        window.setTimeout(() => {
            contentRef.current.hidden = true;
            contentRef.current.style.removeProperty('height');
            contentRef.current.style.removeProperty('padding-top');
            contentRef.current.style.removeProperty('padding-bottom');
            contentRef.current.style.removeProperty('margin-top');
            contentRef.current.style.removeProperty('margin-bottom');
            contentRef.current.style.removeProperty('overflow');
            contentRef.current.style.removeProperty('transition-duration');
            contentRef.current.style.removeProperty('transition-property');
        }, duration);
    }

};

export {slideDown, slideUp}
