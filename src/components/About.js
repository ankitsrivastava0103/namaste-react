import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="w-6/12 m-auto ">
      <h1>About Us Page</h1>
      <UserClass name={"Ankit"} location={"Kolkata"} />
    </div>
  );
};

export default About;
