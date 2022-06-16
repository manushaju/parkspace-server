import React, {useEffect, useState} from 'react'

function App() {

  var [backendData, setBackendData] = useState([{}])

  useEffect( () => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, [])

  return (
    <div>
      <h1>Below are the currently available user accounts {backendData.names}</h1>
      {
        (typeof backendData.names === "undefined") ? 
        ( <p>Loading....</p>) :
        ( backendData.names.map((user, i) => (
          <h3 key={i}>{user}</h3>
        )))
      }
    </div>
  )
}

export default App