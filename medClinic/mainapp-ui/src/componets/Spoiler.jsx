import {useCallback} from 'react';

const slideDown = (contentRef, duration = 500 ) =>{
    if (contentRef != null){
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

const slideUp = (contentRef, duration = 500) =>{
    if (contentRef != null){
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

const Spoiler = () =>{
    
    
}
export default Spoiler
export {slideDown, slideUp}
