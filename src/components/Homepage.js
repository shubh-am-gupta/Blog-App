import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import bookImage from "../features/book.png";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import "../styling/home.css";

const Homepage = () => {
  const dispatch = useDispatch();

  const login = response => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="home_page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn && (
        <div className="login_message">
          <h2>📗</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resources for reading blogs. Just
            sign up and start reading some quality blogs.
          </p>
          <GoogleLogin
            clientId="177606807582-atise6o4892uduiut6pffcupu9g7klae.apps.googleusercontent.com"
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login_button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
    </div>
  );
};

export default Homepage;
