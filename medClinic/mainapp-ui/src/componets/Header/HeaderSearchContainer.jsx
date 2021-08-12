import {updateNewSearchTextAC} from '../../redux/header-reducer'
import HeaderSearch from './HeaderSearch';
import {connect} from 'react-redux';

let mapStateToProps = (state)=>{
    return {
        search: state.header.search,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewSearchText: (text) => {
            dispatch(updateNewSearchTextAC(text));
        },
    }
}

const HeaderSearchContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);

export default HeaderSearchContainer;