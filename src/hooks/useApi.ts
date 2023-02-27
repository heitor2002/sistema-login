import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/users", { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("/users", { email, password });
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});

export default useApi;