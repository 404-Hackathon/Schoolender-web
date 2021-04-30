import http from "./httpServices";
export function login(email, password) {
  const URL = "http://localhost:4000/login";
  return http.post(URL, {
    email: email,
    password: password,
  });
}
