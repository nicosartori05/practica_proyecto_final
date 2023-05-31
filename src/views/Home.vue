<script setup>
import Nav from '../components/Nav.vue';
import ButtonHome from '../components/ButtonHome.vue';
</script>

<template>
    

    <section>
        <div class="row align-items-center mb-3">
            <div class="col-6">
                <h1 class="text-start h3">Home</h1> 
            </div>
            <div class="col-6 d-flex justify-content-end">
                <img src="../assets/lupa.png" alt="Icono flechas dobles" class="icono-h2" />
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <img src="../assets/perfil_prueba.jpg" alt="Foto de perfil de usuario" class="rounded-circle foto-perfil" />
            </div>
            <div class="col-8 d-flex align-items-center">
                <p class="text-start h3">Nicolás Santa Ana <span class="h4 bienvenida">¡Bienvenido!</span></p>
            </div>
        </div>
    </section>

    <section id="CardsHome" class="h-100">
        <div class="row d-flex justify-content-between">
            <div class="col-3">
                <ButtonHome route="Home" icon="hogar.png"/>
            </div>
            <div class="col-3">
                <ButtonHome route="Feed" icon="red-social.png"/>
            </div>
            <div class="col-3">
                <ButtonHome route="Partidos" icon="pelota.png"/>
            </div>
            <div class="col-3">
                <ButtonHome route="Red" icon="usuarios.png"/>
            </div>
        </div>
    </section>

    <section id="proximosPartidos" class="h-100">
        <div class="row mb-3">
            <div class="col-10">
                <h2 class="text-start h3"><span class="text-decoration-underline">Próximos</span> partidos</h2>
            </div>
            <div class="col-2">
                <router-link to="/partidos">
                    <img src="../assets/arrows-right.png" alt="Icono flechas dobles" class="icono-h2" />
                </router-link>    
            </div>
        </div>
        <div class="row px-3">
            <div class="card p-3">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-10">
                            <p class="card-title h3 text-start">Lunes 30/05 22hs</p>
                        </div>
                        <div class="col-2 d-flex justify-content-end">
                            <img src="../assets/arrows-right.png" alt="Icono flechas dobles" class="icono-h2" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-2 d-flex justify-content-start">
                            <img src="../assets/reloj.png" alt="Icono flechas dobles" class="icono-h2" />
                        </div>
                        <div class="col-10 d-flex align-items-end">
                            <p class="card-subtitle h6 text-body-secondary text-start">30/05/2023 22:00hs</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-2 d-flex justify-content-start">
                            <img src="../assets/alfiler.png" alt="Icono flechas dobles" class="icono-h2" />
                        </div>
                        <div class="col-10 d-flex align-items-end">
                            <p class="card-subtitle h6 text-body-secondary text-start">Club Ferro Carril Oeste</p>
                        </div>
                    </div>
                    
                    <div class="row justify-content-around">
                        <div class="col-6 fondo-boton-card-negro rounded">
                            <a href="#" class="text-white">Ver más</a>
                        </div>
                        <div class="col-6 fondo-boton-card rounded">
                            <a href="#" class="text-white">Inscribirme</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="canchas" class="h-100">
        <div class="row">
            <div class="col-10">
                <h2 class="text-start h3"><span class="text-decoration-underline">Conocé</span> las canchas</h2>
            </div>
            <div class="col-2">
                <router-link to="/canchas">
                    <img src="../assets/arrows-right.png" alt="Icono flechas dobles" class="icono-h2" />
                </router-link>
            </div>
        </div>
    </section>

    <section id="actividadReciente" >
        <div class="row">
            <div class="col-10">
                <h2 class="text-start h3"><span class="text-decoration-underline">Actividad</span> reciente</h2>
            </div>
            <div class="col-2">
                <router-link to="/actividad">
                    <img src="../assets/arrows-right.png" alt="Icono flechas dobles" class="icono-h2" />
                </router-link>
            </div>
        </div>
    </section>

    <Nav />
</template>

<style scoped>
    /* #CardsHome{
       margin-top: 6rem;
    } */

    /* #proximosPartidos{
        text-align: center;
    }

    #proximosPartidos div{
        align-items: center;
    } */

    section{
        margin-top: 2rem;
    }

    p {
        margin: 0;
    }

    .foto-perfil {
        width: 100%;
    }

    .icono-h2 {
        width: 25px;
        height: 25px;
    }

    .bienvenida {
        color: #5d880d;
    }

    .card-body {
        padding: 0;
    }

    .fondo-boton-card {
        background-color: #5d880d;
        width: 45%;
    }

    .fondo-boton-card-negro {
        background-color: #000000;
        width: 45%;
    }
</style>