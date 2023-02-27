import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.get("/users");
    const findUser = response.data.find((item) => {
      const verifyToken = item.token === token;
      if(verifyToken){
        return item;
      }else{
        return null;
      }
    })
    
    return {
      user: findUser,
      token: findUser.token,
    };
  },
  signin: async (email: string, password: string) => {
    const response = await api.get("/users");
    const findUser = response.data.find((item) => {
      const verifyEmail = item.email === email;
      const verifyPassword = item.password === password;
      if(verifyEmail){
        if(verifyEmail && verifyPassword){
          return item;
        }else{
          return null;
        }
      }else{
        return null;
      }
    })

    
    return {
      user: findUser,
      token: findUser.token,
    };
    
    // return response.data;
  },

  logout: async () => {
    return {status: true}
  },
});

export default useApi;
