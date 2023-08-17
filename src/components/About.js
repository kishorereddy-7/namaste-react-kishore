import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/kishorereddy-7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        loggedInUser
        <UserContext.Consumer>
          {(data) => <h1 className="font-bold">{data?.loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is Namaste</h2>
        <UserClass user={this.state.userInfo} />
      </div>
    );
  }
}

export default About;
