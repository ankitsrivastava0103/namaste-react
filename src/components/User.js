import { useState } from "react";

const User = ({ name, location }) => {
  const [countOne] = useState(1);
  const [countTwo] = useState(2);

  return (
    <div className="user-card">
      <h3>CountOne : {countOne}</h3>
      <h3>CountTwo : {countTwo}</h3>
      <h3>Name : {name}</h3>
      <h3>Location : {location}</h3>
      <h3>Social : ankitsrivastava0103</h3>
    </div>
  );
};

export default User;
