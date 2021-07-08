import http from "../http-common";

export const getAllUsers = () => {
  return http.get("/users");
};

export const getuser = id => {
  return http.get(`/users/${id}`);
};

export const createuser = data => {
  return http.post("/users", data);
};

export const updateuser = (id, data) => {
  return http.put(`/users/${id}`, data);
};

export const removeuser = id => {
  return http.delete(`/users/${id}`);
};
