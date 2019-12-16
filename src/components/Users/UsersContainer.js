import { connect } from 'react-redux'
import Users from './Users';
import { followAction, setUsersAction } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAction(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAction(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);