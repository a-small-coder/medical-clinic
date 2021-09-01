import React from 'react';
import MenuNavItem from './MenuNavItem';

function ProfileNavigation(props) {
    let menuElements = props.categories.map(c =>
        <MenuNavItem 
            key={c.id} 
            title={c.title} 
            link={c.slug} 
            classLi={"menu-profile__item _title-standart"} 
            classLink={"menu-profile__link"}
        />
    )
    return (
        <div className="navigation-profile__menu menu-profile">
            <div className="menu-profile__column">
                <ul className="menu-profile__list">
                    {menuElements}
                </ul>
            </div>
        </div>
    );
}

export default ProfileNavigation;