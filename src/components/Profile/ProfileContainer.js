import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { setUserProfile, setUser, updateStatus, getStatus } from './../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
//import withAuthRedirect from '../../common/hoc/withAuthRedirect';
import { compose } from 'redux';
import { setMyProfile } from './../../redux/authReducer'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!this.props.myId)
            setMyProfile();

        if (!userId)
            userId = this.props.myId
        this.props.setUser(userId)
        this.props.getStatus(userId, this.props.myId)
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.myId
})

let mapDispatchToProps = {
    setUserProfile,
    setUser,
    getStatus,
    updateStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter//,
    // withAuthRedirect
)(ProfileContainer)