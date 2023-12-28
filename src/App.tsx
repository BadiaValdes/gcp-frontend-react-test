import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState({
    name: '',
    last: '',
  });

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(dat => dat.json())
      .then(d =>  {
        console.log(d);
        setData(d)
    })
  },[])

  return (
    <>
      <h1>Node + React + GCP</h1>
      <div className="card">
        { data.name != '' && (<p>{data.name} - {data.last}</p>) }
      </div>
    </>
  )
}

export default App
