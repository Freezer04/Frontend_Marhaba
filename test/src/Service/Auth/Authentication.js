import axios from 'axios';
const APP_URL = " http://localhost:8000/api/auth";

export function login(email, password) {
  return axios.post(`${APP_URL}/login`, {
    email: email,
    password: password,
  });
}


const register = async (
  username,
  email,
  gender,
  role,
  password,
  repeated_password
) => {
  return await axios.post(`${APP_URL}/register`, {
    username,
    email,
    password,
    repeated_password,
    role,
    gender,
  });
};

export default register;


