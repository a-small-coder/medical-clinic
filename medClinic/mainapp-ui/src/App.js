import Header from './componets/Header/Header';
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
      	<Header header={props.state.header} dispatch={props.dispatch}/>
        <Switch>
        <Route exact path="/catalog" component={Catalog}/>
        <Route exact  path="/product/1" component={ProductPage}/> 
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
