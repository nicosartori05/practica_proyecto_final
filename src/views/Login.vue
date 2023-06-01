<script setup>
    import { login } from "../services/auth.js";
    import {ref} from 'vue';
    import { useRouter } from "vue-router";

    const{fields, loading, handleSubmit} = useLogin();

    function useLogin(){
        const router = useRouter();
        
        const fields = ref({
            email: '',
            password: '',
        })
        
        const loading = ref(false);
    
        async function handleSubmit() {
            loading.value = true;

            try {
                await login({
                    ...fields.value,
                })
                loading.value = false;
                router.push('/home');
            }catch (err) {
                console.log('[Login] Error completo: ',err);
                
                // if (err.errorEmail == true){
                //     return errorEmail;
                // }

                // if (err.errorPassword == true){
                //     return errorPassword;
                // }
                // return err;
                
                // console.log('[Login] Error completo: ',err);
                // console.log('[Login] Error mensaje: ',err.message); 
            }
        }

        return {
            fields,
            loading,
            handleSubmit,
        }
    }
</script>

<template>
    <div class="row" id="header">
        <div class="col-12">
            <h2 class="text-center m-5">Iniciar Sesión</h2>        
        </div>
        <div class="col-12 text-center">
            <img src="../assets/logo-original.png" alt="Logo Doble-5">
        </div>
    </div>

    <div class="row">
        <div class="col-xs">
            <form
                action="#"
                method="POST"
                @submit.prevent = "handleSubmit"
            >
                <div class="d-flex justify-content-center">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        v-model="fields.email"
                    >
                    <!-- <template v-if="handleSubmit.errorEmail">
                        <label for="email">Email incorrecto! Intentalo nuevamente.</label>
                    </template> -->
                </div>
                <div class="d-flex justify-content-center">
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder="Contraseña"
                        v-model="fields.password"
                    >
                    <!-- <template v-if="handleSubmit.errorPassword">
                        <label for="password">¡Password incorrecto! Intentalo nuevamente.</label>
                    </template> -->
                </div>
                
                

                <button type="submit" class="btn btn-dark h-50">INICIAR SESIÓN</button>
            </form>
        </div>
    </div>

    <div class="row pb-5" id="registro">
        <div class="col-xs-12">
            <a href="">¿Olvidaste tu contraseña?</a>
        </div>
        <div class="col-xs-12">
            <router-link to="/register" class="mt-4"><button class="btn mt-5" id="registerbutton">CREA UNA CUENTA</button></router-link>
        </div>
    </div>
</template>

<style scoped>
    #header{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    img{
        width: 80%;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    form div{
        margin: 1rem 0;
    }

    input{
        width: 100%;
        padding: .5rem;
        border: .2px solid rgb(203, 203, 203);
        border-radius: 20px;
    }

    form button{
        margin-top: 2rem;
        font-weight: 600;
        padding: .5rem;
        border-radius: 18px;
        height: 150%;
    }

    #registro{
        margin-top: 2rem;
        text-align: center;
    }

    a{
        text-decoration: none;
        color: #73a812;
        text-align: center;

    }

    #registerbutton{
        margin-top: 2rem;
        font-weight: 600;
        padding: .5rem;
        border-radius: 18px;
        color: white;
        background-color: #73a812;
    }
</style>