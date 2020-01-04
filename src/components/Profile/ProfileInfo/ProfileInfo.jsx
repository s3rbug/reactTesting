import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import defaultImage from "./../../../assets/defaultImage.jpg";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          className={classes.bg}
          alt="cool"
          src="https://umanpivo.ua/Media/images/catalog/main_image/4a9209ed43cb89353d6d2762b8d3a0f9.jpg"
        ></img>
      </div>
      <div className={classes.description}>
        <div>
          <img
            id={classes.ava}
            src={
              profile.photos.large === null
                ? defaultImage
                : profile.photos.large
            }
            alt="profilePhoto"
          />
        </div>
        <div>
          <span>{profile.fullName}</span>
        </div>
        <ProfileStatusHooks status={status} updateStatus={updateStatus} />
        <div>
          <span>
            {profile.lookingForAJob ? "Looking for a job" : "Has a job"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
