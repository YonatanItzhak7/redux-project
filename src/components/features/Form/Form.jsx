import "./Form.css";
import React from "react";
import { addUser } from "../../../store/actions/user-actions";
import { connect } from "react-redux";
import { useState } from "react";

const mapStateToProps = (state) => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => ({
  newAddUser: (userObj) => dispatch(addUser(userObj)),
});

function Form(props) {
  const [user, setUser] = useState(props.users[0]);
  const changeInput = (e) => {
    user[e.target.name] = e.target.value;
  };
  return (
    <div class="container">
      <div class="brand-logo"></div>
      <div class="brand-title">FORM</div>
      <div class="inputs">
        <label>First Name:</label>
        <input name="fName" onChange={changeInput} type="text" />
        <label>Last Name:</label>
        <input name="lName" onChange={changeInput} type="text" />
        <label>Age:</label>
        <input name="age" onChange={changeInput} type="number" />
        <label>Email:</label>
        <input name="email" onChange={changeInput} type="email" />
      <button onClick={() => props.newAddUser(user)}>Add</button>
      </div>
      <a href="https://twitter.com/prathkum">MADE BY PRATHAM</a>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
