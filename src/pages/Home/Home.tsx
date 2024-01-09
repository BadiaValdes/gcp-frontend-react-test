import { useEffect, useState } from "react"
const {GoogleAuth} = require('google-auth-library')


export default function Home() {
  const [user, setUser]= useState<string>('Aqui va el nombre');

  const auth = new GoogleAuth();

  const clientId = '107158590866213564417';

  useEffect(()=>{
    const authFetch = async () => {
      const authF = await auth.getIdTokenClient('https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app')
      const authHeader = await authF.getRequestHeaders();
    
    

      await fetch("https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app", {
        headers: new Headers({
          'Authorization': authHeader
        })
      }).then(data => data.json()).then(json => {
        console.log(json)
        setUser('Termino el fetch');
      })
    }

    authFetch();
  },[])

  return (
    <div style={{color:'#fff'}}>Home <span>{user}</span></div>
  )
}
