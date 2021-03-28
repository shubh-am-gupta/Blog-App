import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import { Avatar } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import "../styling/navbar.css";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();
  const logout = response => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = e => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <div className="navbar">
      <div className="navbar_header">Blog World 💬</div>
      {isSignedIn && (
        <div className="blog_search">
          <input
            className="search"
            placeholder="Search for a blog"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}
      {isSignedIn ? (
        <div className="navbar_userdata">
          <Avatar
            src={userData?.imageUrl}
            alt={userData?.name}
            className="user"
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="177606807582-atise6o4892uduiut6pffcupu9g7klae.apps.googleusercontent.com"
            render={renderProps => (
              <button
                className="logout_button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Logout 😦
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">User not available 😞</h1>
      )}
    </div>
  );
};

export default Navbar;
