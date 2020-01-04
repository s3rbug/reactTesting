import React, { useState, useEffect } from "react";
import classes from "./ProfileStatus.module.css";

const ProfileStatusHooks = props => {
    [editMode, setEditMode] = useState(false)
    [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    toggleEditMode = () => {
        setEditMode(!editMode)
        props.updateStatus(status);
    };

    onStatusChange = e => {
        setStatus(e.target.value)
    };

    return (
        <div>
            {editMode ? (
                <div>
                    <span
                        onDoubleClick={() => {
                            toggleEditMode();
                        }}
                    >
                        {!status ? (
                            <span className={classes.emptyStatus}>Status is empty!</span>
                        ) : (
                                state.status
                            )}
                    </span>
                </div>
            ) : (
                    <div>
                        <input
                            type="text"
                            value={!status ? "" : status}
                            autoFocus
                            placeholder="Enter your status"
                            onChange={onStatusChange}
                            onBlur={() => {
                                toggleEditMode();
                            }}
                        />
                    </div>
                )}
        </div>
    );
}

export default ProfileStatusHooks;
