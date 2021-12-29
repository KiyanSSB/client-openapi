import axios from 'axios';



class UserService {
    URL = "https://localhost:44318";
    
    
    getUsers(){
        console.log(localStorage.getItem("token"));
        return axios.get(this.URL + "/api/Usuario"  ,{
            headers: {
                Authorization: `Bearer  ${localStorage.getItem("token")}`
            }
        })
    }

    deleteUser(id:number|null){
        console.log()
        return axios.delete(this.URL + "/api/Usuario" , {
            data:{
                id: id
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    }

    modifyUser(id:number|null, email:string , password:string){
        console.log(id + email + password)
        return axios.put(this.URL + "api/Usuario" , {
            data:{
                id:id,
                email:email,
                password:password
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    }
}

export default new UserService();