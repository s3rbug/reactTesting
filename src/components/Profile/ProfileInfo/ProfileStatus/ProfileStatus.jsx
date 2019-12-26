import React from "react";
import classes from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: true,
    status: this.props.status
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = e => {
    this.setState({ status: e.target.value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <span
              onDoubleClick={() => {
                this.toggleEditMode();
              }}
            >
              {!this.state.status ? (
                <span className={classes.emptyStatus}>Status is empty!</span>
              ) : (
                this.state.status
              )}
            </span>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={!this.state.status ? "" : this.state.status}
              autoFocus
              placeholder="Enter your status"
              onChange={this.onStatusChange}
              onBlur={() => {
                this.toggleEditMode();
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
