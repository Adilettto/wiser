import axios from "axios";

export const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
})


instance.interceptors.response.use((resp:any) => resp, async error => {
    if(error.response.status === 401) {
        const response = await instance.post("refresh", {}, {withCredentials: true});

        if(response.status === 200) {
            instance.defaults.headers.common["Authorization"] = `Bearer ${response.data['token']}`;
    
            return instance(error.config)
        }
    }

    

    return error;
})

