import Header from './componets/Header/Header';
import {BrowserRouter, Route} from "react-router-dom";
import Footer from './componets/Footer/Footer';
import MainPage from './componets/MainPage/MainPage';
import './css/style.css';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper _loaded">
      	<Header/>
        {/* <Route path="/catalog" component={}/>
        <Route path="/product" component={}/> 
        <Route path="/home"component={MainPage}/>*/}
        <Route path="" component={MainPage}/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
