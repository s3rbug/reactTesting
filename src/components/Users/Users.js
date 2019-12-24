import React from "react"
import classes from "./Users.module.css";
import Preloader from "./../../common/Preloader/Preloader"
import { NavLink } from 'react-router-dom'
import defaultImage from './../../assets/defaultImage.jpg'
import { usersAPI } from './../../api/api'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (
        let i = Math.max(1, props.currentPage - props.countPages);
        i <= Math.min(pagesCount, props.currentPage + props.countPages);
        ++i
    ) {
        pages.push(i);
    }

    const usersElement = props.users.map(u => (
        <div key={u.id} className={props.isFetching ? classes.notVisible : classes.user}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img
                            src={u.photos.large === null ? defaultImage : u.photos.large}
                            alt=""
                            className={classes.photo}
                        />
                    </NavLink>
                </div>
                <div>
                    {u.followed ? (
                        <button
                            className={props.isFetching ? classes.notVisible : classes.btn}
                            disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleFollowingInProgress(true, u.id);
                                usersAPI.unfollow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingInProgress(false, u.id);
                                    })
                            }}
                        >
                            Unfollow
              </button>
                    ) : (
                            <button
                                className={props.isFetching ? classes.notVisible : classes.btn2}
                                onClick={() => {
                                    usersAPI.follow(u.id)
                                        .then(response => {
                                            props.toggleFollowingInProgress(true, u.id);
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingInProgress(false, u.id);
                                        })
                                }
                                }
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
            <div className={classes.spanWrapper}>
                <span
                    className={
                        props.currentPage <= props.countPages ? classes.notVisible : classes.slide
                    }
                    onClick={() => {
                        props.onPageChanged(props.currentPage - props.countPages);
                    }}
                >
                    {"<"}
                </span>
                {pages.map(v => {
                    return (
                        <span
                            className={
                                props.currentPage === v
                                    ? classes.selected
                                    : classes.notSelected
                            }
                            onClick={() => {
                                props.onPageChanged(v);
                            }}
                            key={v}
                        >
                            {v + " "}
                        </span>
                    );
                })}
                <span
                    onClick={() => {
                        props.onPageChanged(props.currentPage + props.countPages);
                    }}
                    className={
                        props.currentPage + props.countPages > pagesCount
                            ? classes.notVisible
                            : classes.slide
                    }
                >
                    {">"}
                </span>
            </div>
            {props.isFetching ? <Preloader /> : null}
            {usersElement}
        </div>
    );
}

export default Users;