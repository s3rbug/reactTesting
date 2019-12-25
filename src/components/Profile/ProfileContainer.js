import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { setUserProfile, setUser } from './../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../common/hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId)
            userId = 2
        this.props.setUser(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps = {
    setUserProfile,
    setUser
}

const ProfileContainerWithUrl = withRouter(ProfileContainer)
const ProfileContainerWithUrlAndAuthRedirect = withAuthRedirect(ProfileContainerWithUrl)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithUrlAndAuthRedirect)