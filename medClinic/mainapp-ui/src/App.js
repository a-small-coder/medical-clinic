import Header from './componets/Header/Header';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Footer from './componets/Footer/Footer';
import MainPage from './componets/MainPage/MainPage';
import './css/style.css';
import Catalog from './componets/Catalog/Catalog';
import ProductPage from './componets/ProductPage/ProductPage';
import InWork from './componets/InWork/InWork';
import ScrollToTop from './componets/ScrollToTop';

function App(props) {
  return (
    <BrowserRouter>
    <div className="wrapper _loaded">
        <ScrollToTop/>
      	<Header/>
        <Switch>
        <Redirect exact from={"/catalog"} to={"catalog/all-analyzes"} ></Redirect>
        {/* <Redirect from={"/analyzes/analyzes/all-analyzes/<:pk>"} to={"analyze/<:pk>"} ></Redirect> */}
        <Route exact path="/catalog/:category" component={Catalog}/>
        <Route exact path="/catalog/:category/:id" component={ProductPage}/> 
        {/* <Route exact path="/home"component={MainPage}/> */}
        <Route exact path="/" component={MainPage}/>
        <Route component={InWork}/>
        
        </Switch>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
