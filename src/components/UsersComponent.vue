<template>
<div>

    <div class="bigBox1">
        <div class="bigBox">
            <h1> Mostrar Usuarios</h1>
            <button style="width:50%" @click="getUsers">Mostrar usuarios</button>
            <a>{{response}}</a>
        </div>
        <div style="padding: 5rem">
            <h1> Borrar Usuario</h1>
            <input v-model="idDelete">
            <button @click="deleteUser">Borrar Usuario</button>
            <a>{{deleteResponse}}</a>
        </div>

        <div class="bigBox" style="padding: 5rem;}">
            <h1>Modificar Usuario</h1>

            <h4>idDelete del usuario a modificar</h4>
            <input v-model="idModify">
            <h4>Email</h4>
            <input v-model="email">
            <h4>Password</h4>
            <input v-model="password">
            <button style="margin-top: 2rem;" @click="modifyUser">Modificar Usuario</button>
            <a style="margin-top: 2rem">{{modifyResponse}}</a>
        </div>
        

    </div>


</div>

</template>

<script lang="ts">
import UsersService from '../services/user'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    data(){
        return{
            response:"",
            email: "",
            password: "",
            deleteResponse:"",
            modifyResponse:"",
            idDelete:null,
            idModify:null
        }
    },
    methods: {
        async getUsers(){
            try{
                this.response = await (await UsersService.getUsers()).data;
            }catch(error){
                console.log(error)
                this.response = "Se ha producido un error"
            }
        },
        async deleteUser(){
            try {
                this.deleteResponse = (await UsersService.deleteUser(this.idDelete)).data;
                this.deleteResponse = "Usuario borrado correctamente"
            } catch (error) {
                this.deleteResponse = "Se ha producido un error borrando el usuario"
            }
        },
        async modifyUser(){
            try{
                this.modifyResponse = (await UsersService.modifyUser(this.idModify , this.email,this.password)).data
            }catch(error){
                this.modifyResponse = "Se ha producido un error modificando el usuario"
            }
        }   
    },

})

</script>

<style scoped>
.bigBox {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.bigBox1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
}
</style>