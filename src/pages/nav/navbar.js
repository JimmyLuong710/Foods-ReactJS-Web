import React from "react";
import "./style.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const NavBar = (props) => {
  console.log(props);
  useEffect(() => {
    console.log("re-rendering");
  });
  const [creditials, setCredentials] = useState({
    firstName: "A",
    lastName: "B",
    email: "C",
  });
  const [message, setMessage] = useState("fail");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  let handleOnChange = (e, type) => {
    let data = creditials;
    data[type] = e.target.value;
    setCredentials(data);
  };
  let handleSubmit = async () => {
    try {
      let data = await axios.post("http://localhost:3000/add", {
        firstName: creditials.firstName,
        lastName: creditials.lastName,
        email: creditials.email,
      });
      setData(data.data.data);
    } catch (e) {
      console.log(e.response);
    }
  };

  let handleGetAllUsers = async () => {
    setIsLoading("Loading......");
    try {
      let users = await axios.get("http://localhost:3000/get-all-user");
      // console.log(users)
      setData(users.data.users);
      setIsLoading("");
    } catch (e) {
      console.log(e);
    }
  };

  let handleDelete = async (item) => {
    try {
      let users = await axios.delete(
        `http://localhost:3000/delete-user/${item.id}`,
        { crossdomain: true }
      );
      // console.log(users)
      setData(users.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  let handleOnclick = () => {
    props.dosth()
    props.dosth1()
    // console.log(props)
    props.name = 'nothing'
  }
  return (
    <div>
      <div>
        first name
        <input
          value={creditials.firstName}
          name="firstName"
          onChange={(e) => handleOnChange(e, "firstName")}
        />
      </div>
      <div>
        last name
        <input
          value={creditials.lastName}
          name="lastName"
          onChange={(e) => handleOnChange(e, "lastName")}
        />
      </div>
      <div>
        email
        <input
          value={creditials.email}
          name="email"
          onChange={(e) => handleOnChange(e, "email")}
        />
      </div>
      <div style={{ color: "red" }}> {message}</div>
      <button
        onClick={(e) => {
          handleSubmit();
        }}
      >
        submit{" "}
      </button>

      <button
        onClick={(e) => {
          handleGetAllUsers();
        }}
      >
        {" "}
        get all users
      </button>
      <p>{isLoading}</p>
      <div>
        {data.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>create at</th>
                <th>update at</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <button onClick={() => handleDelete(item)}>delete</button>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
        <button onClick={() => handleOnclick()}>click me</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  age: state.age,
  email: state.email,
  num: state.age
});

const mapDispatchToProps = (dispatch) => ({
  dosth: (data) => dispatch({ type: "DO_STH", payload: data }),
  dosth1: (data) => dispatch({type: 'RANDOM_NUMBER', payload: data})
});
 
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
