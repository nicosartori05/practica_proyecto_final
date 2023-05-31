<script setup>
</script>

<template>
    <section class="row m-auto d-flex justify-content-center align-items-center vh-100 background-inicio">
        <div class="col-12 mt-5">
            <img src="../assets/logo-original.png" alt="Logo Doble-5" class="ancho-logo"/>
        </div>
        <div class="row justify-content-around mt-5">
            <div class="col-6 boton-inicio rounded">
                <a href="#/login" class="text-white">INICIAR SESIÓN</a>
            </div>
            <div class="col-6 boton-registro rounded">
                <a href="#/register" class="text-white">REGISTRARME</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .ancho-logo {
        width: 80%;
    }

    .boton-inicio {
        background-color: #5d880d;
        width: 45%;
        padding: 10px;
    }

    .boton-registro {
        background-color: #000000;
        width: 45%;
        padding: 10px;
    }

    .background-inicio {
        background-image: url("../assets/background-inicio.jpg");
        width: 100%;
        /* aspect-ratio: 2/1; */
        background-size: cover;
        background-position: 75% 35%;
        background-repeat: no-repeat;
    }
</style>