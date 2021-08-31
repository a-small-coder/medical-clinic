import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setIsAuthAC, setUserDataAC } from './redux/auth-reducer';
import { setCartAC, switchSpoilerModAC } from './redux/header-reducer';
import './styles/style.css';
import { createOrder, getActualUser} from "./support_functions/api_requests";
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
import { getStorageUserToken } from "./support_functions/utils";
import { getCookie, setCookie } from 'react-use-cookie';
import UserProfile from "./componets/UserProfilePage/UserProfile";

function App(props) {

  useEffect(() => {
    let token = getStorageUserToken()
    getActualUser(token, props.setUserData, props.setIsAuth)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('state', props.state)

  const goToOrders = (path) =>{
    return <Redirect to={path}/>
  }

  createOrderAfterAuth(props.user, props.customer, createOrder, props.setCart, goToOrders)

  return (
    <BrowserRouter>
      <div className="wrapper _loaded">
        <ScrollToTop />
        <Header initSpoiler={props.initSpoiler} setSpoilerMode={props.setSpoilerMode} user={props.user} setCart={props.setCart}/>
        <Switch>
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/catalog/:category" component={Catalog} />
          <Route exact path="/catalog/:category/:id" component={ProductPageContainer} />
          <Route exact path="/" component={MainPageContainer} />
          <Route path='/auth' component={AuthPageContainer} />
          <Route exact path="/cart" component={CartContainer}/>
          <Route path="/cart/order-conformation" component={OrderConformationContainer}/>
          <Route path="/user/profile/" component={UserProfile}/>
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
    user: state.auth.user,
    customer: state.order.customer,
    state: state,
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
    },
    setUserData: (userData) =>{
      dispatch(setUserDataAC(userData));
    },
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
    case AUTHENTIFICATION:
      return <Redirect to={'/auth/login'} />
    default:
      return <Redirect to={'/'}/>
  }
}

export const AUTHENTIFICATION = 'AUTHENTIFICATION'
export const MAIN_PAGE_NAME = 'Main'
export const IN_WORK_PAGE_NAME = 'InWork'
export const BAD_LINK = 'BadLink'

export function createOrderAfterAuth(user, customer, createOrder, setCart, goToOrders=()=>{}) {
  let make_order = getCookie('make_order')
  if (make_order == true) {
    debugger
    if (user && !user.is_anon) {
      const data = {
        cart_id: getCookie('cart_id'),
        place_type: getCookie('place_type'),
        customer: customer
    }
      createOrder(user.token, data, setCart)
      setCookie('make_order', false);
      goToOrders("/user/profile/orders")
    }
  }
}