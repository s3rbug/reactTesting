import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
const defaultImage =
  "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        debugger;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    window.pagesCount = pagesCount;
    window.cur = this.props.currentPage;
    let pages = [];
    for (
      let i = Math.max(1, this.props.currentPage - this.props.countPages);
      i <= Math.min(pagesCount, this.props.currentPage + this.props.countPages);
      ++i
    ) {
      pages.push(i);
    }

    const usersElement = this.props.users.map(u => (
      <div key={u.id}>
        <span>
          <div>
            <img
              src={u.photos.large === null ? defaultImage : u.photos.large}
              alt=""
              className={classes.photo}
            />
          </div>
          <div>
            {u.followed ? (
              <button
                className={classes.btn}
                onClick={() => {
                  this.props.follow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={classes.btn2}
                onClick={() => {
                  this.props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span className={classes.info}>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
      </div>
    ));
    return (
      <div>
        <div>
          <span
            className={
              this.props.currentPage === 1 ? classes.notVisible : classes.slide
            }
            onClick={() => {
              this.onPageChanged(this.props.currentPage - 1);
            }}
          >
            {"<"}
          </span>
          {pages.map(v => {
            return (
              <span
                className={
                  this.props.currentPage === v
                    ? classes.selected
                    : classes.notSelected
                }
                onClick={() => {
                  this.onPageChanged(v);
                }}
                key={v}
              >
                {v + " "}
              </span>
            );
          })}
          <span
            onClick={() => {
              this.onPageChanged(this.props.currentPage + 1);
            }}
            className={
              this.props.currentPage === pagesCount
                ? classes.notVisible
                : classes.slide
            }
          >
            {">"}
          </span>
        </div>
        {usersElement}
      </div>
    );
  }
}

export default Users;
