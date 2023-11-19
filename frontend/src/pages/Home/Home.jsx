import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Cookies from "js-cookie";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-white items-center text-center">
        {Cookies.get("jwtToken")}
      </h1>
    </div>
  );
};

export default Home;
