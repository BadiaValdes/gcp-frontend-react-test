
export const apiUrl = 'http://localhost:5000/api';

export const login = (data) =>{
  fetch(`${apiUrl}/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode:'cors'
    })
      .then(dat => dat.json())
      .then(d =>  {
        console.log(d);
    })
}