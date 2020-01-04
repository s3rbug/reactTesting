import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers,
  unfollow,
} from "../../redux/usersReducer";
import withAuthRedirect from "../../common/hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsersSelector, getTotalUsersCountSelector, getPageSizeSelector, getCurrentPageSelector, getCountPagesSelector, getIsFetchingSelector, getFollowingInProgressSelector } from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = pageNumber => {
    const { currentPage, pageSize } = this.props;
    if (pageNumber === currentPage)
      return;
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, pageSize)
  };

  render() {
    return (
      <>
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          currentPage={this.props.currentPage}
          countPages={this.props.countPages}
          isFetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsersSelector(state),
  totalCount: getTotalUsersCountSelector(state),
  pageSize: getPageSizeSelector(state),
  currentPage: getCurrentPageSelector(state),
  countPages: getCountPagesSelector(state),
  isFetching: getIsFetchingSelector(state),
  followingInProgress: getFollowingInProgressSelector(state)
});

const mapDispatchToProps = {
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers,
  unfollow,
  follow
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersContainer)