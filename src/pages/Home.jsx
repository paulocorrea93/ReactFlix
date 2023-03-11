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
      <Row title='requestUpcoming' fetchURL={requests.requestUpcoming} />
      <Row title='requestTopRated' fetchURL={requests.requestTopRated} />
      <Row title='requestTrending' fetchURL={requests.requestTrending} />
      <Row title='requestTvPopular' fetchURL={requests.requestTvPopular} />
      <Row title='requestPopular' fetchURL={requests.requestPopular} />
    </div>
  );
};

export default Home;
