import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, setIsAuth } from '../../redux/authReducer';
import { authAPI } from './../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getMe().then((response) => {
            if (response.resultCode === 0) {
                this.props.setAuthUserData(response.data)
            }
        })
    }
    render() {
        return (
            <Header {...this.props}></Header>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    setAuthUserData,
    setIsAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);