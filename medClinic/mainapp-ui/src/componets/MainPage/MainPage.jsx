import React from 'react';
import Achivments from './Achivments/Achivments';
import AnalyzeComplexes from './AnalyzeComplexes/AnalyzeComplexes';
import UnicProducts from './UnicProducts/UnicProducts';
import TopService from './TopService/TopService';
import Stocks from './Stocks/Stocks';
import AboutUs from './AboutUs/AboutUs';

const MainPage = () => {


    return (
        <main class="page">
             <TopService/>
            {/*<Achivments/>
            <UnicProducts/>
            <AnalyzeComplexes/>
            <Stocks/>
            <AboutUs/> */}
        </main>
    );
}

export default MainPage;