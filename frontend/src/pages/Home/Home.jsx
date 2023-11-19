import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Question from "../../components/Question/Question";

const Home = () => {
  return (
    <section className="background-home min-h-screen">
      <Navbar />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </section >
  );
};

export default Home;
