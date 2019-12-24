import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleFetching,
  toggleFollowingInProgress
} from "../../redux/usersReducer";
import { usersAPI } from "./../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
        this.props.toggleFetching(false);
      });
  }

  onPageChanged = pageNumber => {
    if (pageNumber === this.props.currentPage)
      return;
    this.props.setCurrentPage(pageNumber);
    this.props.toggleFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(response => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.items);
      });
  };

  render() {
    return (
      <>
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          users={this.props.users}
          currentPage={this.props.currentPage}
          countPages={this.props.countPages}
          isFetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
  toggleFollowingInProgress
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);