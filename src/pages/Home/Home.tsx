import { useEffect, useState } from "react";
import { GoogleAuth } from "google-auth-library";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState<string>("Aqui va el nombre");

  useEffect(() => {
    const authFetch = async () => {
      const serviceRequestOptions = {
        headers: {
          "Metadata-Flavor": "Google",
        },
      };

      const metaData = await fetch(
        "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app",
        serviceRequestOptions
      );

      console.log(metaData);

      // await fetch("https://gcp-backend-express-test-22vikqc2mq-uc.a.run.app", serviceRequestOptions)
      //   .then((data) => data.json())
      //   .then((json) => {
      //     console.log(json);
      //     setUser("Termino el fetch");
      //   });
    };

    authFetch();
  }, []);

  return (
    <div style={{ color: "#fff" }}>
      Home <span>{user}</span>
    </div>
  );
}
