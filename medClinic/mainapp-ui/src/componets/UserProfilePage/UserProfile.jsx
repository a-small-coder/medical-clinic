import React, { useEffect, useState } from 'react';
import TopBlockTitle from '../SupportsComponents/TopBlockTitle';
import ProfileNavigation from './ProfileNavigation';
import '../../styles/ProfilePage/ProfilePage.scss'
import ContentController from './ContentController';
import { Redirect } from 'react-router-dom';
import { AUTHENTIFICATION, redirectByPageType } from '../../App';
import { connect } from 'react-redux';
import SERVER_API_START_URL, { getApiResponse, postApiRequest } from '../../support_functions/api_requests';

function UserProfile(props) {

    const [userOrders, setUserOrders] = useState([])
    // const [isSend, setIsSend] = useState(false)
    const TitleWrapperClass = "user-profile-page__top-block"
    const page_title = "Личный кабинет"

    useEffect(() => {
        if (props.auth.user.token){
            getUserOrders(props.auth.user.token, setUserOrders)
        }
    }, [props.auth.user.token])

    const navigation_categories = [
        {id: 1, title: 'Общая информация', slug: 'base_information'},
        {id: 2, title: 'История заказов', slug: 'orders'},
        {id: 3, title: 'Сменить пароль', slug: 'change_password'},
    ]

    // user has not authentificate
    if (props.auth.user.is_anon){
        redirectByPageType(AUTHENTIFICATION)
    }

    // get subcomponent's control from url
    let currentPage = props.history.location.pathname.split('/')[3]
    if (currentPage === ''){
        return <Redirect to="/user/profile/base_information"/>
    }

    
    let user_info = {}
    if (props.auth.user.first_name && !props.auth.user.is_anon){
        let user = props.auth.user
        user_info = {
            firstName: user.first_name,
            secondName: user.last_name,
            fatherName: user.father_name,
            adress: user.customer.address,
            phone: user.customer.phone,
            email: user.email,
        }
    }
    const userInfoSubmitHandler = (formdata) =>{
        updateUserData(props.auth.user.token, formdata)
    }
    const changePasswordSubmithandler = (formdata) => {
        changeUserPassword(props.auth.user.token, formdata)
    }

    return (
        <main className="page">
            <section className="page__base user-profile-page">
                <div className="user-profile-page__container _container">
                    <TopBlockTitle
                        title={page_title}
                        wrapperClass={TitleWrapperClass}
                    />
                    <div className="user-profile-page__content">
                        <div className="user-profile-page__navigation navigation-profile">
                            <ProfileNavigation categories={navigation_categories}/>
                        </div>

                        <div className="user-profile-page__main-block">
                            <ContentController 
                                control={currentPage} 
                                user_info={user_info} 
                                orders={userOrders} 
                                location={props.history.location.pathname} 
                                onInfoSubmit={userInfoSubmitHandler}
                                onPasswordSubmit={changePasswordSubmithandler}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
let mapStateToProps = (state)=>{
    return {
        auth: state.auth,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
    }
}
const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default UserProfileContainer;

function updateUserData(token, data){
    const url = `${SERVER_API_START_URL}auth/users/update_user_data/`
    const responseHandler = (responseData) => {
      console.log(responseData)
    }
  
    postApiRequest(url, data, responseHandler, ()=>{}, token)
  }

  function changeUserPassword(token, data){
    const url = `${SERVER_API_START_URL}auth/users/change_password/`
    const responseHandler = (responseData) => {
      console.log(responseData)
    }
  
    postApiRequest(url, data, responseHandler, ()=>{}, token)
  }

  function getUserOrders(token, setUserOrders){
    const url = `${SERVER_API_START_URL}orders/current_user_orders/`
    const responseHandler = (responseData) => {
      console.log(responseData)
      setUserOrders(responseData)
    }
  
    getApiResponse(url, token, responseHandler)
  }