import React from "react";
import { useSelector } from "react-redux";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import { selectSignedIn } from "./features/userSlice";
import "./styling/app.css";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
      {!isSignedIn && (
        <footer
          style={{
            height: "5vh",
            backgroundColor: "black",
            color: "white",
            paddingTop: "3px",
            textAlign: "center",
          }}
        >
          &copy; Made By Shubham
        </footer>
      )}
    </div>
  );
};

export default App;
