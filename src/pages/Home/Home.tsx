import { useEffect, useState } from "react";
import { GoogleAuth } from "google-auth-library";

export default function Home() {
  const [user, setUser] = useState<string>("Aqui va el nombre");

  const auth = new GoogleAuth();

  useEffect(() => {
    const authFetch = async () => {
      const authF = await auth.getIdTokenClient(
        "https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app"
      );
      const authHeader = await authF.getRequestHeaders();

      await fetch("https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app", {
        headers: new Headers({
          Authorization: authHeader["Authorization"],
        }),
      })
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
