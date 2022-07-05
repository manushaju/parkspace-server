import React, {useEffect, useState} from 'react'
import Navigation from './components/Navigation'

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
      <a href='/pages'>Go here.....</a>
      <h1>Below are the currently s user accounts {backendData.names}</h1>
      {
        (typeof backendData.names === "undefined") ? 
        ( <p>Loading....</p>) :
        ( backendData.names.map((user, i) => (
          <h3 key={i}>{user}</h3>
        )))
      }
    </>
  )
}

export default App