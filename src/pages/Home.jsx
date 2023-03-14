import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import requests from "../required";

<Navbar />;
const Home = () => {
  return (
    <div>
      <Main />
      <Row sliderID='1' title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row sliderID='2' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row sliderID='3' title='Trending' fetchURL={requests.requestTrending} />
      <Row sliderID='4' title='Tv Popular' fetchURL={requests.requestTvPopular} />
      <Row sliderID='5' title='Popular' fetchURL={requests.requestPopular} />
    </div>
  );
};

export default Home;
