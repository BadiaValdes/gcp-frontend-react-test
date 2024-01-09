import { useEffect, useState } from "react";
import { GoogleAuth } from "google-auth-library";

export default function Home() {
  const [user, setUser] = useState<string>("Aqui va el nombre");

 

  useEffect(() => {
    const authFetch = async () => {
      const auth = new GoogleAuth();
      await auth.getIdTokenClient(
        "https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app"
      );
      // const authHeader = await authF.getRequestHeaders();

      const serviceRequestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ''
        },
        timeout: 3000,
      };
    

      await fetch("https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app", serviceRequestOptions)
        .then((data) => data.json())
        .then((json) => {
          console.log(json);
          setUser("Termino el fetch");
        });
    };

    authFetch();
  }, []);

  return (
    <div style={{ color: "#fff" }}>
      Home <span>{user}</span>
    </div>
  );
}
