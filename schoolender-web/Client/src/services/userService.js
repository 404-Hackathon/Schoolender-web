import http from "./httpServices.js";

export function register(user) {
  const URL = "https://localhost:4000/register";
  return http.post(URL, {
    username: user.username,
    email: user.email,

    password: user.password,
  });
}
