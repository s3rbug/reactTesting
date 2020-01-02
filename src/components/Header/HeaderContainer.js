import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { logout, setMyProfile } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setMyProfile()
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    logout,
    setMyProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);