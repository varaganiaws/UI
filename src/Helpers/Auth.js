import { API } from "../Backend";
import axios from "axios";

export const isAuthenticated = () => {
    return sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== undefined;
}

export const getUserName = () => {
    const name = sessionStorage.getItem('fullName');
    if(name !== null && name !== undefined) {
        return JSON.parse(name);
    }
    return false;
}

export const getUserId = () => {
    const id = sessionStorage.getItem('id');
    if(id !== null && id !== undefined) {
        return JSON.parse(id);
    }
    return false;
}



// Login
export const loginApi = async (email, password) => {

    const res = await axios.post(`${API}/signin`, {
        email,
        password
    });
         if(res.data.message === 'success'){
            sessionStorage.setItem('token', JSON.stringify(res.data.token));
            sessionStorage.setItem('fullName', JSON.stringify(res.data.fullName));
            sessionStorage.setItem('id', JSON.stringify(res.data.userId));
            return true;
            // return res.json();
        }
        return false;

}

// Register
// export const register = (fullName, email, password) => {
//     return fetch(`${API}/register`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             fullName,
//             email,
//             password
//         })
//     })
//         .then(res => {
//             return res.json();
//         })
//         .catch(err => console.log(err));
// }

//get all services
export const getServices =async () => {
   const res = await axios.get(`${API}/get-services/${getUserId()}`);
    return res.data;
}

//post service by id 
export const postServiceById = async (id) => {
    const res = await axios.post(`${API}/new-service/${id}/${getUserId()}`);
    return res.data;
}

//signout
export const signout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('fullName');
    return true;
}