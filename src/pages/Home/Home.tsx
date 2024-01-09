import { useEffect, useState } from "react"


export default function Home() {
  const [user, setUser]= useState<string>('Aqui va el nombre');

  useEffect(()=>{
    fetch("https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app/users").then(data => data.json).then(json => {
      console.log(json)
    })
  },[])

  return (
    <div style={{color:'#fff'}}>Home <span>{user}</span></div>
  )
}
