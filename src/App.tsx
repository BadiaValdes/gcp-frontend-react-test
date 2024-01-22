import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState({
    name: '',
    last: '',
  });

  useEffect(() => {
    fetch("https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app").then(dat => dat.json()).then(d =>  {
      console.log(d);
      setData(d)
    })
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        { data.name != '' && (<p>{data.name} - {data.last}</p>)   
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
