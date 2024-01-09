import { useEffect, useState } from "react";
import { GoogleAuth } from "google-auth-library";

export default function Home() {
  const [user, setUser] = useState<string>("Aqui va el nombre");

 

  useEffect(() => {
    const authFetch = async () => {
    

      await fetch("https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app")
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
