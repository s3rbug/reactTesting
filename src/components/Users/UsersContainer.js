import { connect } from 'react-redux'
import Users from './Users'
import { followAction, setUsersAction, setCurrentPageAction, setTotalCountAction } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        countPages: state.usersPage.countPages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAction(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAction(users))
        },
        setCurrentPage: (newCurrentPage) => {
            dispatch(setCurrentPageAction(newCurrentPage))
        },
        setTotalUsersCount: (total) => {
            dispatch(setTotalCountAction(total))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);