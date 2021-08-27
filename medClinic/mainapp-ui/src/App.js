import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setIsAuthAC } from './redux/auth-reducer';
import { setCartAC, switchSpoilerModAC } from './redux/header-reducer';
import './styles/style.css';
import urlStart, { getApiResponse } from "./support_functions/api_requests";
import ScrollToTop from "./componets/SupportsComponents/ScrollToTop"
import Header from "./componets/Header/Header"
import Catalog from "./componets/Catalog/Catalog"
import ProductPageContainer from "./componets/ProductPage/ProductPageContainer";
import MainPageContainer from "./componets/MainPage/MainPageContainer";
import AuthPageContainer from "./componets/Autorization/AuthPageContainer";
import CartContainer from "./componets/Cart/CartContainer";
import OrderConformationContainer from "./componets/OrderConfirmPage/OrderConformation";
import InWork from "./componets/InWorkPage/InWork";
import Footer from "./componets/Footer/Footer";

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
      getApiResponse(cartUrl, props.userToken, setCartFromResponse, onBadResponse, )
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="wrapper _loaded">
        <ScrollToTop />
        <Header initSpoiler={props.initSpoiler} setSpoilerMode={props.setSpoilerMode}/>
        <Switch>
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/catalog/:category" component={Catalog} />
          <Route exact path="/catalog/:category/:id" component={ProductPageContainer} />
          <Route exact path="/" component={MainPageContainer} />
          <Route path='/auth' component={AuthPageContainer} />
          <Route exact path="/cart" component={CartContainer}/>
          <Route path="/cart/order-conformation" component={OrderConformationContainer}/>
          <Route component={InWork} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

let mapStateToProps = (state) => {
  return {
    initSpoiler: state.header.nav.initSpoiler,
    cart: state.header.cart,
    userToken: state.auth.user.token,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setCart: (cart) => {
      dispatch(setCartAC(cart));
    },
    setIsAuth: (isAuth) => {
      dispatch(setIsAuthAC(isAuth));
    },
    setSpoilerMode: (spoilerMode) => {
      dispatch(switchSpoilerModAC(spoilerMode));
    }
  }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

export function redirectByPageType(page, exact=false, from=null) {
  switch(page){
    case MAIN_PAGE_NAME:
      return <Redirect to={'/'}/>
    case IN_WORK_PAGE_NAME:
      return <Redirect to={'/page-comming-soon'}/>
    case BAD_LINK:
      return <Redirect to={'/bad-link'}/>
    default:
      return <Redirect to={'/'}/>
  }
}

export const MAIN_PAGE_NAME = 'Main'
export const IN_WORK_PAGE_NAME = 'InWork'
export const BAD_LINK = 'BadLink'
