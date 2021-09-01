 // localStorage
 export function getStorageUserToken() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.token) {
        return user.token;
    } else {
        return null;
    }
  }
  
  export function setStorageUser(token) {
    let user = {
      token: token
    }
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  export function removeStorageUser(){
    localStorage.removeItem('user')
  }