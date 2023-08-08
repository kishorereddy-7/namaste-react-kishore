import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState("name");
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>Name: Kishore</h2>
      <h3>Location: Ongole</h3>
      <h4>Contact: @kishore</h4>
      {props.name}
    </div>
  );
};

export default User;
