import axios from 'axios';



class RegisterService {
    URL = "https://localhost:44318"

    register(email:string,password:string){
        console.log(this.URL)
        return axios({
            method: 'post',
            url: this.URL +  "/api/Usuario",
            data:{
                id: 0,
                email: email,
                password: password
            }

        })
    }
    
    login(email:string,password:string){
        return axios({
            method: 'post',
            url: this.URL +  "/api/Authentication",
            data:{
                id:0,
                email:email,
                password:password
            }
        })
    }

}

export default new RegisterService();