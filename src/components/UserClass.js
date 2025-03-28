import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countOne: 1,
      userInfo: {
        name: "",
        location: "",
        avatar_url: null,
      },
    };
  }

  componentDidMount = () => {
    // Make an API Call
    this.fetchUserInfo();
  };

  fetchUserInfo = async () => {
    const data = await fetch(
      "https://api.github.com/users/ankitsrivastava0103"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  };

  handleButtonClick = () => {
    this.setState({
      countOne: this.state.countOne + 1,
    });
  };

  render() {
    // const { name, location } = this.props;
    const { countOne } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h3>CountOne : {countOne}</h3>
        <button onClick={this.handleButtonClick}>Increment Count</button>
        <img src={avatar_url} />
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Social : ankitsrivastava0103</h3>
      </div>
    );
  }
}

export default UserClass;
