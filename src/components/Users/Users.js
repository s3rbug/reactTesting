import React from "react"
import Paginator from "../../common/Paginator/Paginator"
import User from "./User/User"

const Users = ({ users, isFetching, followingInProgress, unfollow, follow, totalCount, currentPage, countPages, pageSize, onPageChanged }) => {
    const usersElement = users.map(u => (
        <User
            key={u.id}
            id={u.id}
            isFetching={isFetching}
            photos={u.photos}
            name={u.name}
            status={u.status}
            follow={follow}
            unfollow={unfollow}
            followed={u.followed}
            followingInProgress={followingInProgress}
        />
    ));
    return (
        <div>
            <Paginator
                totalCount={totalCount}
                currentPage={currentPage}
                countPages={countPages}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                isFetching={isFetching} />
            {usersElement}
        </div>
    );
}

export default Users;