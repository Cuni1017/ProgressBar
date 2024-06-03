import React from "react"; //node_modules會自己對應

const UserEditor = ({ user, handler }) => {
  const { id, name, email, description } = user;
  //   let { user } = props;
  //   console.log(props);

  let textAreaHandler = (e) => {
    const { name, value } = e.target;
    handler("user", { ...user, [name]: value });
  };

  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <textarea
        name="description"
        cols="100"
        rows="10"
        onChange={textAreaHandler}
        value={description}
        // 使用defaultValue的話，就算父層的State沒更改，在網頁上也可以更改，較不好
      ></textarea>
      {/* <p>{description}</p> */}
      {/* <p>{user.videos}</p> */}
    </div>
  );
};

// class UserEditor extends React.Component {
//   render() {
//     return <p>UserEditor</p>;
//   }
// }

export default UserEditor;
