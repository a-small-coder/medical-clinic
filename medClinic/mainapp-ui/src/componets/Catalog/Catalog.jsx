import React from 'react';
import CatalogFilter from './Filter/CatalogFilter';
import Products from './Products';
const Catalog = () => {

    let products ={
        count: 10,
        category: null,
        title: "Все анализы",
        items: [
            {
                id: 1, 
                title_min: "Экспресс-тест на COVID-19",
                title: "Экспресс-тест на COVID-19",
                text: "Результат предоставляется через 15 минут. Исследование представляет собой функциональный аналог ПЦР-тестов",
                time: 1,
                number: "0001",
                price: "2750",
                img: null,
                link: "/product",
                tags: ["covid"]
            },
            {
                id: 2, 
                title_min: "Глюкоза",
                title: "Глюкоза (в крови) (Glucose) ",
                text: "Глюкоза – основной источник энергии для метаболических процессов в организме человека, является обязательным компонентом большинства внутриклеточных структур, участвует в синтезе нуклеиновых кислот (рибоза, дезоксирибоза), образует соединения с белками (гликопротеиды, протеогликаны) и липидами (гликолипиды).",
                time: 3,
                number: "0002",
                price: "360",
                img: null,
                link: "/product",
                tags: ["blood"]
            },
            {
                id: 3, 
                title_min: "Общий белок",
                title: "Общий белок (в крови) (Protein total) ",
                text: "Общий белок выступает показателем белкового обмена, отражающим содержание всех фракций белков в сыворотке крови. Тест используется в комплексных биохимических обследованиях пациентов при различных заболеваниях.",
                time: 2,
                number: "0003",
                price: "750",
                img: null,
                link: "/product",
                tags: ["blood"]
            },
            {
                id: 4, 
                title_min: "Общий анализ крови",
                title: "Анализ крови. Общий анализ крови (без лейкоцитарной формулы и СОЭ) (Complete Blood Count, CBC)",
                text: "Общий анализ крови – это комплексное исследование, в ходе которого проводится количественная оценка содержания форменных элементов крови (эритроцитов, лейкоцитов, тромбоцитов), гемоглобина, проводится подсчет гематокрита и эритроцитарных индексов (MCV, MCH, MCHC, RDW).",
                time: 1,
                number: "0004",
                price: "500",
                img: null,
                link: "/product",
                tags: ["blood"]
            }
        ]
    }

    let groups ={
        count: 2,
        active_category: "search-groups",
        active_category_index: 1,
        items: [
            {id: 1, category: "complex", title: "Комплексы анализов", active_count : 0, tags: [
                {id: 1, category: "blood", is_active: false, text: "комплексные анализы крови"},
                {id: 2, category: "each-year-observe", is_active: false, text: "ежегодное обследование"},
                {id: 3, category: "diabet", is_active: false, text: "диагностика диабета"},
                {id: 4, category: "hurt-and-blood-stytem", is_active: false, text: "оценка риска заюолевание сердечно-сосудистой системы"},
            ]},
            {id: 2, category: "search-groups", title: "группы исследований", active_count : 0, tags: [
                {id: 1, category: "blood-beohim", is_active: false, text: "биохимические исследования крови"},
                {id: 2, category: "blood-common", is_active: false, text: "общиехимические исследования крови"},
                {id: 3, category: "top-10", is_active: false, text: "ТОП-10"},
                {id: 4, category: "lab-search", is_active: false, text: "лабораторные исследования"},
                {id: 5, category: "blood-beohim", is_active: false, text: "биохимические исследования крови"},
                {id: 6, category: "blood-common", is_active: false, text: "общиехимические исследования крови"},
                {id: 7, category: "top-10", is_active: false, text: "ТОП-10"},
                {id: 8, category: "lab-search", is_active: false, text: "лабораторные исследования"},
            ]},
        ]
    }



    return (
        <section class="page__catalog catalog">
            <div class="catalog__container _container">
                <div class="catalog__body">
                    <h1 class="catalog__title _title"><span>Catalog</span></h1>
                    <div class="catalog__content">
                        <CatalogFilter groups={groups}/>
                        <Products products={products} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;