import React, { useState } from "react";
import "./Login.css";
import { FaRegTimesCircle, FaCheckCircle } from "react-icons/fa";

const Login = () => {
  const [isErrorNotificationVisible, setIsErrorNotificationVisible] =
    useState(false);
  const [isSuccessNotificationVisible, setSuccessNotificationVisible] =
    useState(false);

  const credentials = {
    email: "admin@gmail.com",
    password: "admin",
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = (e) => {
    if (
      data.email === credentials.email &&
      data.password === credentials.password
    ) {
      setSuccessNotificationVisible(true);
      setIsErrorNotificationVisible(false);
    } else {
      setIsErrorNotificationVisible(true);
      setSuccessNotificationVisible(false)
    }
  };

  return (
    <div className="container">
      {isSuccessNotificationVisible
        ? (
            <div className="successNotificationContainer">
              <FaCheckCircle />
              <p className="successMessage">Login Success!</p>
            </div>
          )
        : ""}
      <div className="LoginContainer">
        <h1>Login</h1>
        <p className="subtitle">Local Services Marketplace</p>
        <div className="inputFields">
          <p className="placeholderText">
            Email <span style={{ color: "red" }}>*</span>
          </p>
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="inputFields">
          <p className="placeholderText">
            Password <span style={{ color: "red" }}>*</span>
          </p>
          <input
            name="password"
            value={data.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </div>
        {isErrorNotificationVisible ? (
          <div className="notificationContainer">
            <FaRegTimesCircle />
            <p className="message">
              Email or Password is incorrect! Please try again
            </p>
          </div>
        ) : (
          ""
        )}

        <div className="submitButtonContainer" onClick={submitData}>
          <p className="btnText"> Login </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
