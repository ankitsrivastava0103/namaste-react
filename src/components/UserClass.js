import React from "react";
import UserContext from "../utils/UserContext";

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
      <div className="">
        <h3>CountOne : {countOne}</h3>
        <button
          className=" w-[200px] my-2 py-2 cursor-pointer bg-gray-300"
          onClick={this.handleButtonClick}
        >
          Increment Count
        </button>
        <img className="w-[250px] h-[250px]" src={avatar_url} />
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h3 className="font-bold">Name : {loggedInUser}</h3>
          )}
        </UserContext.Consumer>
        <h3>Location : {location}</h3>
        <h3>Social : ankitsrivastava0103</h3>
      </div>
    );
  }
}

export default UserClass;
