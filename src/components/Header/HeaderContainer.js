import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, setIsAuth, setMyProfile } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setMyProfile()
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
    setIsAuth,
    setMyProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);