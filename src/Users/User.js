import React from "react";

export default class User extends React.Component {
  render() {
    return (
      <div className="userCard">
        <div className="userName">
          {this.props.title} {this.props.first} {this.props.last}
        </div>
        <div className="userInfo">
          <img
            className="userPhoto"
            alt={this.props.last}
            src={this.props.userPhoto}
          />
          <div className="userAge">I have {this.props.userAge} years old</div>
          <div className="userMail">{this.props.userMail}</div>
          <div className="userPhone">{this.props.userPhone}</div>
          <div className="userCity">{this.props.userCity}</div>
        </div>
        <div className="userSex">{this.props.userSex}</div>
      </div>
    );
  }
}
