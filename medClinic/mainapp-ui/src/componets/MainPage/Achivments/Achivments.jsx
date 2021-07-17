import React from 'react';
import Achivment from './Achivment';
const Achivments = (props) => {

    let achivmentElements = props.achivments.map(a => <Achivment key={a.id} title={a.title} text={a.text} img={a.img}/>)

    return (
        <section class="page__advantages advantages">
            <div class="advantages__container _container">
                {achivmentElements}
            </div>
        </section>
    );
}

export default Achivments;