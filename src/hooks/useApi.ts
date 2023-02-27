import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/validate-token", { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    const response = await api.get("/users");
    console.log(response.data)
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

    console.log(findUser)
    
    return {
      user: findUser,
      token: findUser.token,
    };
    
    // return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});

export default useApi;
