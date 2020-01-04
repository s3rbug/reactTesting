import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import defaultImage from "./../../../assets/defaultImage.jpg";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatus";

function ProfileInfo(props) {
  if (!props.profile) {
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
        <img
          id={classes.ava}
          src={
            props.profile.photos.large === null
              ? defaultImage
              : props.profile.photos.large
          }
          alt="profilePhoto"
        />
        <br />
        <span>{props.profile.fullName}</span>
        <br />
        <ProfileStatusHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <br />
        <span>
          {props.profile.lookingForAJob ? "Looking for a job" : "Has a job"}
        </span>
      </div>
    </div>
  );
}

export default ProfileInfo;
