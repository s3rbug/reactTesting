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

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = pageNumber => {
    if (pageNumber === this.props.currentPage)
      return;
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
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
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  countPages: state.usersPage.countPages,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
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