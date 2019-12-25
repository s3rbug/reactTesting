import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { setUserProfile, setUser } from './../../redux/profileReducer'
import { withRouter } from 'react-router-dom';

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

let ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithUrl)