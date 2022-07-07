import React, {useEffect, useState} from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import {Outlet, Link} from 'react-router-dom';

function App() {

  var [backendData, setBackendData] = useState([{}])

  useEffect( () => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, []);

  return (
    <>
      <Navigation />
      <h1>Below are the currently user accounts {backendData.names}</h1>
      {
        (typeof backendData.names === "undefined") ? 
        ( <p>Loading....</p>) :
        ( backendData.names.map((user, i) => (
          <h3 key={i}>{user}</h3>
        )))
      }
      <Outlet />
      <Footer />
    </>
  )
}

export default App