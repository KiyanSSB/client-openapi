<template>
    <div class="flex-component">
        <div>
            <p> Email </p>
            <input v-model="email"> 

            <p> Contraseña </p>
            <input v-model="password">

            <button @click="register">Registro</button>
            <button @click="login"> Login </button>
            <textarea v-model="token"></textarea> 

        </div>
    
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import RegisterService from '../services/register'
    export default defineComponent({
        data(){
            return {
                email: '',
                password: '',
                token: ''
            }
        },    
        methods: {
            async register(){
                try{
                    console.log(this.email, this.password);
                    const respuesta = await RegisterService.register(this.email,this.password);
                    console.log(respuesta)
                    this.$router.push("/login")
                }catch(error){
                    console.log(error)
                }
           },
            async login() {
                try{
                    console.log(this.email, this.password);
                    this.token = await (await RegisterService.login(this.email,this.password)).data;

                    localStorage.setItem("token" , this.token);
                }catch(error){
                    console.log(error)
                }
            }
        },
    })
</script>


<style scoped>
     .flex-component{
         display: flex;
         justify-content: center;
     }
</style>

