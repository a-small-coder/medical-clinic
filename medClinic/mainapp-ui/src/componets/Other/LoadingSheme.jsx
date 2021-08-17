import React from 'react';

const LoadingSheme = (props) =>{

    if (props.page) {
        return (
            <main className="page">
                <section className="page__base base-block">
                    <div className="base-block__container _container">
                        <div className="base-block__content loading-block">
                            Loading...
                        </div>
                    </div>
                </section>
            </main>
        )
    }
    else if (props.block) {
        return (
            <div className="base-block__content loading-block">
                Loading...
            </div>
        )
    }
    else {
        return (
            <div className="base-block__content loading-block">
                Loading...
            </div>
        )
    }

}

export default LoadingSheme