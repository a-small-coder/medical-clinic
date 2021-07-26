import Header from './componets/Header/Header';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Footer from './componets/Footer/Footer';
import MainPage from './componets/MainPage/MainPage';
import './css/style.css';
import Catalog from './componets/Catalog/Catalog';
import ProductPage from './componets/ProductPage/ProductPage';
import InWork from './componets/InWork/InWork';
import ScrollToTop from './componets/ScrollToTop';
import ContentBodyContainer from './componets/ContentBody';
import { setCartAC } from './redux/header-reducer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import urlStart, { getApiResponse } from './api_requests';
import { setIsAuthAC } from './redux/auth-reducer';

function App(props) {

  useEffect(() => {
    if (props.userToken) {
      // get user data - in future
      const cartUrl = `${urlStart}cart/current_customer_cart/`
      const setCartFromResponse = (responseData) => {
        props.setCart(responseData)
        props.setIsAuth(true)

      }
      const onBadResponse = (err) => {
        console.log(err)
        props.setIsAuth(false)
      }
      getApiResponse(cartUrl, setCartFromResponse, onBadResponse, props.userToken)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="wrapper _loaded">
        <ScrollToTop />
        <Header />
        <Switch>
          <Redirect exact from={"/catalog"} to={"catalog/all-analyzes"} ></Redirect>
          {/* <Redirect from={"/analyzes/analyzes/all-analyzes/<:pk>"} to={"analyze/<:pk>"} ></Redirect> */}
          <Route exact path="/catalog/:category" component={Catalog} />
          <Route exact path="/catalog/:category/:id" component={ProductPage} />
          {/* <Route exact path="/home"component={MainPage}/> */}
          <Route exact path="/" component={MainPage} />
          <Route path='/auth' component={ContentBodyContainer} />
          <Route component={InWork} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

let mapStateToProps = (state)=>{
  //debugger;
    return {
        cart: state.header.cart,
        userToken: state.auth.user.token,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setCart: (cart) =>{
            dispatch(setCartAC(cart));
        },
        setIsAuth: (isAuth) => {
          dispatch(setIsAuthAC(isAuth));
        }
    }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
