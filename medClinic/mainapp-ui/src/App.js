import Header from './componets/Header/Header';
import {BrowserRouter, Route} from "react-router-dom";
import Footer from './componets/Footer/Footer';
import MainPage from './componets/MainPage/MainPage';
import './css/style.css';
import Catalog from './componets/Catalog/Catalog';
import ProductPage from './componets/ProductPage/ProductPage';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper _loaded">
      	<Header/>
        <Route exact path="/catalog" component={Catalog}/>
        <Route exact  path="/product/1" component={ProductPage}/> 
        {/* <Route exact path="/home"component={MainPage}/> */}
        <Route exact path="/" component={MainPage}/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
