import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";

function App() {
  console.log("top", requests.fetchTopRated);
  return (
    <div className="App">
      {/* {Nav} */}
      {/* {Banner} */}
      <Banner />
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchtTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentares} />
    </div>
  );
}

export default App;
