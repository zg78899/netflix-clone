import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  console.log('top',requests.fetchTopRated)
  return (
    <sdiv className="App">
      <h1>Hey clever programmer! let's build Netflix clone -coding</h1>
      <Row
      isLargeRow={true} 
      title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>

      <Row title="Trending Now" fetchUrl={requests.fetchtTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentares}/> 
    </sdiv>
  );
}

export default App;
