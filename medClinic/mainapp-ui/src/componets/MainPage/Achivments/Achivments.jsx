import React from 'react';
import Achivment from './Achivment';
const Achivments = (props) => {

    let achivmentElements = props.achivments.map(a => <Achivment key={a.id} title={a.title} text={a.text} img={a.img}/>)

    return (
        <section className="page__advantages advantages">
            <div className="advantages__container _container">
                {achivmentElements}
            </div>
        </section>
    );
}

export default Achivments;