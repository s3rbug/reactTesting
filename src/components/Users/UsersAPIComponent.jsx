import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleFetching(false);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
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
        />
      </>
    );
  }
}

export default UsersAPIComponent;
