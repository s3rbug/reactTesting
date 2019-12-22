import { connect } from 'react-redux'
import { follow, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching } from '../../redux/usersReducer';
import UsersAPIComponent from './UsersAPIComponent';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        countPages: state.usersPage.countPages,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = {
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);