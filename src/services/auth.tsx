
export const apiUrl = 'http://localhost:5000/api';

// export const login = (data) =>{
//   fetch(`${apiUrl}/login`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       mode:'cors'
//     })
//       .then(dat => dat.json())
//       .then(d =>  {
//         console.log(d);
//     })
// }

export const login = async (data) =>{
  try {
    const res = await fetch(`${apiUrl}/login`, 
      {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const result = await res.json();
    const {usuario,token} = result; 
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('user', usuario);
    return result;
  } catch (error) {
    console.error(error);  
  }  
}