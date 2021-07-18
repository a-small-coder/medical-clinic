import React from 'react';
import Achivments from './Achivments/Achivments';
import AnalyzeComplexes from './AnalyzeComplexes/AnalyzeComplexes';
import UnicProducts from './UnicProducts/UnicProducts';
import TopService from './TopService/TopService';
import Stocks from './Stocks/Stocks';
import AboutUs from './AboutUs/AboutUs';
import img from '../../img/main-slider/pcr_test.webp';
import imgA from '../../img/achivments-small/01.svg';
import imgComplex from '../../img/complexes/blood_anl_s.jpg';
import imgS from '../../img/stocks/slide2.jpg';
import imgUnic from '../../img/unic-products/unique_service_corona.webp';

const MainPage = () => {

    let topSevices = {
        content: {
        title: "Самые популярные услуги",
        text: "Наша клиника в первую очередь работает в интересах клиентов. Поэтому мы составили для вас список самых популярных услуги и анализов. ",
        link: "/catalog"
        },
        slides: [
            {
                id: 1, 
                title: "Экспресс-тест на COVID-19",
                text: "Результат предоставляется через 15 минут. Исследование представляет собой функциональный аналог ПЦР-тестов",
                price: "---",
                img: img,
                link: "/catalog"
            },
            {
                id: 2, 
                title: "Вакцинация против COVID-19",
                text: "Решили вакцинироваться? Приходите в «TedMed» и сделайте прививку препаратом «Спутник V»",
                price: "---",
                img: img,
                link: "/catalog"
            },
            {
                id: 3, 
                title: "Расширенное биохимическое обследование",
                text: "помогает сделать первичную оценку состояния организма, определить ход дальнейшего обследования",
                price: "---",
                img: img,
                link: "/product/1"
            },
            {
                id: 4, 
                title: "Онкодиагностика по программе ОМС",
                text: "Как снизить риск развития рака? Какие исследования необходимы и зачем? Как убедиться в точности диагноза? Эффективно и безопасно ли лечение?",
                price: "---",
                img: img,
                link: "/catalog"
            }
        ]
        
    }

     
    let  achivmentsSmall = [
        {id: 1, title: "Качественные специалисты", text: "ведущие врачи с мировым именем", img: imgA},
        {id: 2, title: "Сертифицированная клиника", text: "Подтвержденный стандарт качества ISO", img: imgA},
        {id: 3, title: "Бесплатный выезд", text: "после заполнения анкеты", img: imgA},
        {id: 4, title: "Поддержка 24/7", text: "Всегда на связи", img: imgA},
    ]

    let analiyzesComplex = [
        {id: 1, title: "Биохимия крови", text: "кровь", img: imgComplex, link: "/product/1"},
        {id: 2, title: "Диагностика сахарного диабета", text: "диабет", img: imgComplex, link: "/product/1"},
        {id: 3, title: "Ежегодное обследование", text: "проверь себя", img: imgComplex, link: "/product/1"},
    ]

    let stocks = [
        {id: 1, slogan: "Путешествуй уверенно с TedMed", text: "Анализы ПЕРЕД и ПОСЛЕ вакцинации от COVID-19 Вакцинация против COVID-19", img: imgS, link: ""},
        {id: 2, slogan: "Онкодиагностика на любом этапе", text: "Возрастная скидка и бонусная программа", img: imgS, link: ""},
        {id: 3, slogan: "Диагностика COVID-19 для организаций", text: "", img: imgS, link: ""},
        {id: 4, slogan: "Обязательные анализы для детской медкарты 026/У", text: "", img: imgS, link: ""},
        {id: 5, slogan: "Проверь уровень витамина D", text: "По выгодной цене Бесплатный выез на дом", img: imgS, link: ""},
    ]

    let aboutUs = [
        {id: 1, title: "О компании", text: "TedMed - крупнейшая частная медицинская компания в России, специализирующаяся на высокоточной лабораторной диагностике и оказании медицинских услуг. Международный уровень качества, исключительный сервис и высокотехнологичные инновационные решения – главные приоритеты нашей работы. Внедрение передовых международных практик и стандартов позволило ИНВИТРО достичь уровня лучших европейских лабораторий, доказав, что российская лаборатория может и должна соответствовать международным стандартам.", link: ""},
        {id: 2, title: "История компании", text: "Компания была основана врачом-онкологом Павлом Крвцовым в 2003 году, а в 2005 году открылся первый медицинский офис «». В тот период спектр доступных исследований составлял всего 30 тестов. Сегодня сеть «TedMed» охватывает более 580 городов не только в России, но также в Украине, Казахстане, Беларуси, Армении и Киргизии. Восемь центральных лабораторий выполняют более 2 000 видов исследований.", link: ""},
        {id: 3, title: "Социальная ответственность", link: "" , text: "«TedMed» придерживается принципов "+
        "доказательной медицины, а также этичного и ответственного ведения бизнеса. Мы выстраиваем" +
        "эффективное сотрудничество с профессиональными медицинскими сообществами и общественными " +
        "организациями. Благодаря образовательным мероприятиям для врачей и программам поддержки молодых "+
        "ученых и студентов, компания вносит вклад в формирование высочайших стандартов отрасли. «» выступает "+
        "партнером благотворительных организаций, а также многих региональных спортивных и культурных мероприятий."},
    ]

    // NASBA 
    // Антитела к ядерным антигенам (ANA),IgG, 25 антигенов 
    // ВПЧ-ПАП-тест жидкостный
    //  ДНК HBV, ультрачувствительное исследование
    //    Исследование на абровирусные инфекции (Вирус Западного Нила)
    //    Исследование на абровирусные инфекции (Лихорадка Денге)
    //     Клещевые инфекции
    //      Комплексная диагностика ОРВИ
    //       Коронавирусы 
    //       Коэкспрессия онкобелков p16/Ki67
    //        Острые кишечные инфекции
    //         Претальный скрининг 1-го триместра беременности 
    //         Претальный скрининг 2-го триместра беременности
    //          Программы рассчета риска преэклампсии 
    //          РНК HCV ультрачувствительное исследование 
    //          РНК HCV/ ДНК HBV/ РНК HIV 1 и 2 типа

    let products = {
        count: 8,
        products: [
            {
                id: 1, 
                title: "NASBA", 
                description: "новинка в нашей лаборатории!", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 1,
                    items: [
                        {id: 1, type: "new", label: "new"}
                    ]
                }
            },
            {
                id: 2, 
                title: "(ANA)", 
                description: "Антитела к ядерным антигенам IgG, 25 антигенов", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 1,
                    items: [
                        {id: 1, type: "new", label: "new"}
                    ]
                }
            },
            {
                id: 3, 
                title: "ВПЧ-ПАП-тест жидкостный", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 1,
                    items: [
                        {id: 1, type: "sale", label: "-30%"}
                    ]
                }
            },
            {
                id: 4, 
                title: "ДНК HBV", 
                description: "ультрачувствительное исследование", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
            {
                id: 5, 
                title: " Исследование на абровирусные инфекции (Вирус Западного Нила)", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
            {
                id: 6, 
                title: " Исследование на абровирусные инфекции (Лихорадка Денге)", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 2,
                    items: [
                        {id: 1, type: "new", label: "new"},
                        {id: 2, type: "sale", label: "-50%"}
                    ]
                }
            },
            {
                id: 7, 
                title: "Клещевые инфекции", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
            {
                id: 8, 
                title: "Комплексная диагностика ОРВИ", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
        ]

    }

    return (
        <main className="page">
             <TopService serviceData={topSevices}/>
            <Achivments achivments={achivmentsSmall}/>
            <UnicProducts products={products}/>
            <AnalyzeComplexes analyzes={analiyzesComplex}/>
            <Stocks stocks={stocks}/>
            <AboutUs aboutUs={aboutUs}/>
        </main>
    );
}

export default MainPage;