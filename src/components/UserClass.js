import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const { name, location, html_url, avatar_url } = this.props?.user;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {html_url}</h4>
      </div>
    );
  }
}

export default UserClass;
